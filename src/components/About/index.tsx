import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");

  return (
    <div id="about" className="flex items-center justify-center">
      <div className="flex flex-row items-center gap-8 p-4">
        <div className="avatar">
          <div className="w-100 rounded-full">
            <Image
              src="/me.jpeg"
              alt="Me"
              width={350}
              height={350}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-4">{t("greeting")}</h1>
          <p className="max-w-100">{t("description")}</p>{" "}
        </div>
      </div>
    </div>
  );
}
