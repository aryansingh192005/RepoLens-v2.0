import json

from app.services.ai_service import client
from app.services.repository.repository_service import (
    get_repository_files,
)
from app.services.repository.parser import (
    parse_repository,
)
from app.services.repository.summarizer import (
    summarize_repository,
)


def analyze_repository(owner: str, repository: str):
    """
    Complete repository analysis pipeline.
    """

    files = get_repository_files(
        owner,
        repository,
    )

    documents = parse_repository(files)

    summary = summarize_repository(documents)

    return {
        "repository": f"{owner}/{repository}",
        "files_analyzed": len(documents),
        "analysis": summary,
    }