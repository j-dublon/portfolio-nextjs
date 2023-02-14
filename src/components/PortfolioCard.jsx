import Image from "next/image";
import styles from "@/styles/portfolio-card.module.css";

const PortfolioCard = ({ project }) => {
  const { name, id, description, tech, site, code } = project;

  return (
    <section className={styles.portfolioCard__container}>
      <Image
        src={`/images/${id}.png`}
        alt="Project thumbnail"
        className={styles.portfolioCard__img}
        style={{ objectFit: "contain" }}
        height={200}
        width={500}
      />
      <section className={styles.portfolioCard__infoContainer}>
        <div className={styles.portfolioCard__top}>
          <h3 className={styles.portfolioCard__title}>{name}</h3>
          <p className={styles.portfolioCard__description}>{description}</p>
          <div className={styles.portfolioCard__tech}>
            <p className={styles.portfolioCard__tech__heading}>Tech:</p>
            <p className={styles.portfolioCard__tech__content}>{tech}</p>
          </div>
        </div>
        <section className={styles.portfolioCard__links}>
          {site !== "" && (
            <a
              href={site}
              className={styles.portfolioCard__links__item}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit site
            </a>
          )}
          <a
            href={code}
            className={styles.portfolioCard__links__item}
            target="_blank"
            rel="noopener noreferrer"
          >
            View code
          </a>
        </section>
      </section>
    </section>
  );
};

export default PortfolioCard;
