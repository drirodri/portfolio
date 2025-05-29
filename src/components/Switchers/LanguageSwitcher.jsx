"use client";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || "/";
    router.push(newPath);
  };

  return (
    <select value={currentLocale} onChange={handleLanguageChange}>
      {routing.locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale === "en-US" ? "English" : "Português"}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
