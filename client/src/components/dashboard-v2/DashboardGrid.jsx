import DeveloperCard from "./DeveloperCard";
import AISummaryCard from "./AISummaryCard";
import TechStackCard from "./TechStackCard";
import RoadmapCard from "./RoadmapCard";
import IssueRecommendations from "./IssueRecommendations";

export default function DashboardGrid({
  user,
  analysis,
  issues,
}) {
  return (
    <div className="space-y-8">

      {/* Top */}
      <div className="grid gap-8 xl:grid-cols-3">

        <DeveloperCard user={user} />

        <div className="xl:col-span-2">
          <AISummaryCard analysis={analysis} />
        </div>

      </div>

      {/* Technologies */}
      <TechStackCard analysis={analysis} />

      {/* Bottom */}
      <div className="grid gap-8 xl:grid-cols-2">

        <RoadmapCard analysis={analysis} />

        <IssueRecommendations issues={issues} />

      </div>

    </div>
  );
}