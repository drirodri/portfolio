import Image from "next/image";
import mailIcon from "../../../public/mail.svg";

export default function Socials() {
  return (
    <div className="flex gap-6 mt-2">
      <a
        href="https://github.com/drirodri"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <i className="devicon-github-original colored text-4xl"></i>
      </a>
      <a
        href="https://linkedin.com/in/drirodri"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <i className="devicon-linkedin-plain colored text-4xl"></i>
      </a>
      <a href="mailto:adriano.rsilva97@gmail.com" aria-label="Email">
        <Image
          src={mailIcon}
          alt="Email"
          width={36}
          height={36}
          style={{ minWidth: "2rem", minHeight: "2rem" }}
        />
      </a>
    </div>
  );
}
