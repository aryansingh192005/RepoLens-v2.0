from app.services.repository.repository_service import get_repository_files

files = get_repository_files(
    "fastapi",
    "fastapi",
)

print(f"Files found: {len(files)}")

for file in files[:20]:
    print(file["path"])