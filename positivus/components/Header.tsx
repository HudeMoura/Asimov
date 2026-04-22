import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/cases/icon.png"
            alt="Positivus logo"
            width={38}
            height={38}
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>Positivus</span>
        </Link>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>About us</a>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#usecases" className={styles.navLink}>Use Cases</a>
          <a href="#pricing" className={styles.navLink}>Pricing</a>
          <a href="#blog" className={styles.navLink}>Blog</a>
          <button className={styles.quoteButton}>Request a quote</button>
        </nav>
      </div>
    </header>
  );
}
