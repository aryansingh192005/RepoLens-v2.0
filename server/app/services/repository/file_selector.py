IMPORTANT_FILENAMES = {
    "README.md",
    "README.MD",
    "README.rst",
    "README.txt",
    "package.json",
    "package-lock.json",
    "requirements.txt",
    "pyproject.toml",
    "Dockerfile",
    "docker-compose.yml",
    "docker-compose.yaml",
    ".env.example",
    "vite.config.js",
    "vite.config.ts",
    "next.config.js",
    "tsconfig.json",
    "tailwind.config.js",
    "tailwind.config.ts",
}


IMPORTANT_FOLDERS = (
    "src/",
    "app/",
    "backend/",
    "frontend/",
    "server/",
    "client/",
    "api/",
    "routes/",
    "components/",
    "pages/",
    "models/",
    "services/",
    "controllers/",
    "utils/",
    "config/",
    "docs/",
)


IGNORE_FOLDERS = (
    ".git/",
    ".github/",
    "node_modules/",
    "dist/",
    "build/",
    ".next/",
    "coverage/",
    "__pycache__/",
    ".venv/",
    "venv/",
)


VALID_EXTENSIONS = (
    ".py",
    ".js",
    ".ts",
    ".tsx",
    ".jsx",
    ".java",
    ".go",
    ".cpp",
    ".c",
    ".cs",
    ".rs",
    ".md",
    ".json",
    ".yaml",
    ".yml",
    ".toml",
)


def should_include(path: str) -> bool:
    """
    Decide whether a repository file is useful for AI analysis.
    """

    for folder in IGNORE_FOLDERS:
        if path.startswith(folder):
            return False

    filename = path.split("/")[-1]

    if filename in IMPORTANT_FILENAMES:
        return True

    for folder in IMPORTANT_FOLDERS:
        if path.startswith(folder):
            return True

    for ext in VALID_EXTENSIONS:
        if path.endswith(ext):
            return True

    return False