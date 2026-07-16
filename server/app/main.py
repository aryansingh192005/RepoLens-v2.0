from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.services.github_service import (
    get_user,
    get_user_repositories,
)

from app.services.ai_service import (
    analyze_repositories,
    generate_ai_analysis,
)

from app.services.issues_service import (
    get_good_first_issues,
)

from app.services.recommendation_service import (
    recommend_issues,
)

from app.services.repository.repository_ai_service import (
    analyze_repository,
)

from app.services.rag.chat_service import (
    chat_with_repository,
)


app = FastAPI(title="AI Open Source Mentor")


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class RepositoryChatRequest(BaseModel):
    question: str
    repository_summary: dict


@app.get("/")
def root():
    return {
        "message": "AI Open Source Mentor API is running 🚀"
    }


@app.get("/api/health")
def health():
    return {
        "status": "ok"
    }


@app.get("/api/github/{username}")
def github_user(username: str):
    user = get_user(username)

    if user is None:
        raise HTTPException(
            status_code=404,
            detail="GitHub user not found",
        )

    return user


@app.get("/api/github/{username}/repositories")
def github_repositories(username: str):
    repos = get_user_repositories(username)

    if repos is None:
        raise HTTPException(
            status_code=404,
            detail="Repositories not found",
        )

    return repos


@app.get("/api/github/{username}/analysis")
def github_analysis(username: str):
    repos = get_user_repositories(username)

    if repos is None:
        raise HTTPException(
            status_code=404,
            detail="Repositories not found",
        )

    return analyze_repositories(repos)


@app.get("/api/github/{username}/ai-analysis")
def github_ai_analysis(username: str):
    profile = get_user(username)
    repositories = get_user_repositories(username)

    if profile is None or repositories is None:
        raise HTTPException(
            status_code=404,
            detail="GitHub user not found",
        )

    return {
        "analysis": generate_ai_analysis(
            profile,
            repositories,
        )
    }


@app.get("/api/github/{username}/good-first-issues")
def github_good_first_issues(username: str):
    profile = get_user(username)
    repositories = get_user_repositories(username)

    if profile is None or repositories is None:
        raise HTTPException(
            status_code=404,
            detail="GitHub user not found",
        )

    analysis = analyze_repositories(repositories)

    issues = get_good_first_issues(
        analysis["top_languages"]
    )

    recommendations = recommend_issues(
        profile,
        repositories,
        issues,
    )

    return recommendations


@app.get("/api/repository/{owner}/{repository}")
def repository_analysis(owner: str, repository: str):
    try:
        return analyze_repository(
            owner,
            repository,
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )


@app.post("/api/repository/chat")
def repository_chat(request: RepositoryChatRequest):
    try:
        answer = chat_with_repository(
            request.question,
            request.repository_summary,
        )

        return {
            "answer": answer,
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )