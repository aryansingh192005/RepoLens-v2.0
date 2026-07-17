import { Card } from "@/components/ui/card";

function Section({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
      <h3 className="mb-4 text-lg font-semibold text-white">
        {title}
      </h3>

      {children}
    </div>
  );
}

export default function AISummaryCard({ analysis }) {
  if (!analysis) return null;

  return (
    <div className="space-y-6">

      <Card className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-2xl font-bold text-white">
          AI Developer Analysis
        </h2>

        <p className="mt-5 leading-8 text-slate-300">
          {analysis.summary}
        </p>

      </Card>

      <div className="grid gap-6 lg:grid-cols-2">

        <Section title="💪 Strengths">

          <div className="space-y-3">

            {analysis.strengths.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-emerald-300"
              >
                {item}
              </div>
            ))}

          </div>

        </Section>

        <Section title="🎯 Growth Areas">

          <div className="space-y-3">

            {analysis.weaknesses.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 text-amber-300"
              >
                {item}
              </div>
            ))}

          </div>

        </Section>

      </div>

    </div>
  );
}