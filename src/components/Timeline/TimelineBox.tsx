import React from "react";
import { useTranslations } from "next-intl";

type TimelineBoxProps = {
  entries: string[];
};

const TimelineBox: React.FC<TimelineBoxProps> = ({ entries }) => {
  const t = useTranslations("Timeline");

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {entries.map((key, idx) => (
        <li key={key}>
          {idx !== 0 && <hr />}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={`timeline-${idx % 2 === 0 ? "start mb-10 md:text-end" : "end md:mb-10"}`}
          >
            <time className="font-mono italic">
              {t(`${key}.month`, { default: "" })}{" "}
              {t(`${key}.year`, { default: "" })}
            </time>
            <div className="text-lg font-black">
              {t(`${key}.tech`, { default: key })}
            </div>
            <div>{t(`${key}.note`, { default: "" })}</div>
          </div>
          {idx !== entries.length - 1 && <hr />}
        </li>
      ))}
    </ul>
  );
};

export default TimelineBox;
