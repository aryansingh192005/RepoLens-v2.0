export default function SkeletonDashboard() {
  return (
    <div className="animate-pulse space-y-8">

      {/* Profile + Summary */}
      <div className="grid gap-8 xl:grid-cols-3">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <div className="mx-auto h-28 w-28 rounded-2xl bg-slate-800" />

          <div className="mx-auto mt-6 h-6 w-40 rounded bg-slate-800" />

          <div className="mx-auto mt-3 h-4 w-28 rounded bg-slate-800" />

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="h-20 rounded-xl bg-slate-800" />
            <div className="h-20 rounded-xl bg-slate-800" />
            <div className="h-20 rounded-xl bg-slate-800" />
          </div>

        </div>

        <div className="space-y-6 xl:col-span-2">

          <div className="h-40 rounded-3xl bg-slate-900" />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="h-44 rounded-3xl bg-slate-900" />
            <div className="h-44 rounded-3xl bg-slate-900" />
          </div>

        </div>

      </div>

      {/* Technologies */}

      <div className="h-28 rounded-3xl bg-slate-900" />

      {/* Bottom */}

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="h-96 rounded-3xl bg-slate-900" />

        <div className="h-96 rounded-3xl bg-slate-900" />

      </div>

    </div>
  );
}