import os
from collections import deque

from dotenv import load_dotenv
from github import Github

from app.services.repository.file_selector import should_include

load_dotenv()

github = Github(os.getenv("GITHUB_TOKEN"))

PRIORITY_FILES = {
    "README.md",
    "package.json",
    "requirements.txt",
    "pyproject.toml",
    "Dockerfile",
    "docker-compose.yml",
}

IMPORTANT_DIRS = {
    "app",
    "src",
    "server",
    "client",
    "backend",
    "frontend",
}

IGNORE_DIRS = {
    ".git",
    ".github",
    ".vscode",
    ".idea",
    "docs",
    "tests",
    "test",
    "__pycache__",
    "node_modules",
    "dist",
    "build",
    "coverage",
    ".next",
    ".venv",
    "venv",
    "env",
}


def get_repository_files(owner: str, repo_name: str, max_files: int = 30):
    """
    Fast repository traversal.

    Only explores useful folders and returns at most max_files.
    """

    repo = github.get_repo(f"{owner}/{repo_name}")

    selected = []

    try:
        root_items = repo.get_contents("")
    except Exception:
        return selected

    queue = deque()

    # -------------------------
    # Scan root only
    # -------------------------

    for item in root_items:

        if item.type == "file":

            filename = item.path.split("/")[-1]

            if (
                filename in PRIORITY_FILES
                and should_include(item.path)
            ):
                selected.append(
                    {
                        "path": item.path,
                        "type": "file",
                        "download_url": item.download_url,
                        "priority": True,
                    }
                )

        elif item.type == "dir":

            folder = item.path.split("/")[-1]

            if folder in IMPORTANT_DIRS:
                queue.append(item.path)

    # -------------------------
    # Explore only important folders
    # -------------------------

    while queue and len(selected) < max_files:

        current = queue.popleft()

        try:
            contents = repo.get_contents(current)
        except Exception:
            continue

        for item in contents:

            if len(selected) >= max_files:
                break

            if item.type == "dir":

                folder = item.path.split("/")[-1]

                if folder in IGNORE_DIRS:
                    continue

                queue.append(item.path)
                continue

            if not should_include(item.path):
                continue

            selected.append(
                {
                    "path": item.path,
                    "type": "file",
                    "download_url": item.download_url,
                    "priority": False,
                }
            )

    return selected[:max_files]