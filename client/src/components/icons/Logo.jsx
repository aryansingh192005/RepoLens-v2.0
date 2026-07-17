export default function Logo() {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600 text-xl font-bold text-white shadow-lg">
        R
      </div>

      <div>

        <h1 className="text-xl font-bold tracking-tight text-white">
          RepoLens
        </h1>

        <p className="text-xs text-slate-400">
          AI Developer Intelligence
        </p>

      </div>

    </div>
  );
}