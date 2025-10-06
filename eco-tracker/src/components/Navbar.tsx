'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const router = useRouter();

  const handleScrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const features = document.getElementById('features');
    if (features) {
      features.scrollIntoView({ behavior: 'smooth' });
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
            <a href="#features" onClick={handleScrollToFeatures}>Features</a>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#challenges">Challenges</Link>
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
