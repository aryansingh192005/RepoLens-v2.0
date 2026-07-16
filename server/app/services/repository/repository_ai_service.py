import time

from app.cache.cache_service import (
    load_cache,
    save_cache,
)

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
    Repository analysis with local cache.
    """

    cache_key = f"repository::{owner}/{repository}"

    cached = load_cache(cache_key)

    if cached is not None:
        print(f"✅ Repository cache hit: {owner}/{repository}")
        return cached

    print(f"❌ Repository cache miss: {owner}/{repository}")

    total_start = time.time()

    download_start = time.time()
    files = get_repository_files(owner, repository)
    print(f"Repository download: {time.time() - download_start:.2f}s")

    parse_start = time.time()
    documents = parse_repository(files)
    print(f"Parsing: {time.time() - parse_start:.2f}s")

    summary_start = time.time()
    summary = summarize_repository(documents)
    print(f"Gemini Summary: {time.time() - summary_start:.2f}s")

    result = {
        "repository": f"{owner}/{repository}",
        "files_analyzed": len(documents),
        "analysis": summary,
    }

    save_cache(cache_key, result)

    print(f"Total Repository Analysis: {time.time() - total_start:.2f}s")

    return result