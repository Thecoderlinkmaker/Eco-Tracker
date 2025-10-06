import styles from './Stats.module.css';

interface Stat {
  value: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  {
    value: '10K+',
    label: 'Active Users',
    icon: '👥'
  },
  {
    value: '50K+',
    label: 'Eco Actions Logged',
    icon: '✅'
  },
  {
    value: '2.5M',
    label: 'kg CO₂ Saved',
    icon: '🌍'
  },
  {
    value: '100+',
    label: 'Community Challenges',
    icon: '🏆'
  }
];

export default function Stats() {
  return (
    <section className={styles.stats}>
      <h2 className={styles.heading}>Our Impact So Far</h2>
      <div className={styles.grid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.stat}>
            <span className={styles.icon}>{stat.icon}</span>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
