import { useTranslations } from "next-intl";
import ThemeSwitcher from "../Switchers/ThemeSwitcher.jsx";
import LanguageSwitcher from "../Switchers/LanguageSwitcher.jsx";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Adriano</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#about">{t("about")}</a>
          </li>
          <li>
            <a href="#projects">{t("projects")}</a>
          </li>
          <li>
            <a href="#contact">{t("contact")}</a>
          </li>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </ul>
      </div>
    </div>
  );
}
