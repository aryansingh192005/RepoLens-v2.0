import os

from dotenv import load_dotenv
from github import Github

load_dotenv()

github = Github(os.getenv("GITHUB_TOKEN"))


def get_good_first_issues(languages=None, limit=20):
    issues = []

    try:
        results = github.search_issues(
            query='is:issue is:open label:"good first issue"',
            sort="updated",
            order="desc",
        )

        for issue in results:

            repo = issue.repository

            issues.append(
                {
                    "title": issue.title,
                    "repository": repo.full_name,
                    "url": issue.html_url,
                    "language": repo.language,
                    "stars": repo.stargazers_count,
                    "description": (
                        issue.body[:300]
                        if issue.body
                        else "No description available."
                    ),
                }
            )

            if len(issues) >= limit:
                break

    except Exception as e:
        print(e)

    return issues