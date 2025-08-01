import React from "react";

const iconMap: Record<string, string> = {
  react: "devicon-react-original colored",
  javascript: "devicon-javascript-plain colored",
  typescript: "devicon-typescript-plain colored",
  nextjs: "devicon-nextjs-plain colored",
  html: "devicon-html5-plain colored",
  css: "devicon-css3-plain colored",
  docker: "devicon-docker-plain colored",
  go: "devicon-go-original-wordmark colored",
  python: "devicon-python-plain colored",
  java: "devicon-java-plain colored",
  nodejs: "devicon-nodejs-plain colored",
  c: "devicon-c-plain colored",
  spring: "devicon-spring-plain colored",
  tailwindcss: "devicon-tailwindcss-plain colored",
  nestjs: "devicon-nestjs-plain colored",
  postgresql: "devicon-postgresql-plain colored",
};

interface TechStackProps {
  techs: string[];
  className?: string;
  iconsize?: number;
}

const TechStack: React.FC<TechStackProps> = ({
  techs = [],
  className = "",
  iconsize = 30,
}) => (
  <div className={`flex gap-2 my-2 ${className}`}>
    {techs.map((tech) => {
      const iconClass = iconMap[tech];
      return (
        <span key={tech} title={tech} className="inline-block align-middle">
          {iconClass ? (
            <i className={iconClass} style={{ fontSize: iconsize }} />
          ) : (
            tech
          )}
        </span>
      );
    })}
  </div>
);

export default TechStack;
