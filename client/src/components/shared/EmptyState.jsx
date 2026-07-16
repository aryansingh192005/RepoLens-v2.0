export default function EmptyState({
  title,
  description,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 py-24">

      <div className="text-6xl">
        🤖
      </div>

      <h2 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 max-w-lg text-center text-slate-400">
        {description}
      </p>

    </div>
  );
}