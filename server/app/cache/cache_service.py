import hashlib
import json
from pathlib import Path

CACHE_DIR = Path("cache")

CACHE_DIR.mkdir(exist_ok=True)


def _cache_file(key: str):
    filename = hashlib.md5(
        key.encode()
    ).hexdigest()

    return CACHE_DIR / f"{filename}.json"


def load_cache(key: str):
    file = _cache_file(key)

    if file.exists():
        with open(file, "r", encoding="utf-8") as f:
            return json.load(f)

    return None


def save_cache(key: str, data):
    file = _cache_file(key)

    with open(file, "w", encoding="utf-8") as f:
        json.dump(
            data,
            f,
            indent=2,
            ensure_ascii=False,
        )