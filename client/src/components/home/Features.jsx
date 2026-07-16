import { Card } from "@/components/ui/card";

const features = [
  {
    title: "AI Repository Matching",
    description:
      "Find open source repositories that match your skills and experience.",
  },
  {
    title: "Issue Explanation",
    description:
      "Understand complex GitHub issues in simple, beginner-friendly language.",
  },
  {
    title: "Contribution Roadmap",
    description:
      "Receive a personalized roadmap to become an active open source contributor.",
  },
  {
    title: "PR Review",
    description:
      "Get AI feedback on your pull requests before submitting them.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold">
          Everything You Need
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Learn, contribute, and grow with AI assistance.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>

              <p className="mt-3 text-slate-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}