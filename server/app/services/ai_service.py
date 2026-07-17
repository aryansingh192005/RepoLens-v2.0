import time
import os
import json
from collections import Counter

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def analyze_repositories(repositories):
    start = time.time()
    languages = Counter()

    total_stars = 0
    total_forks = 0

    for repo in repositories:
        if repo.get("language"):
            languages[repo["language"]] += 1

        total_stars += repo.get("stars", 0)
        total_forks += repo.get("forks", 0)

    top_languages = [
        lang for lang, _ in languages.most_common(5)
    ]

    level = "Beginner"

    if len(repositories) >= 20:
        level = "Advanced"
    elif len(repositories) >= 5:
        level = "Intermediate"
    print(f"analyze_repositories took {time.time()-start:.2f}s")
    return {
        "level": level,
        "top_languages": top_languages,
        "repositories": len(repositories),
        "stars": total_stars,
        "forks": total_forks,
    }


def generate_ai_analysis(profile, repositories):
    start = time.time()

    # Keep only the most valuable repositories
    top_repositories = sorted(
        repositories,
        key=lambda repo: repo.get("stars", 0),
        reverse=True,
    )[:8]

    repository_summary = []

    for repo in top_repositories:
        repository_summary.append({
            "name": repo.get("name"),
            "language": repo.get("language"),
            "stars": repo.get("stars"),
            "forks": repo.get("forks"),
            "description": repo.get("description"),
        })

    stats = analyze_repositories(repositories)

    prompt = f"""
You are an expert GitHub mentor.

Analyze this developer.

Profile:
Name: {profile.get("name")}
Username: {profile.get("username")}
Bio: {profile.get("bio")}
Followers: {profile.get("followers")}
Public Repositories: {profile.get("public_repos")}

Repository Statistics:
{json.dumps(stats, indent=2)}

Top Repositories:
{json.dumps(repository_summary, indent=2)}

Return ONLY valid JSON.

Use this structure exactly:

{{
    "summary": "",
    "strengths": [],
    "weaknesses": [],
    "recommended_technologies": [],
    "recommended_repositories": [],
    "roadmap": []
}}
"""

    response = client.models.generate_content(
        model="gemini-3.5-flash",
        contents=prompt,
    )

    text = response.text.strip()

    if text.startswith("```json"):
        text = text.replace("```json", "", 1)

    if text.endswith("```"):
        text = text[:-3]

    print(f"generate_ai_analysis took {time.time()-start:.2f}s")

    return json.loads(text.strip())