'use client';

import { useState } from 'react';

export default function FilterSidebar({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Posts' },
    { id: 'wins', label: 'Daily Wins' },
    { id: 'questions', label: 'Questions' },
    { id: 'achievements', label: 'Achievements' },
  ];

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    if (onFilterChange) {
      onFilterChange(filterId);
    }
  };

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
        Filters
      </h3>

      <div className="space-y-3">
        {filters.map((filter) => (
          <FilterButton
            key={filter.id}
            label={filter.label}
            active={activeFilter === filter.id}
            onClick={() => handleFilterClick(filter.id)}
          />
        ))}
      </div>

      <div
        style={{
          marginTop: '32px',
          paddingTop: '32px',
          borderTop: '1px solid #262626',
        }}
      >
        <h4
          className="text-sm font-bold uppercase tracking-wider"
          style={{
            color: '#737373',
            marginBottom: '16px',
            letterSpacing: '0.1em',
          }}
        >
          My Stats
        </h4>

        <div className="space-y-3">
          <StatRow label="Streak" value="🔥 12" />
          <StatRow label="Points" value="847" />
          <StatRow label="Rank" value="#234" />
        </div>
      </div>
    </div>
  );
}

function FilterButton({ label, active, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        padding: '12px 16px',
        border: active ? '2px solid #ffffff' : '1px solid #262626',
        backgroundColor: active ? 'rgba(255,255,255,0.1)' : 'transparent',
        color: active || isHovered ? '#ffffff' : '#a3a3a3',
        fontSize: '14px',
        fontWeight: active ? 'bold' : 'normal',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      {label}
    </button>
  );
}

function StatRow({ label, value }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm" style={{ color: '#a3a3a3' }}>
        {label}
      </span>
      <span className="text-lg font-bold" style={{ color: '#ffffff' }}>
        {value}
      </span>
    </div>
  );
}