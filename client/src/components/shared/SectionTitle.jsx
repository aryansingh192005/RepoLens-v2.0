export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-8">

      <h1 className="text-4xl font-bold tracking-tight text-white">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-3 max-w-3xl text-slate-400">
          {subtitle}
        </p>
      )}

    </div>
  );
}