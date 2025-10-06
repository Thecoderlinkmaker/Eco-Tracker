'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const handleScrollTo = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🌱</span>
          <span className={styles.logoText}>EcoTrackr</span>
        </Link>
        
        <ul className={styles.navLinks}>
          <li>
            <a href="#features" onClick={(e) => handleScrollTo(e, 'features')}>Features</a>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <a href="#challenges" onClick={(e) => handleScrollTo(e, 'challenges')}>Challenges</a>
          </li>
        </ul>

        <div className={styles.navActions}>
          <Link href="/signin" className={styles.btnSecondary}>Sign In</Link>
          <Link href="/signup" className={styles.btnPrimary}>Get Started</Link>
        </div>
      </div>
    </nav>
  );
}
