import { Card } from "@/components/ui/card";
import { Code2 } from "lucide-react";

export default function TechStackCard({ analysis }) {
  if (!analysis) return null;

  return (
    <Card className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-xl bg-blue-500/10 p-3">
          <Code2
            size={22}
            className="text-blue-400"
          />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Recommended Technologies
          </h2>

          <p className="text-sm text-slate-400">
            Technologies RepoLens recommends you learn next.
          </p>

        </div>

      </div>

      <div className="flex flex-wrap gap-3">

        {analysis.recommended_technologies.map((tech) => (
          <div
            key={tech}
            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/20"
          >
            {tech}
          </div>
        ))}

      </div>

    </Card>
  );
}