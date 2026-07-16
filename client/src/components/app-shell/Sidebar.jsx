import Logo from "@/components/icons/Logo";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-[#0B1120] p-6">

      <Logo />

      <nav className="mt-10 flex flex-col gap-2">

        <SidebarItem
          to="/"
          icon="🏠"
          title="Home"
        />

        <SidebarItem
          to="/dashboard"
          icon="👤"
          title="Developer Analysis"
        />

        <SidebarItem
          to="/repository"
          icon="📦"
          title="Repository Intelligence"
        />

      </nav>

      <div className="mt-auto rounded-xl border border-slate-800 bg-slate-900 p-4">
        <p className="text-sm text-slate-400">
          🚀 AI Open Source Mentor v1.0
        </p>

        <p className="mt-2 text-xs text-slate-500">
          Built with React, FastAPI and Gemini.
        </p>
      </div>

    </aside>
  );
}