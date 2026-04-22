import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Positivus — Navigating the digital landscape for success",
  description:
    "Our digital marketing agency helps businesses grow and succeed online through SEO, PPC, social media, content and analytics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.variable}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
