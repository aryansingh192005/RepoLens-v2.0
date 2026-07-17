import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Sparkles, GitBranch } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6 py-20">
      <Card className="w-full max-w-6xl overflow-hidden border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <Sparkles size={16} />
              AI Powered GitHub Intelligence
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
              Understand any GitHub developer in minutes.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              RepoLens combines GitHub data and AI to analyze developers,
              understand repositories, recommend technologies, and help you
              discover meaningful open source opportunities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button
                size="lg"
                onClick={() => navigate("/dashboard")}
              >
                <Search className="mr-2 h-5 w-5" />
                Analyze Developer
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/repository")}
              >
                <GitBranch className="mr-2 h-5 w-5" />
                Analyze Repository
              </Button>

            </div>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="space-y-5">

              <div className="rounded-2xl bg-slate-800 p-5">
                <p className="text-sm text-slate-400">
                  Developer Score
                </p>

                <h2 className="mt-2 text-4xl font-bold text-white">
                  92%
                </h2>
              </div>

              <div className="rounded-2xl bg-slate-800 p-5">
                <p className="text-sm text-slate-400">
                  Top Languages
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-blue-300">
                    Python
                  </span>

                  <span className="rounded-full bg-violet-500/10 px-3 py-1 text-violet-300">
                    JavaScript
                  </span>

                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">
                    React
                  </span>
                </div>

              </div>

              <div className="rounded-2xl bg-slate-800 p-5">
                <p className="text-sm text-slate-400">
                  AI Recommendation
                </p>

                <p className="mt-2 text-slate-300">
                  Build larger full-stack projects and contribute to React,
                  FastAPI, and AI repositories.
                </p>
              </div>

            </div>

          </div>

        </div>

      </Card>
    </section>
  );
}