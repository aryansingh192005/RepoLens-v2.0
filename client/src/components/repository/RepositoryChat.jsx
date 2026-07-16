import { useState } from "react";
import api from "@/services/api";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function RepositoryChat({ repositorySummary }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askQuestion() {
    if (!question.trim()) return;

    try {
      setLoading(true);

      const { data } = await api.post("/api/repository/chat", {
        question,
        repository_summary: repositorySummary,
      });

      setAnswer(data.answer);
    } catch (err) {
      console.error(err);
      alert("Unable to answer the question.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-2xl font-bold text-white">
        💬 Repository Chat
      </h2>

      <p className="mt-2 text-slate-400">
        Ask AI anything about this repository.
      </p>

      <textarea
        rows={5}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Example: Explain the project architecture..."
        className="mt-6 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-violet-500"
      />

      <Button
        className="mt-4"
        onClick={askQuestion}
        disabled={loading}
      >
        {loading ? "Thinking..." : "Ask AI"}
      </Button>

      {answer && (
        <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-950 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            AI Answer
          </h3>

          <div className="whitespace-pre-wrap leading-8 text-slate-300">
            {answer}
          </div>
        </div>
      )}
    </Card>
  );
}