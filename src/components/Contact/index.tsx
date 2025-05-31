import { useTranslations } from "next-intl";
import Socials from "./Socials";
import SectionContainer from "../SectionContainer/SectionContainer";

const SHOW_RESUME = process.env.NEXT_PUBLIC_SHOW_RESUME === "true";

export default function Contact() {
  const t = useTranslations("Contact");

  const resumeUrl =
    "https://docs.google.com/document/d/1QECjqnPUg9O2m4A6IEK0RC3gSozoWjogOqkmOMvlXb8/edit?usp=sharing";

  return (
    <SectionContainer id="contact">
      <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
      <p className="mb-4">
        {SHOW_RESUME
          ? t.rich("description", {
              resume: (chunks) => (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline visted:text-blue-700"
                  aria-label="Resume"
                >
                  {chunks}
                </a>
              ),
            })
          : t("descriptionNoResume")}
      </p>
      <Socials />
    </SectionContainer>
  );
}
