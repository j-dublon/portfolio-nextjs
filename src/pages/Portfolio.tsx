import styles from "@/styles/portfolio.module.css";
import { projects } from "@/data/portfolio-data";
import PortfolioCard from "@/components/PortfolioCard";

export default function Portfolio() {
  return (
    <main className={styles.portfolio}>
      <h2 className={styles.portfolio__title}>Portfolio</h2>
      {projects.map((project) => (
        <PortfolioCard project={project} key={project.id} />
      ))}
    </main>
  );
}
