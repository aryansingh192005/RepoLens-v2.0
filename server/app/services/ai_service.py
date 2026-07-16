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

    return {
        "level": level,
        "top_languages": top_languages,
        "repositories": len(repositories),
        "stars": total_stars,
        "forks": total_forks,
    }


def generate_ai_analysis(profile, repositories):
    prompt = f"""
You are an expert Open Source Mentor.

Analyze this GitHub profile.

Profile:
{json.dumps(profile, indent=2)}

Repositories:
{json.dumps(repositories, indent=2)}

IMPORTANT:

Return ONLY valid JSON.

Do NOT wrap it in markdown.
Do NOT use ```json.
Do NOT explain anything.

Return exactly this structure:

{{
    "summary": "...",
    "strengths": [
        "...",
        "..."
    ],
    "weaknesses": [
        "...",
        "..."
    ],
    "recommended_technologies": [
        "...",
        "..."
    ],
    "recommended_repositories": [
        {{
            "name":"...",
            "reason":"..."
        }}
    ],
    "roadmap":[
        {{
            "week":1,
            "goal":"..."
        }},
        {{
            "week":2,
            "goal":"..."
        }},
        {{
            "week":3,
            "goal":"..."
        }},
        {{
            "week":4,
            "goal":"..."
        }}
    ]
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

    return json.loads(text.strip())