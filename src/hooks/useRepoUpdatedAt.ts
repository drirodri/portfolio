import { useEffect, useState } from "react";

export interface Project {
  key: string;
  image: string | null;
  github?: string;
  deploy?: string | null;
  techs: string[];
  updatedAt?: string | null;
}

export function useRepoUpdatedAt(projects: Project[] = []): Project[] {
  const [projectsWithUpdatedAt, setProjectsWithUpdatedAt] = useState<Project[]>(
    Array.isArray(projects) ? projects : []
  );

  useEffect(() => {
    if (!Array.isArray(projects)) return;
    let isMounted = true;
    Promise.all(
      projects.map(async (project) => {
        if (!project.github) return { ...project, updatedAt: null };
        try {
          const match = project.github.match(/github\.com\/([^/]+)\/([^/]+)/);
          if (!match) return { ...project, updatedAt: null };
          const [, owner, repo] = match;
          const res = await fetch(
            `https://api.github.com/repos/${owner}/${repo}`
          );
          if (!res.ok) return { ...project, updatedAt: null };
          const data = await res.json();
          return { ...project, updatedAt: data.updated_at };
        } catch {
          return { ...project, updatedAt: null };
        }
      })
    ).then((projectsWithDates) => {
      if (isMounted) {
        projectsWithDates.sort((a, b) => {
          if (!a.updatedAt) return 1;
          if (!b.updatedAt) return -1;
          return (
            new Date(b.updatedAt!).getTime() - new Date(a.updatedAt!).getTime()
          );
        });
        setProjectsWithUpdatedAt(projectsWithDates);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [projects]);

  return projectsWithUpdatedAt;
}
