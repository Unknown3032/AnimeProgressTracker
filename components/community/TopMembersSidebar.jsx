'use client';

import { useState } from 'react';

export default function TopMembersSidebar() {
  const topMembers = [
    { name: 'Alex Chen', points: 2847, rank: 1 },
    { name: 'Sarah M.', points: 2654, rank: 2 },
    { name: 'Jordan K.', points: 2401, rank: 3 },
    { name: 'Maya L.', points: 2198, rank: 4 },
    { name: 'Marcus T.', points: 2056, rank: 5 },
  ];

  return (
    <div
      style={{
        padding: '32px 24px',
        border: '1px solid #262626',
        backgroundColor: '#0a0a0a',
      }}
    >
      <h3
        className="text-lg font-bold"
        style={{
          color: '#ffffff',
          marginBottom: '20px',
        }}
      >
        Top Members
      </h3>

      <div className="space-y-4">
        {topMembers.map((member) => (
          <MemberCard key={member.rank} member={member} />
        ))}
      </div>

      <div
        style={{
          marginTop: '24px',
          paddingTop: '24px',
          borderTop: '1px solid #262626',
          textAlign: 'center',
        }}
      >
        <LeaderboardButton />
      </div>
    </div>
  );
}

function MemberCard({ member }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '16px',
        border: `1px solid ${isHovered ? '#404040' : '#262626'}`,
        backgroundColor: 'rgba(0,0,0,0.5)',
        transition: 'border-color 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="text-2xl font-black"
            style={{
              color: member.rank <= 3 ? '#ffffff' : '#737373',
            }}
          >
            {member.rank === 1 ? '🥇' : member.rank === 2 ? '🥈' : member.rank === 3 ? '🥉' : `#${member.rank}`}
          </span>
          <div>
            <div
              className="text-sm font-bold"
              style={{ color: '#ffffff' }}
            >
              {member.name}
            </div>
            <div
              className="text-xs"
              style={{ color: '#737373' }}
            >
              {member.points} pts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeaderboardButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        padding: '12px',
        border: '1px solid #ffffff',
        backgroundColor: isHovered ? '#ffffff' : 'transparent',
        color: isHovered ? '#000000' : '#ffffff',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      View Full Leaderboard
    </button>
  );
}