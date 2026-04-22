import Image from "next/image";
import styles from "./Services.module.css";

type Variant = "light" | "green" | "dark" | "darklight";

interface Service {
  title: string[];
  variant: Variant;
  image: string;
}

const services: Service[] = [
  { title: ["Search engine", "optimization"], variant: "light", image: "/services/seo.png" },
  { title: ["Pay-per-click", "advertising"], variant: "green", image: "/services/ppc.png" },
  { title: ["Social Media", "Marketing"], variant: "darklight", image: "/services/social.png" },
  { title: ["Email", "Marketing"], variant: "light", image: "/services/email.png" },
  { title: ["Content", "Creation"], variant: "green", image: "/services/content.png" },
  { title: ["Analytics and", "Tracking"], variant: "dark", image: "/services/analytics.png" },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.heading}>Services</h2>
          <p className={styles.sub}>
            At our digital marketing agency, we offer a range of services to help
            businesses grow and succeed online. These services include:
          </p>
        </header>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <article key={i} className={`${styles.card} ${styles[s.variant]}`}>
              <div className={styles.cardBody}>
                <div className={styles.titleStack}>
                  {s.title.map((line, idx) => (
                    <span key={idx} className={styles.titleChip}>{line}</span>
                  ))}
                </div>
                <a className={styles.learn} href="#">
                  <span className={styles.arrow} aria-hidden>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Learn more
                </a>
              </div>
              <div className={styles.cardImage}>
                <Image src={s.image} alt={s.title.join(" ")} width={210} height={170} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
