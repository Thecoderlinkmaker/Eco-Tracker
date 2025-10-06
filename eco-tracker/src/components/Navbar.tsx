'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const handleScrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const features = document.getElementById('features');
    if (features) {
      features.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSignIn = () => {
    alert('Sign In feature coming soon! 🔐');
  };

  const handleGetStarted = () => {
    alert('Welcome to EcoTrackr! Sign up feature coming soon. 🌱');
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
          <button onClick={handleSignIn} className={styles.btnSecondary}>Sign In</button>
          <button onClick={handleGetStarted} className={styles.btnPrimary}>Get Started</button>
        </div>
      </div>
    </nav>
  );
}
