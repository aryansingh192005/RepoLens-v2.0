import os

from dotenv import load_dotenv
from github import Github

load_dotenv()

github = Github(os.getenv("GITHUB_TOKEN"))


def get_user(username: str):
    try:
        user = github.get_user(username)

        return {
            "name": user.name,
            "username": user.login,
            "avatar": user.avatar_url,
            "bio": user.bio,
            "followers": user.followers,
            "following": user.following,
            "public_repos": user.public_repos,
            "profile_url": user.html_url,
        }

    except Exception:
        return None


def get_user_repositories(username: str):
    try:
        user = github.get_user(username)

        repos = []

        for repo in user.get_repos():
            repos.append(
                {
                    "name": repo.name,
                    "description": repo.description,
                    "language": repo.language,
                    "stars": repo.stargazers_count,
                    "forks": repo.forks_count,
                    "url": repo.html_url,
                }
            )

        return repos

    except Exception:
        return None