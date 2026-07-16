import requests

GITHUB_API = "https://api.github.com/users"


def get_user(username: str):
    response = requests.get(f"{GITHUB_API}/{username}")

    if response.status_code != 200:
        return None

    return response.json()