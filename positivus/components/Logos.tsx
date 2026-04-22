import Image from "next/image";
import styles from "./Logos.module.css";

const logos = [
  { src: "/logos/amazon.svg", alt: "Amazon", width: 124, height: 40 },
  { src: "/logos/dribbble.svg", alt: "Dribbble", width: 124, height: 40 },
  { src: "/logos/hubspot.svg", alt: "HubSpot", width: 124, height: 40 },
  { src: "/logos/notion.svg", alt: "Notion", width: 124, height: 40 },
  { src: "/logos/netflix.svg", alt: "Netflix", width: 124, height: 40 },
  { src: "/logos/zoom.svg", alt: "Zoom", width: 124, height: 40 },
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
