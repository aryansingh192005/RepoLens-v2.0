from app.services.repository.repository_service import (
    get_repository_files,
)

from app.services.repository.parser import (
    parse_repository,
)

files = get_repository_files(
    "fastapi",
    "fastapi",
)

docs = parse_repository(files)

print("Files:", len(docs))

print()

print(docs[0]["path"])

print()

print(docs[0]["content"][:500])