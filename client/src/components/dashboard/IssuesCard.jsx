import { Card } from "@/components/ui/card";

export default function IssuesCard({ issues }) {
  if (!issues || issues.length === 0) return null;

  return (
    <Card className="max-w-6xl mx-auto border-slate-800 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold">
        AI Recommended Good First Issues
      </h2>

      <div className="mt-6 space-y-4">
        {issues.map((issue, index) => (
          <a
            key={index}
            href={issue.url}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg border border-slate-700 p-5 transition hover:border-blue-500"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">
                  {issue.title}
                </h3>

                <p className="mt-1 text-blue-400">
                  {issue.repository}
                </p>

                <p className="mt-3 text-slate-300">
                  {issue.reason}
                </p>
              </div>

              <div className="min-w-[180px] text-right">
                <div className="text-2xl font-bold text-emerald-400">
                  {issue.compatibility}%
                </div>

                <p className="mt-2 text-sm text-slate-400">
                  {issue.difficulty}
                </p>

                <p className="text-sm text-slate-400">
                  {issue.estimated_time}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Card>
  );
}