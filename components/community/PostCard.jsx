'use client';

import { useState } from 'react';

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.interactions.likes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  // Render based on post type
  const renderPostContent = () => {
    switch (post.type) {
      case 'win':
        return <WinContent post={post} />;
      case 'question':
        return <QuestionContent post={post} />;
      case 'achievement':
        return <AchievementContent post={post} />;
      default:
        return <DefaultContent post={post} />;
    }
  };

  return (
    <article
      style={{
        padding: '32px',
        border: '1px solid #262626',
        backgroundColor: '#0a0a0a',
        marginBottom: '16px',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#404040')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#262626')}
    >
      {/* Header - User Info */}
      <div className="flex items-center justify-between" style={{ marginBottom: '20px' }}>
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            style={{
              width: '48px',
              height: '48px',
              border: '2px solid #ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              backgroundColor: '#000000',
            }}
          >
            {post.user.name.charAt(0)}
          </div>

          {/* User Details */}
          <div>
            <div
              className="text-base font-bold"
              style={{ color: '#ffffff', marginBottom: '2px' }}
            >
              {post.user.name}
            </div>
            <div
              className="text-sm"
              style={{ color: '#737373' }}
            >
              @{post.user.username} · {post.timestamp}
            </div>
          </div>
        </div>

        {/* User Streak Badge */}
        {post.user.streak && (
          <div
            style={{
              padding: '6px 12px',
              border: '1px solid #262626',
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#ffffff',
            }}
          >
            🔥 {post.user.streak} Day Streak
          </div>
        )}
      </div>

      {/* Post Content - Dynamic based on type */}
      {renderPostContent()}

      {/* Divider */}
      <div
        style={{
          height: '1px',
          backgroundColor: '#262626',
          margin: '24px 0',
        }}
      />

      {/* Interactions */}
      <div className="flex items-center gap-6">
        {/* Like Button */}
        <button
          onClick={handleLike}
          className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
          style={{
            color: liked ? '#ffffff' : '#737373',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: '8px 12px',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
          onMouseLeave={(e) => !liked && (e.currentTarget.style.color = '#737373')}
        >
          <span style={{ fontSize: '18px' }}>{liked ? '❤️' : '🤍'}</span>
          <span>{likes}</span>
        </button>

        {/* Comment Button */}
        <button
          className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
          style={{
            color: '#737373',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: '8px 12px',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#737373')}
        >
          <span style={{ fontSize: '18px' }}>💬</span>
          <span>{post.interactions.comments}</span>
        </button>

        {/* Share Button */}
        <button
          className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
          style={{
            color: '#737373',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: '8px 12px',
            marginLeft: 'auto',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#737373')}
        >
          <span style={{ fontSize: '18px' }}>🔗</span>
          <span>Share</span>
        </button>
      </div>
    </article>
  );
}

// Win Post Content
function WinContent({ post }) {
  return (
    <>
      {/* Post Text */}
      <p
        className="text-lg"
        style={{
          color: '#d4d4d4',
          lineHeight: '1.7',
          marginBottom: '24px',
        }}
      >
        {post.content}
      </p>

      {/* Progress Bars */}
      {post.stats && post.stats.length > 0 && (
        <div className="space-y-4">
          {post.stats.map((stat, index) => (
            <div key={index}>
              <div className="flex items-center justify-between" style={{ marginBottom: '8px' }}>
                <span
                  className="text-sm font-medium"
                  style={{ color: '#a3a3a3' }}
                >
                  {stat.icon} {stat.label}
                </span>
                <span
                  className="text-sm font-bold"
                  style={{ color: '#ffffff' }}
                >
                  {stat.value}%
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '6px',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #262626',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: `${stat.value}%`,
                    backgroundColor: '#ffffff',
                    transition: 'width 1s ease-out',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

// Question Post Content
function QuestionContent({ post }) {
  return (
    <div
      style={{
        padding: '24px',
        border: '2px solid #ffffff',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
    >
      <div
        className="text-xs font-bold uppercase tracking-wider"
        style={{
          color: '#737373',
          marginBottom: '12px',
          letterSpacing: '0.15em',
        }}
      >
        ❓ Question
      </div>
      <p
        className="text-xl font-medium"
        style={{
          color: '#ffffff',
          lineHeight: '1.6',
        }}
      >
        {post.content}
      </p>
      {post.interactions.comments > 0 && (
        <div
          className="text-sm font-medium"
          style={{
            color: '#a3a3a3',
            marginTop: '16px',
          }}
        >
          {post.interactions.comments} people answered
        </div>
      )}
    </div>
  );
}

// Achievement Post Content
function AchievementContent({ post }) {
  return (
    <div
      style={{
        padding: '32px',
        border: '2px solid #ffffff',
        backgroundColor: 'rgba(0,0,0,0.5)',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '64px', marginBottom: '16px' }}>
        {post.achievement.icon}
      </div>
      <div
        className="text-xs font-bold uppercase tracking-wider"
        style={{
          color: '#737373',
          marginBottom: '12px',
          letterSpacing: '0.15em',
        }}
      >
        🏆 Achievement Unlocked
      </div>
      <h3
        className="text-2xl font-bold"
        style={{
          color: '#ffffff',
          marginBottom: '12px',
        }}
      >
        {post.achievement.title}
      </h3>
      <p
        className="text-base"
        style={{
          color: '#a3a3a3',
          lineHeight: '1.6',
        }}
      >
        {post.achievement.description}
      </p>
    </div>
  );
}

// Default Post Content
function DefaultContent({ post }) {
  return (
    <p
      className="text-lg"
      style={{
        color: '#d4d4d4',
        lineHeight: '1.7',
      }}
    >
      {post.content}
    </p>
  );
}