'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const handleLearnMore = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>🌱 EcoTrackr</h1>
      <p className={styles.subtitle}>
        Track your daily eco-friendly actions and make a difference
      </p>
      <div className={styles.ctas}>
        <Link href="/signup" className={styles.primary}>
          Get Started
        </Link>
        <button onClick={handleLearnMore} className={styles.secondary}>
          Learn More
        </button>
      </div>
    </section>
  );
}
