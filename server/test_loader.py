from app.services.rag.github_loader import load_repository

docs = load_repository(
    "fastapi",
    "fastapi",
)

print(len(docs))

print(docs[0]["path"])