"use client";
import ProjectCard from "./ProjectCard";
import projectsDataRaw from "@/data/projects.json";
import { useTranslations } from "next-intl";
import { useRepoUpdatedAt, Project } from "@/hooks/useRepoUpdatedAt";
import SectionContainer from "../SectionContainer/SectionContainer";

const projectsData = projectsDataRaw as Project[];

export default function Projects() {
  const t = useTranslations("Projects");

  const sortedProjects = useRepoUpdatedAt(projectsData);

  return (
    <SectionContainer
      id="projects"
      className="flex items-center justify-center p-1"
    >
      <h1 className="text-3xl font-bold mb-8">{t("title")}</h1>
      <div
        className="
          flex gap-6 overflow-x-auto w-full
          snap-x snap-mandatory
          sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:w-auto sm:snap-none
          lg:grid-cols-3
          scrollbar-thin scrollbar-thumb-base-300 scrollbar-track-base-100
        "
      >
        {sortedProjects.map((project, idx) => (
          <div
            className="min-w-[90vw] sm:min-w-0 flex-shrink-0 sm:flex-shrink sm:w-auto snap-center"
            key={idx}
          >
            <ProjectCard
              image={project.image ?? ""}
              title={t(`${project.key}.title`)}
              description={t(`${project.key}.description`)}
              github={project.github}
              deploy={project.deploy ?? ""}
              techs={project.techs}
              updatedAt={project.updatedAt}
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
