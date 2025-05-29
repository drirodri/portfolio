"use client";
import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  github?: string;
  deploy?: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  github,
  deploy,
}: ProjectCardProps) {
  // Helper to open links in a new tab
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <Image
          src={image}
          alt={title}
          width={384}
          height={216}
          className="object-cover w-full h-48"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
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
              className="btn btn-primary"
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
