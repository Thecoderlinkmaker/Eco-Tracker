import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>🌱 EcoTrackr</h1>
        <p className={styles.subtitle}>
          Track your daily eco-friendly actions and make a difference
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.icon}>🚴</span>
            <h3>Track Actions</h3>
            <p>Log eco-friendly activities like cycling, reducing water use, and more</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>📊</span>
            <h3>Visualize Progress</h3>
            <p>See your environmental impact grow over time</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>🤝</span>
            <h3>Join Challenges</h3>
            <p>Participate in community challenges and stay motivated</p>
          </div>
        </div>

        <div className={styles.ctas}>
          <button className={styles.primary}>
            Get Started
          </button>
          <button className={styles.secondary}>
            Learn More
          </button>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>🌍 Building a greener future, one action at a time</p>
      </footer>
    </div>
  );
}
