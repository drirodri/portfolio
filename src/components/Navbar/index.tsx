"use client";
import { useTranslations } from "next-intl";
import ThemeSwitcher from "../Switchers/ThemeSwitcher.jsx";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";
import { scrollToSection } from "@/utils/scrollToSection";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || "/";
    router.push(newPath);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl hidden md:inline">Adriano</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
              {t("about")}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
              {t("projects")}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
              {t("contact")}
            </a>
          </li>
          <li>
            <details>
              <summary>{t("language")}</summary>
              <ul className="p-2">
                {routing.locales.map((locale) => (
                  <li key={locale}>
                    <a
                      href="#"
                      onClick={() => {
                        handleLanguageChange(locale);
                      }}
                      className={locale === currentLocale ? "font-bold" : ""}
                    >
                      {locale === "en-US" ? "English" : "Português"}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <ThemeSwitcher />
        </ul>
      </div>
    </div>
  );
}
