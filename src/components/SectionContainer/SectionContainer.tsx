import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = "",
  id,
}) => (
  <section
    id={id}
    className={`flex flex-col items-center p-4 ${className}`.trim()}
  >
    {children}
  </section>
);

export default SectionContainer;
