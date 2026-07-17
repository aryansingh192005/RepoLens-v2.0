import MainLayout from "@/components/layout/MainLayout";
import RepositorySearch from "@/components/repository/RepositorySearch";

export default function Repository() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <RepositorySearch />
      </div>
    </MainLayout>
  );
}