import { useTranslations } from "next-intl";
import SectionContainer from "../SectionContainer/SectionContainer";
import TimelineBox from "./TimelineBox";
import timelineEntries from "@/data/timelineEntries.json";

export default function Timeline() {
  const t = useTranslations("Timeline");

  return (
    <SectionContainer>
      <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
      <TimelineBox entries={timelineEntries} />
    </SectionContainer>
  );
}
