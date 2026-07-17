import { NavLink } from "react-router-dom";

export default function SidebarItem({
  to,
  icon,
  title,
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex items-center gap-3 rounded-xl px-4 py-3
        transition-all duration-200
        ${
          isActive
            ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }
        `
      }
    >
      <span className="flex h-5 w-5 items-center justify-center">
        {icon}
      </span>

      <span className="font-medium">
        {title}
      </span>
    </NavLink>
  );
}