import { useTranslations } from "next-intl";
import Socials from "./Socials";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="flex flex-col items-center p-4">
      <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
      <p className="mb-4">
        {t.rich("description", {
          resume: (chunks) => (
            <a
              href="https://docs.google.com/document/d/1QECjqnPUg9O2m4A6IEK0RC3gSozoWjogOqkmOMvlXb8/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline visted:text-blue-700"
              aria-label="Resume"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
      <Socials />
    </section>
  );
}
