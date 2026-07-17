import {
  Users,
  BookOpen,
  UserPlus,
  ExternalLink,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DeveloperCard({ user }) {
  if (!user) return null;

  const stats = [
    {
      label: "Repositories",
      value: user.public_repos,
      icon: <BookOpen size={18} />,
    },
    {
      label: "Followers",
      value: user.followers,
      icon: <Users size={18} />,
    },
    {
      label: "Following",
      value: user.following,
      icon: <UserPlus size={18} />,
    },
  ];

  return (
    <Card className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <div className="flex flex-col items-center text-center">
        <img
          src={user.avatar}
          alt={user.username}
          className="h-28 w-28 rounded-2xl border-4 border-slate-800 object-cover shadow-lg"
        />

        <h2 className="mt-5 text-2xl font-bold text-white">
          {user.name || user.username}
        </h2>

        <p className="mt-1 text-slate-400">
          @{user.username}
        </p>

        {user.bio && (
          <p className="mt-5 text-sm leading-7 text-slate-300">
            {user.bio}
          </p>
        )}

        <Button
          className="mt-6 gap-2"
          variant="outline"
          onClick={() => window.open(user.profile_url, "_blank")}
        >
          View GitHub
          <ExternalLink size={16} />
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-center"
          >
            <div className="mb-2 flex justify-center text-blue-400">
              {stat.icon}
            </div>

            <div className="text-2xl font-bold text-white">
              {stat.value}
            </div>

            <div className="mt-1 text-xs uppercase tracking-wide text-slate-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}