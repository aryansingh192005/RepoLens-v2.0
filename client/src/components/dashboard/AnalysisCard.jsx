import { Card } from "@/components/ui/card";

function InfoCard({ title, children }) {
  return (
    <Card className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="mb-5 text-xl font-bold text-white">
        {title}
      </h3>

      {children}
    </Card>
  );
}

export default function AnalysisCard({ analysis }) {
  if (!analysis) return null;

  return (
    <div className="mt-8 space-y-8">

      <InfoCard title="🧠 AI Developer Summary">
        <p className="leading-8 text-slate-300">
          {analysis.summary}
        </p>
      </InfoCard>

      <div className="grid gap-6 lg:grid-cols-2">

        <InfoCard title="💪 Strengths">
          <ul className="space-y-3">
            {analysis.strengths.map((item) => (
              <li
                key={item}
                className="rounded-xl bg-slate-800 p-4 text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard title="🎯 Growth Areas">
          <ul className="space-y-3">
            {analysis.weaknesses.map((item) => (
              <li
                key={item}
                className="rounded-xl bg-slate-800 p-4 text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </InfoCard>

      </div>

      <InfoCard title="⚙ Recommended Technologies">
        <div className="flex flex-wrap gap-3">
          {analysis.recommended_technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </InfoCard>

      <div className="grid gap-6 lg:grid-cols-2">

        <InfoCard title="🚀 Open Source Projects">
          <div className="space-y-4">
            {analysis.recommended_repositories.map((repo) => (
              <div
                key={repo.name}
                className="rounded-xl border border-slate-700 p-4"
              >
                <h4 className="font-semibold text-white">
                  {repo.name}
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {repo.reason}
                </p>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard title="🗺 30-Day Roadmap">
          <div className="space-y-4">
            {analysis.roadmap.map((week) => (
              <div
                key={week.week}
                className="rounded-xl border border-slate-700 p-4"
              >
                <div className="font-semibold text-violet-400">
                  Week {week.week}
                </div>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {week.goal}
                </p>
              </div>
            ))}
          </div>
        </InfoCard>

      </div>

    </div>
  );
}