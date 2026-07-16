import MainLayout from "@/components/layout/MainLayout";
import SearchCard from "@/components/dashboard/SearchCard";
import SectionTitle from "@/components/shared/SectionTitle";
import StatCard from "@/components/shared/StatCard";

export default function Dashboard() {
  return (
    <MainLayout>
      <SectionTitle
        title="Developer Intelligence"
        subtitle="Analyze any GitHub developer using AI. Discover strengths, weaknesses, learning roadmap, and the best open source issues to contribute to."
      />

      <div className="mb-8 grid gap-6 md:grid-cols-4">
        <StatCard
          title="AI Features"
          value="6"
          icon="🤖"
        />

        <StatCard
          title="GitHub"
          value="Live"
          icon="🐙"
        />

        <StatCard
          title="AI Model"
          value="Gemini"
          icon="✨"
        />

        <StatCard
          title="Status"
          value="Online"
          icon="🟢"
        />
      </div>

      <SearchCard />
    </MainLayout>
  );
}