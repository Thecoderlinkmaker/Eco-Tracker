import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Features />
        <Stats />
        <CTA />
      </main>
      <footer className={styles.footer}>
        <p>🌍 Building a greener future, one action at a time</p>
      </footer>
    </div>
  );
}
