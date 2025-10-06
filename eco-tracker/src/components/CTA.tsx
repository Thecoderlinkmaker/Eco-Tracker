import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Make a Difference?</h2>
        <p className={styles.description}>
          Join thousands of eco-conscious individuals tracking their green habits
          and building a sustainable future together.
        </p>
        <Link href="/signup" className={styles.button}>
          Start Your Journey Today
          <span className={styles.arrow}>→</span>
        </Link>
        <p className={styles.note}>Free forever • No credit card required</p>
      </div>
    </section>
  );
}
