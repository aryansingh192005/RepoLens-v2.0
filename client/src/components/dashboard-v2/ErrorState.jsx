import { Search, CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorState({
  title = "Analyze a GitHub Profile",
  description = "Enter a GitHub username above to generate AI insights, discover strengths, explore learning opportunities, and find beginner-friendly open source issues.",
  error = false,
  onRetry,
}) {
  if (!error) {
    return (
      <div className="mt-10 rounded-3xl border border-dashed border-slate-700 bg-slate-900/40 p-14 text-center">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-800">
          <Search
            size={36}
            className="text-slate-300"
          />
        </div>

        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
          {description}
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-sm text-blue-300">
          <Search size={16} />
          Start by searching for a GitHub username
        </div>

      </div>
    );
  }

  return (
    <div className="mt-10 rounded-3xl border border-red-500/20 bg-red-500/5 p-12 text-center">

      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
        <CircleAlert
          size={32}
          className="text-red-400"
        />
      </div>

      <h2 className="text-2xl font-bold text-white">
        Something went wrong
      </h2>

      <p className="mt-4 text-slate-400">
        {description}
      </p>

      {onRetry && (
        <Button
          className="mt-8"
          onClick={onRetry}
        >
          Try Again
        </Button>
      )}
    </div>
  );
}