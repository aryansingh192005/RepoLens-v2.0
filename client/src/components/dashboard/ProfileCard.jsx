import { Card } from "@/components/ui/card";

export default function ProfileCard({ user }) {
  if (!user) return null;

  return (
    <Card className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

      <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 h-32" />

      <div className="px-8 pb-8">

        <img
          src={user.avatar}
          alt={user.username}
          className="-mt-16 h-32 w-32 rounded-3xl border-4 border-slate-900 shadow-xl"
        />

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h2 className="text-3xl font-bold text-white">
              {user.name || user.username}
            </h2>

            <p className="mt-1 text-slate-400">
              @{user.username}
            </p>

            {user.bio && (
              <p className="mt-4 max-w-3xl text-slate-300">
                {user.bio}
              </p>
            )}

          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="rounded-2xl bg-slate-800 p-5 text-center">

              <div className="text-3xl font-bold text-white">
                {user.public_repos}
              </div>

              <div className="mt-1 text-sm text-slate-400">
                Repositories
              </div>

            </div>

            <div className="rounded-2xl bg-slate-800 p-5 text-center">

              <div className="text-3xl font-bold text-white">
                {user.followers}
              </div>

              <div className="mt-1 text-sm text-slate-400">
                Followers
              </div>

            </div>

            <div className="rounded-2xl bg-slate-800 p-5 text-center">

              <div className="text-3xl font-bold text-white">
                {user.following}
              </div>

              <div className="mt-1 text-sm text-slate-400">
                Following
              </div>

            </div>

          </div>

        </div>

      </div>

    </Card>
  );
}