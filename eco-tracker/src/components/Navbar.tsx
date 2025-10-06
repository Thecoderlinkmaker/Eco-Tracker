import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🌱</span>
          <span className={styles.logoText}>EcoTrackr</span>
        </Link>
        
        <ul className={styles.navLinks}>
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#challenges">Challenges</Link>
          </li>
        </ul>

        <div className={styles.navActions}>
          <button className={styles.btnSecondary}>Sign In</button>
          <button className={styles.btnPrimary}>Get Started</button>
        </div>
      </div>
    </nav>
  );
}
