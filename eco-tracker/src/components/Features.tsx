import styles from './Features.module.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '🚴',
    title: 'Track Actions',
    description: 'Log eco-friendly activities like cycling, reducing water use, and more'
  },
  {
    icon: '📊',
    title: 'Visualize Progress',
    description: 'See your environmental impact grow over time'
  },
  {
    icon: '🤝',
    title: 'Join Challenges',
    description: 'Participate in community challenges and stay motivated'
  }
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      {features.map((feature, index) => (
        <div key={index} className={styles.feature}>
          <span className={styles.icon}>{feature.icon}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}
