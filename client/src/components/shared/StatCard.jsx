export default function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
        hover:shadow-xl
        hover:shadow-blue-500/10
      "
    >
      <div className="flex items-center justify-between">

        <p className="text-sm font-medium text-slate-400">
          {title}
        </p>

        <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>

      </div>

      <h2 className="mt-4 text-3xl font-bold text-white">
        {value}
      </h2>

    </div>
  );
}