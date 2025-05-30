"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import TechStack from "./TechStack";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  github?: string;
  deploy?: string;
  techs: string[];
  updatedAt?: string | null;
}

export default function ProjectCard({
  image,
  title,
  description,
  github,
  deploy,
  techs,
  updatedAt,
}: ProjectCardProps) {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const t = useTranslations("Projects");

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <Image
          src={image ? image : "https://placehold.co/384x216/jpg"}
          alt={title}
          width={384}
          height={216}
          className="object-cover w-full h-48"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <TechStack techs={techs} />
        <div className="card-actions justify-end">
          {updatedAt && (
            <p className="text-xs text-gray-500">
              {t("lastUpdated")}: {new Date(updatedAt).toLocaleDateString()}
            </p>
          )}
          {github && (
            <button
              className="btn btn-primary"
              onClick={() => openInNewTab(github)}
              type="button"
            >
              GitHub
            </button>
          )}
          {deploy && (
            <button
              className="btn btn-secondary"
              onClick={() => openInNewTab(deploy)}
              type="button"
            >
              Deploy
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
