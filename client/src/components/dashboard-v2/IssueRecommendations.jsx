import { Card } from "@/components/ui/card";
import { ExternalLink, Target } from "lucide-react";

export default function IssueRecommendations({ issues }) {
  if (!issues || issues.length === 0) return null;

  return (
    <Card className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="mb-8 flex items-center gap-3">

        <div className="rounded-xl bg-violet-500/10 p-3">
          <Target
            size={22}
            className="text-violet-400"
          />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Recommended Open Source Issues
          </h2>

          <p className="text-sm text-slate-400">
            AI-selected beginner-friendly issues based on the developer profile.
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {issues.map((issue, index) => (
          <a
            key={index}
            href={issue.url}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-all hover:border-blue-500 hover:bg-slate-900"
          >

            <div className="flex items-start justify-between gap-6">

              <div className="flex-1">

                <h3 className="text-lg font-semibold text-white">
                  {issue.title}
                </h3>

                <p className="mt-2 text-blue-400">
                  {issue.repository}
                </p>

                <p className="mt-4 leading-7 text-slate-400">
                  {issue.reason}
                </p>

              </div>

              <div className="text-right">

                <div className="rounded-xl bg-emerald-500/10 px-4 py-2 text-xl font-bold text-emerald-400">
                  {issue.compatibility}%
                </div>

                <p className="mt-3 text-sm text-slate-400">
                  {issue.difficulty}
                </p>

                <p className="text-sm text-slate-500">
                  {issue.estimated_time}
                </p>

                <ExternalLink
                  size={18}
                  className="ml-auto mt-4 text-slate-500"
                />

              </div>

            </div>

          </a>
        ))}

      </div>

    </Card>
  );
}