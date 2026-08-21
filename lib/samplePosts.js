export const samplePosts = [
  {
    id: 1,
    type: 'win',
    user: {
      name: 'Sarah Martinez',
      username: 'sarahm',
      streak: 30,
    },
    content: "30 days of consistency! Never felt better. Started small, but these daily wins are adding up. 💪",
    stats: [
      { label: 'Fitness', value: 85, icon: '💪' },
      { label: 'Reading', value: 72, icon: '📚' },
      { label: 'Meditation', value: 90, icon: '🧘' },
    ],
    interactions: {
      likes: 45,
      comments: 8,
      shares: 3,
    },
    timestamp: '2h ago',
  },
  {
    id: 2,
    type: 'question',
    user: {
      name: 'Marcus Lee',
      username: 'marcus',
      streak: 12,
    },
    content: "How do you stay motivated on days when you just don't feel like doing anything?",
    interactions: {
      likes: 23,
      comments: 15,
      shares: 2,
    },
    timestamp: '5h ago',
  },
  {
    id: 3,
    type: 'achievement',
    user: {
      name: 'Alex Chen',
      username: 'alexc',
      streak: 100,
    },
    achievement: {
      icon: '🔥',
      title: '100-Day Streak Master',
      description: "Completed 100 consecutive daily check-ins. Consistency is key!",
    },
    interactions: {
      likes: 127,
      comments: 34,
      shares: 12,
    },
    timestamp: '1h ago',
  },
];