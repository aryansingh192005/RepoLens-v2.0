import MainLayout from "@/components/layout/MainLayout";
import RepositorySearch from "@/components/repository/RepositorySearch";

export default function Repository() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-5xl font-bold">
          Repository Intelligence
        </h1>

        <p className="mt-4 text-lg text-slate-400">
          Analyze any GitHub repository using AI.
        </p>

        <RepositorySearch />
      </div>
    </MainLayout>
  );
}