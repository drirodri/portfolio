import ProjectCard from "./ProjectCard";
import projects from "@/data/projects.json";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center p-4"
    >
      <h1 className="text-3xl font-bold mb-8">{t("title")}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            image={project.image ?? ""}
            title={t(`${project.key}.title`)}
            description={t(`${project.key}.description`)}
            github={project.github}
            deploy={project.deploy ?? ""}
            techs={project.techs}
          />
        ))}
      </div>
    </section>
  );
}
