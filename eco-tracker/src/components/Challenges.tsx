import styles from './Challenges.module.css';
import Link from 'next/link';

interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: string;
  participants: number;
  duration: string;
  impact: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
}

const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Bike to Work Week',
    description: 'Commit to cycling to work for 5 consecutive days and reduce your carbon footprint.',
    icon: '🚴',
    participants: 1247,
    duration: '7 days',
    impact: '50kg CO₂ saved',
    difficulty: 'Medium',
    category: 'Transport'
  },
  {
    id: '2',
    title: 'Plastic-Free July',
    description: 'Go the entire month without single-use plastics. Track your progress daily.',
    icon: '♻️',
    participants: 3456,
    duration: '30 days',
    impact: '200kg waste reduced',
    difficulty: 'Hard',
    category: 'Waste'
  },
  {
    id: '3',
    title: 'Meatless Monday',
    description: 'Skip meat every Monday for a month and discover delicious plant-based meals.',
    icon: '🥗',
    participants: 2891,
    duration: '4 weeks',
    impact: '80kg CO₂ saved',
    difficulty: 'Easy',
    category: 'Food'
  },
  {
    id: '4',
    title: 'Water Warrior',
    description: 'Reduce your water usage by 30% through conscious conservation efforts.',
    icon: '💧',
    participants: 892,
    duration: '14 days',
    impact: '500L water saved',
    difficulty: 'Medium',
    category: 'Water'
  },
  {
    id: '5',
    title: 'Energy Saver Sprint',
    description: 'Cut your home energy consumption by turning off unused devices and lights.',
    icon: '⚡',
    participants: 1654,
    duration: '21 days',
    impact: '100kWh saved',
    difficulty: 'Easy',
    category: 'Energy'
  },
  {
    id: '6',
    title: 'Zero Waste Weekend',
    description: 'Go an entire weekend producing absolutely zero waste. Plan ahead!',
    icon: '🗑️',
    participants: 567,
    duration: '2 days',
    impact: '5kg waste reduced',
    difficulty: 'Hard',
    category: 'Waste'
  }
];

export default function Challenges() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return styles.easy;
      case 'Medium': return styles.medium;
      case 'Hard': return styles.hard;
      default: return '';
    }
  };

  return (
    <section id="challenges" className={styles.challenges}>
      <div className={styles.header}>
        <h2 className={styles.title}>Community Challenges</h2>
        <p className={styles.subtitle}>
          Join others in making a difference. Choose a challenge and start your eco-journey today!
        </p>
      </div>

      <div className={styles.grid}>
        {challenges.map((challenge) => (
          <div key={challenge.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>{challenge.icon}</span>
              <span className={`${styles.difficulty} ${getDifficultyColor(challenge.difficulty)}`}>
                {challenge.difficulty}
              </span>
            </div>

            <h3 className={styles.cardTitle}>{challenge.title}</h3>
            <p className={styles.description}>{challenge.description}</p>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>👥</span>
                <span>{challenge.participants.toLocaleString()} joined</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>⏱️</span>
                <span>{challenge.duration}</span>
              </div>
            </div>

            <div className={styles.impact}>
              <span className={styles.impactIcon}>🌍</span>
              <span className={styles.impactText}>{challenge.impact}</span>
            </div>

            <button className={styles.joinBtn}>
              Join Challenge
            </button>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <Link href="/challenges" className={styles.viewAllBtn}>
          View All Challenges
        </Link>
      </div>
    </section>
  );
}
