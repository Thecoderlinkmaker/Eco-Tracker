'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './challenges.module.css';

interface Challenge {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  participants: number;
  duration: string;
  impact: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  startDate: string;
  tasks: string[];
}

const allChallenges: Challenge[] = [
  {
    id: '1',
    title: 'Bike to Work Week',
    description: 'Commit to cycling to work for 5 consecutive days and reduce your carbon footprint.',
    longDescription: 'Join thousands of commuters in choosing a healthier, greener way to get to work. This challenge helps you reduce emissions, stay fit, and save money on transportation.',
    icon: '🚴',
    participants: 1247,
    duration: '7 days',
    impact: '50kg CO₂ saved',
    difficulty: 'Medium',
    category: 'Transport',
    startDate: 'Nov 1, 2025',
    tasks: ['Prepare your bike', 'Plan your route', 'Track daily rides', 'Share your journey', 'Complete 5 days']
  },
  {
    id: '2',
    title: 'Plastic-Free July',
    description: 'Go the entire month without single-use plastics. Track your progress daily.',
    longDescription: 'A month-long challenge to eliminate single-use plastics from your life. Learn alternatives, discover sustainable products, and join a global movement.',
    icon: '♻️',
    participants: 3456,
    duration: '30 days',
    impact: '200kg waste reduced',
    difficulty: 'Hard',
    category: 'Waste',
    startDate: 'Jul 1, 2025',
    tasks: ['Audit plastic usage', 'Find alternatives', 'Daily check-ins', 'Share tips', 'Reach 30 days']
  },
  {
    id: '3',
    title: 'Meatless Monday',
    description: 'Skip meat every Monday for a month and discover delicious plant-based meals.',
    longDescription: 'Reduce your carbon footprint and discover amazing plant-based recipes. This challenge makes it easy to start a more sustainable diet.',
    icon: '🥗',
    participants: 2891,
    duration: '4 weeks',
    impact: '80kg CO₂ saved',
    difficulty: 'Easy',
    category: 'Food',
    startDate: 'Ongoing',
    tasks: ['Find recipes', 'Plan meals', 'Log Monday meals', 'Share recipes', 'Complete 4 weeks']
  },
  {
    id: '4',
    title: 'Water Warrior',
    description: 'Reduce your water usage by 30% through conscious conservation efforts.',
    longDescription: 'Learn to conserve water in your daily activities. Track your usage and discover how small changes make a big difference.',
    icon: '💧',
    participants: 892,
    duration: '14 days',
    impact: '500L water saved',
    difficulty: 'Medium',
    category: 'Water',
    startDate: 'Nov 15, 2025',
    tasks: ['Measure baseline', 'Fix leaks', 'Shorter showers', 'Track usage', 'Hit 30% reduction']
  },
  {
    id: '5',
    title: 'Energy Saver Sprint',
    description: 'Cut your home energy consumption by turning off unused devices and lights.',
    longDescription: 'A quick challenge to develop energy-saving habits. Learn to identify energy vampires and reduce your electricity bill.',
    icon: '⚡',
    participants: 1654,
    duration: '21 days',
    impact: '100kWh saved',
    difficulty: 'Easy',
    category: 'Energy',
    startDate: 'Nov 10, 2025',
    tasks: ['Energy audit', 'Unplug vampires', 'Use power strips', 'Track savings', 'Form new habits']
  },
  {
    id: '6',
    title: 'Zero Waste Weekend',
    description: 'Go an entire weekend producing absolutely zero waste. Plan ahead!',
    longDescription: 'An intensive weekend challenge to experience zero waste living. Perfect for learning what it takes to eliminate waste completely.',
    icon: '🗑️',
    participants: 567,
    duration: '2 days',
    impact: '5kg waste reduced',
    difficulty: 'Hard',
    category: 'Waste',
    startDate: 'Every Weekend',
    tasks: ['Plan meals', 'No packaging', 'Compost setup', 'Document journey', 'Zero waste!']
  },
  {
    id: '7',
    title: 'Green Commute Month',
    description: 'Use public transport, carpool, or walk instead of driving alone.',
    longDescription: 'Transform your daily commute into an eco-friendly journey. This month-long challenge helps you explore alternative transportation while reducing your carbon footprint and transportation costs.',
    icon: '🚇',
    participants: 1832,
    duration: '30 days',
    impact: '120kg CO₂ saved',
    difficulty: 'Medium',
    category: 'Transport',
    startDate: 'Dec 1, 2025',
    tasks: ['Find carpool partners', 'Buy transit pass', 'Plan routes', 'Track emissions', 'Complete month']
  },
  {
    id: '8',
    title: 'Local Food Challenge',
    description: 'Buy only locally-sourced food for two weeks.',
    longDescription: 'Support local farmers and reduce food miles by eating locally. Discover fresh, seasonal produce while building community connections and reducing your environmental impact.',
    icon: '🌽',
    participants: 1043,
    duration: '14 days',
    impact: '40kg CO₂ saved',
    difficulty: 'Medium',
    category: 'Food',
    startDate: 'Nov 20, 2025',
    tasks: ['Find local markets', 'Meet farmers', 'Plan local meals', 'Share experiences', 'Complete 2 weeks']
  }
];

export default function ChallengesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const categories = ['All', 'Transport', 'Waste', 'Food', 'Water', 'Energy'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const filteredChallenges = allChallenges.filter(challenge => {
    const categoryMatch = selectedCategory === 'All' || challenge.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || challenge.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return styles.easy;
      case 'Medium': return styles.medium;
      case 'Hard': return styles.hard;
      default: return '';
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Community Challenges</h1>
        <p className={styles.subtitle}>
          Join thousands in making a positive environmental impact. Choose a challenge that fits your lifestyle and start today!
        </p>
      </div>

      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Category:</label>
          <div className={styles.filterButtons}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Difficulty:</label>
          <div className={styles.filterButtons}>
            {difficulties.map(diff => (
              <button
                key={diff}
                className={`${styles.filterBtn} ${selectedDifficulty === diff ? styles.active : ''}`}
                onClick={() => setSelectedDifficulty(diff)}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{filteredChallenges.length}</div>
          <div className={styles.statLabel}>Active Challenges</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>
            {filteredChallenges.reduce((sum, c) => sum + c.participants, 0).toLocaleString()}
          </div>
          <div className={styles.statLabel}>Total Participants</div>
        </div>
      </div>

      <div className={styles.grid}>
        {filteredChallenges.map((challenge) => (
          <div key={challenge.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>{challenge.icon}</span>
              <span className={`${styles.difficulty} ${getDifficultyColor(challenge.difficulty)}`}>
                {challenge.difficulty}
              </span>
            </div>

            <span className={styles.category}>{challenge.category}</span>
            <h3 className={styles.cardTitle}>{challenge.title}</h3>
            <p className={styles.description}>{challenge.longDescription}</p>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>👥</span>
                <span>{challenge.participants.toLocaleString()} joined</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>⏱️</span>
                <span>{challenge.duration}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>📅</span>
                <span>{challenge.startDate}</span>
              </div>
            </div>

            <div className={styles.impact}>
              <span className={styles.impactIcon}>🌍</span>
              <span className={styles.impactText}>Potential Impact: {challenge.impact}</span>
            </div>

            <div className={styles.tasks}>
              <h4 className={styles.tasksTitle}>Challenge Tasks:</h4>
              <ul className={styles.taskList}>
                {challenge.tasks.slice(0, 3).map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>

            <button className={styles.joinBtn}>
              Join Challenge
            </button>
          </div>
        ))}
      </div>

      {filteredChallenges.length === 0 && (
        <div className={styles.empty}>
          <p>No challenges found matching your filters. Try adjusting your selection!</p>
        </div>
      )}

      <div className={styles.backLink}>
        <Link href="/">← Back to Home</Link>
      </div>
    </div>
  );
}
