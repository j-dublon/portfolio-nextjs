import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <h1 className={styles.home__title}>Hello, my name is Jodi Dublon.</h1>
        <h1 className={styles.home__title}>I am a Software Engineer.</h1>
        <Link href={"/portfolio"} className={styles.welcome__link}>
          View my work <FontAwesomeIcon icon={faCircleArrowRight} />
        </Link>
      </main>
    </>
  );
}
