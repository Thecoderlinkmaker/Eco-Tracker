import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Challenges from "@/components/Challenges";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Features />
        <Stats />
        <Challenges />
        <CTA />
      </main>
      <footer className={styles.footer}>
        <p>🌍 Building a greener future, one action at a time</p>
      </footer>
    </div>
  );
}
