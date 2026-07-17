import os
import time

from dotenv import load_dotenv
from github import Github

load_dotenv()

github = Github(os.getenv("GITHUB_TOKEN"))

# ------------------------
# Simple in-memory cache
# ------------------------

CACHE_TTL = 300  # 5 minutes

_user_cache = {}
_repo_cache = {}


def _is_valid(entry):
    if entry is None:
        return False

    timestamp, _ = entry
    return time.time() - timestamp < CACHE_TTL


def get_user(username: str):
    username = username.lower()

    if _is_valid(_user_cache.get(username)):
        print(f"✅ User cache hit: {username}")
        return _user_cache[username][1]

    try:
        start = time.time()

        user = github.get_user(username)

        result = {
            "name": user.name,
            "username": user.login,
            "avatar": user.avatar_url,
            "bio": user.bio,
            "followers": user.followers,
            "following": user.following,
            "public_repos": user.public_repos,
            "profile_url": user.html_url,
        }

        _user_cache[username] = (
            time.time(),
            result,
        )

        print(f"get_user took {time.time()-start:.2f}s")

        return result

    except Exception:
        return None


def get_user_repositories(username: str):
    username = username.lower()

    if _is_valid(_repo_cache.get(username)):
        print(f"✅ Repository cache hit: {username}")
        return _repo_cache[username][1]

    try:
        start = time.time()

        user = github.get_user(username)

        repos = []

        for repo in user.get_repos():
            repos.append({
                "name": repo.name,
                "description": repo.description,
                "language": repo.language,
                "stars": repo.stargazers_count,
                "forks": repo.forks_count,
                "url": repo.html_url,
            })

        _repo_cache[username] = (
            time.time(),
            repos,
        )

        print(f"get_user_repositories took {time.time()-start:.2f}s")

        return repos

    except Exception:
        return None