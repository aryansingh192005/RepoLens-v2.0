from fastapi import FastAPI

app = FastAPI(title="AI Open Source Mentor")


@app.get("/")
def root():
    return {
        "message": "AI Open Source Mentor API is running 🚀"
    }