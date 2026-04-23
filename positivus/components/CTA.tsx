import Image from "next/image";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.copy}>
            <h3 className={styles.title}>Let&apos;s make things happen</h3>
            <p className={styles.text}>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <button type="button" className={styles.cta}>
              Get your free proposal
            </button>
          </div>
          <div className={styles.illustration}>
            <Image src="/cases/cta.png" alt="" width={354} height={394} />
          </div>
        </div>
      </div>
    </section>
  );
}
