import { Search, Sparkles } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-[#020817] px-8">

      <div>
        <h1 className="text-2xl font-bold text-white">
          RepoLens
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          AI-powered GitHub Developer Intelligence
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex w-80 items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3">

          <Search
            size={18}
            className="text-slate-500"
          />

          <input
            placeholder="Search..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 font-medium text-white transition hover:scale-[1.02]">

          <Sparkles size={18} />

          AI Workspace

        </button>

      </div>

    </header>
  );
}