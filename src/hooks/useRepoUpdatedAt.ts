import { useEffect, useState } from "react";

export function useRepoUpdatedAt(githubUrl?: string) {
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  useEffect(() => {
    if (!githubUrl) return;
    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return;
    const [, owner, repo] = match;

    async function fetchUpdatedAt() {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`
        );
        if (!res.ok) return;
        const data = await res.json();
        setUpdatedAt(data.updated_at);
      } catch {
        setUpdatedAt(null);
      }
    }
    fetchUpdatedAt();
  }, [githubUrl]);

  return updatedAt;
}
