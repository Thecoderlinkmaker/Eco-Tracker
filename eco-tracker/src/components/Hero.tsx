'use client';

import styles from './Hero.module.css';

export default function Hero() {
  const handleGetStarted = () => {
    alert('Welcome to EcoTrackr! Start tracking your eco-friendly actions today. 🌱');
  };

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
        <button onClick={handleGetStarted} className={styles.primary}>
          Get Started
        </button>
        <button onClick={handleLearnMore} className={styles.secondary}>
          Learn More
        </button>
      </div>
    </section>
  );
}
