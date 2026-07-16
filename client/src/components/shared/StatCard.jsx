export default function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center justify-between">

        <p className="text-sm text-slate-400">
          {title}
        </p>

        <span className="text-2xl">
          {icon}
        </span>

      </div>

      <h2 className="mt-4 text-3xl font-bold text-white">
        {value}
      </h2>

    </div>
  );
}