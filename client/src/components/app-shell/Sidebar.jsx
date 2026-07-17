import Logo from "@/components/icons/Logo";
import SidebarItem from "./SidebarItem";

import {
  House,
  UserRound,
  FolderGit2,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-[#0B1120] p-6">

      <Logo />

      <nav className="mt-10 flex flex-col gap-2">

        <SidebarItem
          to="/"
          icon={<House size={18} />}
          title="Home"
        />

        <SidebarItem
          to="/dashboard"
          icon={<UserRound size={18} />}
          title="Developer Analysis"
        />

        <SidebarItem
          to="/repository"
          icon={<FolderGit2 size={18} />}
          title="Repository Intelligence"
        />

      </nav>

      <div className="mt-auto rounded-xl border border-slate-800 bg-slate-900 p-4">

        <p className="text-sm font-medium text-white">
          RepoLens v2.0
        </p>

        <p className="mt-2 text-xs text-slate-500">
          React • FastAPI • Gemini
        </p>

      </div>

    </aside>
  );
}