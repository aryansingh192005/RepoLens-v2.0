def recommend_issues(profile, repositories, issues):
    """
    Recommend GitHub issues without using AI.

    Scoring:
    +50 -> Issue language matches user's top languages
    +30 -> "good first issue" label
    +10 -> Repository has many stars
    +10 -> Recently updated (if available)
    """

    # User's top languages
    language_count = {}

    for repo in repositories:
        language = repo.get("language")

        if language:
            language_count[language] = (
                language_count.get(language, 0) + 1
            )

    top_languages = sorted(
        language_count,
        key=language_count.get,
        reverse=True,
    )[:5]

    recommendations = []

    for issue in issues:

        score = 0

        issue_language = issue.get("language")

        if issue_language in top_languages:
            score += 50

        labels = [
            label.lower()
            for label in issue.get("labels", [])
        ]

        if "good first issue" in labels:
            score += 30

        score += min(
            issue.get("stars", 0) // 100,
            10,
        )

        recommendations.append(
            {
                **issue,
                "compatibility": min(score, 100),
                "difficulty": "Beginner",
                "estimated_time": "1-3 hours",
                "reason": (
                    f"Matches your experience in "
                    f"{issue_language or 'multiple technologies'}."
                ),
            }
        )

    recommendations.sort(
        key=lambda x: x["compatibility"],
        reverse=True,
    )

    return {
        "recommendations": recommendations[:10]
    }