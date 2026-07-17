import api from "./api";

const cache = new Map();

export async function analyzeDeveloper(username) {
  const key = username.trim().toLowerCase();

  if (cache.has(key)) {
    console.log("⚡ Dashboard cache hit:", key);
    return cache.get(key);
  }

  const request = api
    .get(`/api/github/${key}/dashboard`)
    .then((response) => ({
      user: response.data.user,
      analysis: response.data.analysis,
      issues:
        response.data.issues?.recommendations ??
        response.data.issues?.issues ??
        response.data.issues ??
        [],
      repositoryAnalysis: response.data.repository_analysis,
      aiAvailable: response.data.ai_available,
    }));

  cache.set(key, request);

  return request;
}

export function clearDeveloperCache() {
  cache.clear();
}