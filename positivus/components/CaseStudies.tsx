import styles from "./CaseStudies.module.css";

const cases = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

export default function CaseStudies() {
  return (
    <section id="cases" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.heading}>Case Studies</h2>
          <p className={styles.sub}>
            Explore real-life examples of our proven digital marketing success
            through our case studies.
          </p>
        </header>

        <div className={styles.box}>
          {cases.map((text, i) => (
            <article key={i} className={styles.item}>
              <p className={styles.text}>{text}</p>
              <a href="#" className={styles.link}>
                Learn more
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
