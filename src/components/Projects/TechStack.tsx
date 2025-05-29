import React from "react";
import ReactIcon from "@/icons/ReactIcon.jsx";
import JavaScriptIcon from "@/icons/JavaScriptIcon.jsx";
import TypeScriptIcon from "@/icons/TypeScriptIcon.jsx";
import NextJSIcon from "@/icons/NextJSIcon.jsx";
import HTMLIcon from "@/icons/HTMLIcon.jsx";
import CSSIcon from "@/icons/CSSIcon.jsx";
import JavaIcon from "@/icons/JavaIcon.jsx";
import PythonIcon from "@/icons/PythonIcon.jsx";
import CIcon from "@/icons/CIcon.jsx";
import DockerIcon from "@/icons/DockerIcon.jsx";
import GoIcon from "@/icons/GoIcon.jsx";

const iconMap: Record<string, React.ReactNode> = {
  react: <ReactIcon />,
  javascript: <JavaScriptIcon />,
  typescript: <TypeScriptIcon />,
  nextjs: <NextJSIcon />,
  html: <HTMLIcon />,
  css: <CSSIcon />,
  java: <JavaIcon />,
  python: <PythonIcon />,
  c: <CIcon />,
  docker: <DockerIcon />,
  go: <GoIcon />,
};

interface TechStackProps {
  techs?: string[];
}

const TechStack: React.FC<TechStackProps> = ({ techs = [] }) => (
  <div className="flex gap-2 my-2">
    {techs.map((tech) => (
      <span key={tech} title={tech}>
        {iconMap[tech] || tech}
      </span>
    ))}
  </div>
);

export default TechStack;
