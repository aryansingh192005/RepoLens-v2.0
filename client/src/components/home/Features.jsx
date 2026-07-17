import { Card } from "@/components/ui/card";
import {
  Brain,
  FolderGit2,
  GitBranch,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: <Brain size={28} />,
    title: "AI Developer Analysis",
    description:
      "Generate detailed insights into any GitHub developer's strengths, growth areas, and learning roadmap.",
  },
  {
    icon: <FolderGit2 size={28} />,
    title: "Repository Intelligence",
    description:
      "Understand project structure, architecture, and technologies with AI-powered repository analysis.",
  },
  {
    icon: <FolderGit2 size={28} />,
    title: "Open Source Discovery",
    description:
      "Discover repositories and beginner-friendly issues tailored to your experience.",
  },
  {
    icon: <MessageSquare size={28} />,
    title: "Repository Chat",
    description:
      "Ask questions about any repository and receive AI-generated explanations instantly.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-white">
            Everything you need to explore GitHub
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            RepoLens combines GitHub APIs and AI to help developers learn,
            analyze, and contribute with confidence.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40"
            >
              <div className="mb-6 text-blue-400">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {feature.description}
              </p>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}