import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardHeader({
  username,
  setUsername,
  loading,
  onAnalyze,
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950 p-10">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="max-w-2xl">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">

            <Sparkles size={16} />

            AI Powered GitHub Analysis

          </div>

          <h2 className="text-5xl font-bold leading-tight text-white">

            Analyze any developer in seconds.

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">

            Get AI-generated developer insights, strengths, weaknesses,
            learning roadmap, repository intelligence, and personalized
            open source recommendations.

          </p>

        </div>

        <div className="rounded-2xl border border-slate-700 bg-[#0F172A]/70 p-6 backdrop-blur">

          <div className="mb-4 flex items-center gap-3">

            <Search className="text-white" />

            <span className="font-semibold text-white">

              GitHub Username

            </span>

          </div>

          <div className="flex w-full gap-3">

            <Input
              value={username}
              placeholder="aryansingh192005"
              onChange={(e) => setUsername(e.target.value)}
            />

            <Button
              onClick={onAnalyze}
              disabled={loading}
              className="px-8"
            >
              {loading ? "Analyzing..." : "Analyze"}
            </Button>

          </div>

        </div>

      </div>

    </div>
  );
}