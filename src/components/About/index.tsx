import { useTranslations } from "next-intl";
import Image from "next/image";
import SectionContainer from "../SectionContainer/SectionContainer";

export default function About() {
  const t = useTranslations("About");

  return (
    <SectionContainer id="about" className="flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8 p-4">
        <div className="avatar mb-6 md:mb-0">
          <div className="w-48 md:w-100 rounded-full">
            <Image
              src="/me.jpeg"
              alt="Me"
              width={192}
              height={192}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {t("greeting")}
          </h1>
          <p className="max-w-xs md:max-w-100">{t("description")}</p>
        </div>
      </div>
    </SectionContainer>
  );
}
