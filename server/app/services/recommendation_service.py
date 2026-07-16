import json
import time

from app.services.ai_service import client


def recommend_issues(profile, repositories, issues):
    prompt = f"""
You are an expert Open Source Mentor.

Recommend the BEST GitHub issues for this developer.

Developer:
{json.dumps(profile, indent=2)}

Repositories:
{json.dumps(repositories, indent=2)}

Candidate Issues:
{json.dumps(issues, indent=2)}

Return ONLY valid JSON.

{{
    "recommendations":[
        {{
            "title":"...",
            "repository":"...",
            "compatibility":95,
            "difficulty":"Easy",
            "estimated_time":"2 hours",
            "reason":"..."
        }}
    ]
}}

Return at most 10 recommendations.
"""

    models = [
        "gemini-3.5-flash",
        "gemini-3.1-flash-lite",
        "gemini-2.5-flash",
    ]

    last_error = None

    for model in models:
        try:
            response = client.models.generate_content(
                model=model,
                contents=prompt,
            )

            text = response.text.strip()

            if text.startswith("```json"):
                text = text.replace("```json", "", 1)

            if text.endswith("```"):
                text = text[:-3]

            return json.loads(text.strip())

        except Exception as e:
            print(f"{model} failed:", e)
            last_error = e
            time.sleep(1)

    raise last_error