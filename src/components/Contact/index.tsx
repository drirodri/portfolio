import { useTranslations } from "next-intl";
import Socials from "./Socials";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="flex flex-col items-center p-4">
      <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
      <p className="mb-4">{t("description")}</p>
      <Socials />
    </section>
  );
}
