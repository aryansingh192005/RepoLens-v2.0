import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6 py-16">
      <Card className="w-full max-w-5xl border-slate-800 bg-slate-900 p-12 text-center">
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
          🚀 AI Powered Developer Mentor
        </span>

        <h1 className="mt-8 text-6xl font-extrabold tracking-tight">
          Find Your First
          <br />
          Open Source Contribution
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Discover repositories that match your skills, understand GitHub issues,
          receive AI guidance, and contribute with confidence.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" onClick={() => navigate("/dashboard")}>
            Get Started
          </Button>

          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </Card>
    </section>
  );
}