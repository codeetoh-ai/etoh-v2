from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import Optional
import logging

from ..auth import get_current_admin
from ..database import supabase

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/clinical-perspectives", tags=["clinical-perspectives"])

TABLE = "clinical_perspectives"
SETTINGS_KEY = "main"


class TestimonialModel(BaseModel):
    name: str = ""
    role: str = ""
    quote: str = ""
    footerLabel: str = ""
    image: str = ""


class ClinicalSettings(BaseModel):
    sectionTitle: str = "Clinical Perspectives"
    testimonials: list[TestimonialModel] = []


class ClinicalSettingsUpdate(BaseModel):
    sectionTitle: Optional[str] = None
    testimonials: Optional[list[TestimonialModel]] = None


# ── GET /api/clinical-perspectives — public ──

@router.get("")
def get_clinical():
    try:
        res = supabase.table(TABLE).select("*").eq("key", SETTINGS_KEY).execute()
    except Exception as e:
        logger.warning(f"clinical_perspectives table not accessible: {e}")
        return None
    if not res.data:
        return None
    row = res.data[0]
    return row.get("settings", None)


# ── PUT /api/clinical-perspectives — admin ──

@router.put("")
def update_clinical(body: ClinicalSettingsUpdate, admin: dict = Depends(get_current_admin)):
    updates = body.model_dump(exclude_none=True)
    if not updates:
        raise HTTPException(status_code=400, detail="No fields to update")

    if "testimonials" in updates:
        updates["testimonials"] = [
            t.model_dump() if hasattr(t, "model_dump") else t
            for t in updates["testimonials"]
        ]

    try:
        res = supabase.table(TABLE).select("*").eq("key", SETTINGS_KEY).execute()
    except Exception as e:
        logger.error(f"clinical_perspectives table not accessible: {e}")
        raise HTTPException(
            status_code=503,
            detail="Database table 'clinical_perspectives' does not exist. Please create it in Supabase."
        )

    if res.data:
        existing = res.data[0].get("settings", {})
        existing.update(updates)
        supabase.table(TABLE).update({"settings": existing}).eq("key", SETTINGS_KEY).execute()
        return existing
    else:
        supabase.table(TABLE).insert({"key": SETTINGS_KEY, "settings": updates}).execute()
        return updates
