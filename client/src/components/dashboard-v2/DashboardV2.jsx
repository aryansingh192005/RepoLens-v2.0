import DashboardHero from "./DashboardHero";
import DashboardGrid from "./DashboardGrid";
import SkeletonDashboard from "./SkeletonDashboard";
import ErrorState from "./ErrorState";

export default function DashboardV2({
  username,
  setUsername,
  loading,
  error,
  user,
  analysis,
  issues,
  onAnalyze,
  onRetry,
}) {
  return (
    <div className="space-y-10">

      <DashboardHero
        username={username}
        setUsername={setUsername}
        loading={loading}
        onAnalyze={onAnalyze}
      />

      {loading && <SkeletonDashboard />}

      {!loading && error && (
      <ErrorState
      error
      description={error}
      onRetry={onRetry}
     />
    )}

{!loading && !error && !user && (
  <ErrorState />
)}

      {!loading && !error && user && analysis && (
        <DashboardGrid
        user={user}
        analysis={analysis}
        issues={issues}
       />
    )}

    </div>
  );
}