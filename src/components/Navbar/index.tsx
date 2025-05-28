import styles from "./Navbar.module.css";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <nav className={styles.nav}>
      <div className={styles.title}>Adriano</div>
      <ul className="flex space-x-4">
        <li>
          <a href="#about" className={styles.link}>
            {t("about")}
          </a>
        </li>
        <li>
          <a href="#projects" className={styles.link}>
            {t("projects")}
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.link}>
            {t("contact")}
          </a>
        </li>
      </ul>
    </nav>
  );
}
