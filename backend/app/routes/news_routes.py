from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel
from typing import Optional

from ..auth import get_current_admin
from ..database import supabase

router = APIRouter(prefix="/api/news", tags=["news"])

TABLE = "news_articles"


# ── Pydantic Models ──

class AuthorModel(BaseModel):
    name: str
    role: str = ""


class SidebarItemModel(BaseModel):
    label: str
    text: str


class SidebarModel(BaseModel):
    title: str = ""
    items: list[SidebarItemModel] = []
    ctaText: str = ""


class SectionModel(BaseModel):
    type: str  # paragraph | heading | bullets
    text: str = ""
    level: Optional[int] = None
    items: Optional[list[str]] = None


class NewsArticleCreate(BaseModel):
    slug: str
    category: str
    date: str
    title: str
    publication: str = ""
    articleType: str = "news"  # news | press_release | featured
    author: AuthorModel
    heroImage: str = ""
    quote: str = ""
    excerpt: str = ""
    sections: list[SectionModel] = []
    sidebar: SidebarModel = SidebarModel()
    relatedSlugs: list[str] = []


class NewsArticleUpdate(BaseModel):
    category: Optional[str] = None
    date: Optional[str] = None
    title: Optional[str] = None
    publication: Optional[str] = None
    articleType: Optional[str] = None
    author: Optional[AuthorModel] = None
    heroImage: Optional[str] = None
    quote: Optional[str] = None
    excerpt: Optional[str] = None
    sections: Optional[list[SectionModel]] = None
    sidebar: Optional[SidebarModel] = None
    relatedSlugs: Optional[list[str]] = None


# ── Helpers ──

def row_to_article(row: dict) -> dict:
    """Convert a DB row to the frontend article shape."""
    return {
        "id": row["id"],
        "slug": row["slug"],
        "category": row["category"],
        "date": row["date"],
        "title": row["title"],
        "publication": row.get("publication", ""),
        "articleType": row.get("article_type", "news"),
        "author": {
            "name": row["author_name"],
            "role": row.get("author_role", ""),
        },
        "heroImage": row.get("hero_image", ""),
        "quote": row.get("quote", ""),
        "excerpt": row.get("excerpt", ""),
        "sections": row.get("sections", []),
        "sidebar": row.get("sidebar", {"title": "", "items": [], "ctaText": ""}),
        "relatedSlugs": row.get("related_slugs", []),
    }


def article_to_row(data: dict) -> dict:
    """Convert frontend article shape to DB row."""
    row = {
        "slug": data["slug"],
        "category": data["category"],
        "date": data["date"],
        "title": data["title"],
        "publication": data.get("publication", ""),
        "article_type": data.get("articleType", "news"),
        "author_name": data["author"]["name"],
        "author_role": data["author"].get("role", ""),
        "hero_image": data.get("heroImage", ""),
        "quote": data.get("quote", ""),
        "excerpt": data.get("excerpt", ""),
        "sections": data.get("sections", []),
        "sidebar": data.get("sidebar", {}),
        "related_slugs": data.get("relatedSlugs", []),
    }
    return row


# ── GET /api/news — public: list all articles ──

@router.get("")
def list_articles(article_type: Optional[str] = None):
    query = supabase.table(TABLE).select("*")
    if article_type:
        query = query.eq("article_type", article_type)
    res = query.order("created_at", desc=True).execute()
    return [row_to_article(r) for r in res.data]


# ── GET /api/news/{slug} — public: single article ──

@router.get("/{slug}")
def get_article(slug: str):
    res = supabase.table(TABLE).select("*").eq("slug", slug).execute()
    if not res.data:
        raise HTTPException(status_code=404, detail="Article not found")
    return row_to_article(res.data[0])


# ── POST /api/news — admin: create article ──

@router.post("", status_code=status.HTTP_201_CREATED)
def create_article(body: NewsArticleCreate, admin: dict = Depends(get_current_admin)):
    # Check slug uniqueness
    existing = supabase.table(TABLE).select("id").eq("slug", body.slug).execute()
    if existing.data:
        raise HTTPException(status_code=409, detail="An article with this slug already exists")

    row = article_to_row(body.model_dump())
    res = supabase.table(TABLE).insert(row).execute()
    return row_to_article(res.data[0])


# ── PUT /api/news/{slug} — admin: update article ──

@router.put("/{slug}")
def update_article(slug: str, body: NewsArticleUpdate, admin: dict = Depends(get_current_admin)):
    existing = supabase.table(TABLE).select("id").eq("slug", slug).execute()
    if not existing.data:
        raise HTTPException(status_code=404, detail="Article not found")

    updates = {}
    data = body.model_dump(exclude_none=True)

    if "author" in data:
        updates["author_name"] = data["author"]["name"]
        updates["author_role"] = data["author"].get("role", "")
        del data["author"]

    if "articleType" in data:
        updates["article_type"] = data.pop("articleType")

    if "heroImage" in data:
        updates["hero_image"] = data.pop("heroImage")

    if "relatedSlugs" in data:
        updates["related_slugs"] = data.pop("relatedSlugs")

    if "sidebar" in data:
        sidebar = data.pop("sidebar")
        updates["sidebar"] = sidebar

    if "sections" in data:
        updates["sections"] = data.pop("sections")

    updates.update(data)

    if not updates:
        raise HTTPException(status_code=400, detail="No fields to update")

    res = supabase.table(TABLE).update(updates).eq("slug", slug).execute()
    return row_to_article(res.data[0])


# ── DELETE /api/news/{slug} — admin: delete article ──

@router.delete("/{slug}")
def delete_article(slug: str, admin: dict = Depends(get_current_admin)):
    existing = supabase.table(TABLE).select("id").eq("slug", slug).execute()
    if not existing.data:
        raise HTTPException(status_code=404, detail="Article not found")

    supabase.table(TABLE).delete().eq("slug", slug).execute()
    return {"message": "Article deleted"}
