import Image from "next/image";
import styles from "./Logos.module.css";

const logos = [
  { src: "/logos/amazon.png", alt: "Amazon", width: 124, height: 48 },
  { src: "/logos/dribbble.png", alt: "Dribbble", width: 124, height: 48 },
  { src: "/logos/hubspot.png", alt: "HubSpot", width: 124, height: 48 },
  { src: "/logos/notion.png", alt: "Notion", width: 124, height: 48 },
  { src: "/logos/netflix.png", alt: "Netflix", width: 124, height: 48 },
  { src: "/logos/zoom.png", alt: "Zoom", width: 124, height: 48 },
];

export default function Logos() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ul className={styles.list}>
          {logos.map((l) => (
            <li key={l.alt} className={styles.item}>
              <Image src={l.src} alt={l.alt} width={l.width} height={l.height} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
