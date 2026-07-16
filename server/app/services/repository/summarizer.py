import json

from app.services.ai_service import client


def summarize_repository(documents):
    """
    Generate a structured AI summary of a repository.
    """

    content = ""

    for document in documents:
        content += f"\n\nFILE: {document['path']}\n"
        content += document["content"][:3000]

        if len(content) > 50000:
            break

    prompt = f"""
You are a Senior Software Engineer.

Analyze this GitHub repository.

Repository Files:

{content}

Return ONLY valid JSON.

{{
    "summary": "...",
    "tech_stack": [
        "..."
    ],
    "architecture": "...",
    "entry_points": [
        "..."
    ],
    "important_files": [
        {{
            "file":"...",
            "reason":"..."
        }}
    ],
    "contribution_guide":"..."
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