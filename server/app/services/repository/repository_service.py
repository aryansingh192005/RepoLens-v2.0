import os

from dotenv import load_dotenv
from github import Github

from app.services.repository.file_selector import should_include

load_dotenv()

github = Github(os.getenv("GITHUB_TOKEN"))

# Files that give the AI the highest value
PRIORITY_FILES = {
    "README.md",
    "package.json",
    "requirements.txt",
    "pyproject.toml",
    "Dockerfile",
    "docker-compose.yml",
}


def get_repository_files(owner: str, repo_name: str, max_files: int = 30):
    """
    Fetch only the most valuable repository files.
    This keeps AI analysis fast.
    """

    repo = github.get_repo(f"{owner}/{repo_name}")

    queue = repo.get_contents("")
    selected = []

    while queue and len(selected) < max_files:

        item = queue.pop(0)

        if item.type == "dir":
            try:
                queue.extend(repo.get_contents(item.path))
            except Exception:
                pass
            continue

        if not should_include(item.path):
            continue

        filename = item.path.split("/")[-1]

        priority = filename in PRIORITY_FILES

        selected.append(
            {
                "path": item.path,
                "type": item.type,
                "download_url": item.download_url,
                "priority": priority,
            }
        )

    # Priority files first
    selected.sort(key=lambda x: not x["priority"])

    return selected[:max_files]