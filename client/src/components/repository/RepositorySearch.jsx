import { useState } from "react";

import api from "@/services/api";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

import RepositoryChat from "./RepositoryChat";

export default function RepositorySearch() {
  const [repository, setRepository] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function handleAnalyze() {
    if (!repository.trim()) return;

    const parts = repository.trim().split("/");

    if (parts.length !== 2) {
      alert("Use owner/repository format.");
      return;
    }

    try {
      setLoading(true);

      const { data } = await api.get(
        `/api/repository/${parts[0]}/${parts[1]}`
      );

      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Unable to analyze repository.");
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">

      <Card className="border border-slate-800 bg-slate-900 p-8 rounded-3xl">

        <h2 className="text-2xl font-bold text-white">
          Repository Intelligence
        </h2>

        <p className="mt-2 text-slate-400">
          Analyze any public GitHub repository with AI.
        </p>

        <div className="mt-6 flex gap-4">

          <Input
            value={repository}
            placeholder="fastapi/fastapi"
            onChange={(e) => setRepository(e.target.value)}
          />

          <Button
            disabled={loading}
            onClick={handleAnalyze}
          >
            {loading ? "Analyzing..." : "Analyze"}
          </Button>

        </div>

      </Card>

      {result && (

        <>
          <Card className="rounded-3xl border border-slate-800 bg-slate-900 p-8 space-y-6">

            <div>

              <h2 className="text-3xl font-bold text-white">
                {result.repository}
              </h2>

              <p className="mt-2 text-slate-400">
                Files analyzed: {result.files_analyzed}
              </p>

            </div>

            <div>

              <h3 className="text-xl font-bold text-white">
                AI Summary
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                {result.analysis.summary}
              </p>

            </div>

            <div>

              <h3 className="text-xl font-bold text-white">
                Tech Stack
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">

                {result.analysis.tech_stack.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-violet-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

            <div>

              <h3 className="text-xl font-bold text-white">
                Architecture
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                {result.analysis.architecture}
              </p>

            </div>

            <div>

              <h3 className="text-xl font-bold text-white">
                Contribution Guide
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                {result.analysis.contribution_guide}
              </p>

            </div>

          </Card>

          <RepositoryChat
            repositorySummary={result.analysis}
          />

        </>

      )}

    </div>
  );
}