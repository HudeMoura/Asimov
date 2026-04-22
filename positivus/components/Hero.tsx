import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            Navigating the digital landscape for success
          </h1>
          <p className={styles.lead}>
            Our digital marketing agency helps businesses grow and succeed online
            through a range of services including SEO, PPC, social media marketing,
            and content creation.
          </p>
          <button className={styles.cta} type="button">
            Book a consultation
          </button>
        </div>
        <div className={styles.illustration}>
          <Image
            src="/cases/header.png"
            alt="Hero illustration"
            width={600}
            height={515}
            priority
          />
        </div>
      </div>
    </section>
  );
}
