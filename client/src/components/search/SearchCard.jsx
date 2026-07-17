import { useState } from "react";

import { analyzeDeveloper } from "@/services/githubService";

import DashboardV2 from "@/components/dashboard-v2/DashboardV2";

export default function SearchCard() {
  const [username, setUsername] = useState("");

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [issues, setIssues] = useState([]);

  const [error, setError] = useState("");

  async function analyzeProfile() {
    if (!username.trim()) return;

    setLoading(true);
    setError("");

    setUser(null);
    setAnalysis(null);
    setIssues([]);

    try {
      const result = await analyzeDeveloper(username);

      setUser(result.user);
      setAnalysis(result.analysis);
      setIssues(result.issues);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to analyze this GitHub profile. Please check the username or try again later."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardV2
      username={username}
      setUsername={setUsername}
      loading={loading}
      error={error}
      user={user}
      analysis={analysis}
      issues={issues}
      onAnalyze={analyzeProfile}
      onRetry={analyzeProfile}
    />
  );
}