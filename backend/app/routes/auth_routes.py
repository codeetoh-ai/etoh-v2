from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel, EmailStr

from ..auth import verify_admin, create_access_token, get_current_admin

router = APIRouter(prefix="/api/auth", tags=["auth"])


class LoginRequest(BaseModel):
    email: str
    password: str


class LoginResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    email: str


class MeResponse(BaseModel):
    email: str
    role: str = "admin"


# ── POST /api/auth/login ──

@router.post("/login", response_model=LoginResponse)
def login(body: LoginRequest):
    if not verify_admin(body.email, body.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    token = create_access_token(body.email)
    return LoginResponse(access_token=token, email=body.email)


# ── POST /api/auth/logout ──
# (Stateless JWT — client discards the token. This endpoint exists for
#  frontend symmetry and can later be extended with a token blacklist.)

@router.post("/logout")
def logout(admin: dict = Depends(get_current_admin)):
    return {"message": "Logged out successfully"}


# ── GET /api/auth/me  — verify token & return current admin info ──

@router.get("/me", response_model=MeResponse)
def me(admin: dict = Depends(get_current_admin)):
    return MeResponse(email=admin["sub"])
