import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>🌱 EcoTrackr</h1>
      <p className={styles.subtitle}>
        Track your daily eco-friendly actions and make a difference
      </p>
      <div className={styles.ctas}>
        <button className={styles.primary}>
          Get Started
        </button>
        <button className={styles.secondary}>
          Learn More
        </button>
      </div>
    </section>
  );
}
