from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routes.auth_routes import router as auth_router
from .routes.news_routes import router as news_router
from .routes.insights_routes import router as insights_router
from .routes.clinical_routes import router as clinical_router

app = FastAPI(
    title="ETOH Admin API",
    version="1.0.0",
    docs_url="/docs",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://etoh.vercel.app",
        "https://etoh-v2.vercel.app",
        "https://etoh-sh81.onrender.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth_router)
app.include_router(news_router)
app.include_router(insights_router)
app.include_router(clinical_router)


@app.get("/")
def root():
    return {"status": "ok", "service": "ETOH Admin API"}
