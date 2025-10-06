'use client';

import styles from './CTA.module.css';

export default function CTA() {
  const handleGetStarted = () => {
    // For now, scroll to top or show a message
    // In the future, this would navigate to a sign-up page
    alert('Welcome to EcoTrackr! Sign up feature coming soon. 🌱');
  };

  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Make a Difference?</h2>
        <p className={styles.description}>
          Join thousands of eco-conscious individuals tracking their green habits
          and building a sustainable future together.
        </p>
        <button onClick={handleGetStarted} className={styles.button}>
          Start Your Journey Today
          <span className={styles.arrow}>→</span>
        </button>
        <p className={styles.note}>Free forever • No credit card required</p>
      </div>
    </section>
  );
}
