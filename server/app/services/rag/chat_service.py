from app.services.ai_service import client


def chat_with_repository(question: str, repository_summary: dict):
    """
    Answer repository questions using the AI-generated repository summary.
    """

    prompt = f"""
You are a Senior Software Engineer.

You are helping a developer understand a GitHub repository.

Repository Summary:

{repository_summary}

User Question:

{question}

Rules:

- Answer only using the repository information.
- If the answer cannot be inferred, clearly say so.
- Keep answers practical and concise.
- Use markdown when helpful.
"""

    try:
        response = client.models.generate_content(
            model="gemini-3.5-flash",
            contents=prompt,
        )

        return response.text

    except Exception as e:
        print("Repository Chat Error:", e)

        return (
            "⚠️ Repository chat is temporarily unavailable. "
            "This is likely due to the Gemini API quota being exhausted "
            "or the service being temporarily unavailable. "
            "Please try again later."
        )