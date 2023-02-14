import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  return (
    <div className={styles.navigation}>
      <nav className={styles.leftNav}>
        <a
          href="https://github.com/j-dublon"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.leftNav__item}
        >
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/jdublon/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.leftNav__item}
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
      </nav>
      <nav className="rightNav">
        <Link href={"/"} className={styles.rightNav__item}>
          Welcome
        </Link>
        <Link href={"/portfolio"} className={styles.rightNav__item}>
          Portfolio
        </Link>
        <Link href={"/info"} className={styles.rightNav__item}>
          About
        </Link>
        <Link href={"/contact"} className={styles.rightNav__item}>
          Contact
        </Link>
      </nav>
    </div>
  );
}
