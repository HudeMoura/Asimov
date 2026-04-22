import Link from "next/link";
import styles from "./Header.module.css";

const links = [
  { label: "About us", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#cases" },
  { label: "Pricing", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark} aria-hidden />
          Positivus
        </Link>
        <nav className={styles.nav}>
          {links.map((l) => (
            <Link key={l.label} href={l.href} className={styles.navLink}>
              {l.label}
            </Link>
          ))}
          <Link href="#" className={styles.cta}>Request a quote</Link>
        </nav>
      </div>
    </header>
  );
}
