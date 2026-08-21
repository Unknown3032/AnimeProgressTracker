'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PostCard from './PostCard';

gsap.registerPlugin(ScrollTrigger);

export default function CommunityFeed({ initialPosts }) {
  const feedRef = useRef(null);
  const postsRef = useRef([]);
  const [posts, setPosts] = useState(initialPosts);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Animate posts on load
      postsRef.current.forEach((post, index) => {
        if (post) {
          gsap.fromTo(
            post,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: post,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });

    }, feedRef);

    return () => ctx.revert();
  }, [posts]);

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    if (filter === 'all') return true;
    if (filter === 'wins') return post.type === 'win';
    if (filter === 'questions') return post.type === 'question';
    if (filter === 'achievements') return post.type === 'achievement';
    return true;
  });

  return (
    <div ref={feedRef}>
      
      {/* Feed Header */}
      <FeedHeader 
        count={filteredPosts.length} 
        currentFilter={filter}
        onFilterChange={setFilter}
      />

      {/* Posts List */}
      <div>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => (postsRef.current[index] = el)}
            >
              <PostCard post={post} />
            </div>
          ))
        ) : (
          <EmptyState />
        )}
      </div>

      {/* Load More Button */}
      {filteredPosts.length > 0 && <LoadMoreButton />}

    </div>
  );
}

function FeedHeader({ count, currentFilter, onFilterChange }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <div className="flex items-center justify-between flex-wrap gap-4">
        
        {/* Title */}
        <div>
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{
              color: '#ffffff',
              marginBottom: '8px',
            }}
          >
            Community Feed
          </h2>
          <p
            className="text-sm"
            style={{ color: '#737373' }}
          >
            {count} {count === 1 ? 'post' : 'posts'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="hidden md:flex items-center gap-3">
          {['all', 'wins', 'questions', 'achievements'].map((filterType) => (
            <FilterTab
              key={filterType}
              label={filterType}
              active={currentFilter === filterType}
              onClick={() => onFilterChange(filterType)}
            />
          ))}
        </div>

      </div>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          backgroundColor: '#262626',
          marginTop: '24px',
        }}
      />
    </div>
  );
}

function FilterTab({ label, active, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '8px 16px',
        border: active ? '2px solid #ffffff' : '1px solid #262626',
        backgroundColor: active ? 'rgba(255,255,255,0.1)' : 'transparent',
        color: active || isHovered ? '#ffffff' : '#737373',
        fontSize: '14px',
        fontWeight: active ? 'bold' : 'normal',
        textTransform: 'capitalize',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      {label}
    </button>
  );
}

function EmptyState() {
  return (
    <div
      style={{
        padding: '80px 32px',
        textAlign: 'center',
        border: '1px solid #262626',
      }}
    >
      <p
        className="text-xl"
        style={{ color: '#737373' }}
      >
        No posts found for this filter.
      </p>
    </div>
  );
}

function LoadMoreButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ marginTop: '32px', textAlign: 'center' }}>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          padding: '16px 48px',
          border: '2px solid #ffffff',
          backgroundColor: isHovered ? '#ffffff' : 'transparent',
          color: isHovered ? '#000000' : '#ffffff',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
      >
        Load More Posts
      </button>
    </div>
  );
}