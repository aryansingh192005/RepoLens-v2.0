import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-white"
        >
        RepoLens
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-slate-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="text-slate-300 transition hover:text-white"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}