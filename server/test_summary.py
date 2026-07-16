from app.services.repository.repository_service import (
    get_repository_files,
)

from app.services.repository.parser import (
    parse_repository,
)

from app.services.repository.summarizer import (
    summarize_repository,
)

files = get_repository_files(
    "fastapi",
    "fastapi",
)

documents = parse_repository(files)

summary = summarize_repository(documents)

print(summary)