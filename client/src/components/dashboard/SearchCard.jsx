import { useState } from "react";

import api from "@/services/api";

import DashboardHeader from "./DashboardHeader";
import ProfileCard from "./ProfileCard";
import AnalysisCard from "./AnalysisCard";
import IssuesCard from "./IssuesCard";
import LoadingSpinner from "./LoadingSpinner";

export default function SearchCard() {
  const [username, setUsername] = useState("");

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [issues, setIssues] = useState([]);

  async function analyzeProfile() {
    if (!username.trim()) return;

    try {
      setLoading(true);

      const [userRes, analysisRes, issuesRes] = await Promise.all([
        api.get(`/api/github/${username}`),
        api.get(`/api/github/${username}/ai-analysis`),
        api.get(`/api/github/${username}/good-first-issues`),
      ]);

      setUser(userRes.data);
      setAnalysis(analysisRes.data.analysis);

      setIssues(
        issuesRes.data.recommendations ||
        issuesRes.data.issues ||
        []
      );
    } catch (error) {
      console.error(error);

      alert("Unable to analyze this GitHub profile.");

      setUser(null);
      setAnalysis(null);
      setIssues([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">

      <DashboardHeader
        username={username}
        setUsername={setUsername}
        loading={loading}
        onAnalyze={analyzeProfile}
      />

      {loading && <LoadingSpinner />}

      {!loading && (
        <>
          <ProfileCard user={user} />

          <AnalysisCard analysis={analysis} />

          <IssuesCard issues={issues} />
        </>
      )}

    </div>
  );
}