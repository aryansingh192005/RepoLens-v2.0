import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardHero({
  username,
  setUsername,
  loading,
  onAnalyze,
}) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-10 py-8 shadow-xl">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">

            <Sparkles size={16} />

            RepoLens AI

          </div>

          <h1 className="mt-5 text-4xl font-bold leading-tight text-white">

            Understand GitHub developers faster.

          </h1>

          <p className="mt-5 text-base leading-7 text-slate-400">

            AI-powered GitHub profile analysis with personalized strengths,
            learning roadmap, repository recommendations and beginner-friendly
            open source issues.

          </p>

        </div>

        <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900/70 p-6">

          <label className="mb-3 block text-sm font-medium text-slate-300">
            GitHub Username
          </label>

          <div className="flex gap-3">

            <Input
              value={username}
              placeholder="aryansingh192005"
              onChange={(e) => setUsername(e.target.value)}
            />

            <Button
              onClick={onAnalyze}
              disabled={loading}
              className="h-12 min-w-[120px]"
            >
              {loading ? "Analyzing..." : "Analyze"}
            </Button>

          </div>

          <p className="mt-4 text-sm text-slate-500">
            Example: torvalds • gaearon • sindresorhus
          </p>

        </div>

      </div>

    </section>
  );
}