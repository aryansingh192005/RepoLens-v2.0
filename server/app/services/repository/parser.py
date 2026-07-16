import requests


MAX_FILE_SIZE = 100_000


def download_file(file):
    """
    Download a single repository file.
    """

    try:
        response = requests.get(
            file["download_url"],
            timeout=10,
        )

        if response.status_code != 200:
            return None

        text = response.text

        if len(text) > MAX_FILE_SIZE:
            text = text[:MAX_FILE_SIZE]

        return {
            "path": file["path"],
            "content": text,
        }

    except Exception:
        return None


def parse_repository(files):
    """
    Download all selected repository files.
    """

    documents = []

    for file in files:

        parsed = download_file(file)

        if parsed:
            documents.append(parsed)

    return documents