import React from "react";
import ReactIcon from "@/icons/ReactIcon.jsx";
import JavaScriptIcon from "@/icons/JavaScriptIcon.jsx";

const iconMap: Record<string, React.ReactNode> = {
  react: <ReactIcon />,
  javaScript: <JavaScriptIcon />,
  //   typescript: <TypeScriptIcon />,
  //   nextjs: <NextJSIcon />,
  // ...add other techs
};

interface TechStackProps {
  techs: string[];
}

const TechStack: React.FC<TechStackProps> = ({ techs }) => (
  <div className="flex gap-2 my-2">
    {techs.map((tech) => (
      <span key={tech} title={tech}>
        {iconMap[tech] || tech}
      </span>
    ))}
  </div>
);

export default TechStack;
