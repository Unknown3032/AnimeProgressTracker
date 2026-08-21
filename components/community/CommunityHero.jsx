'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CommunityHero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const activityRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Left content slides in
      gsap.fromTo(
        leftRef.current.children,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 0.3,
        }
      );

      // Right activity feed stagger in
      gsap.fromTo(
        activityRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power4.out',
          delay: 0.6,
        }
      );

      // Image parallax
      gsap.to(imageRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const recentActivity = [
    { user: 'Sarah', action: 'achieved 30-day streak', time: '2m ago', icon: '🔥' },
    { user: 'Marcus', action: 'asked a question', time: '5m ago', icon: '❓' },
    { user: 'Alex', action: 'shared daily progress', time: '8m ago', icon: '📊' },
    { user: 'Maya', action: 'unlocked achievement', time: '12m ago', icon: '🏆' },
    { user: 'Jordan', action: 'joined the community', time: '15m ago', icon: '👋' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
      }}
    >
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          ref={imageRef}
          style={{
            position: 'absolute',
            top: '-10%',
            left: 0,
            width: '100%',
            height: '120%',
            willChange: 'transform',
          }}
        >
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_2t/22972.jpg"
            alt="Community Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'grayscale(100%)',
              opacity: 0.08,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex items-center"
        style={{
          minHeight: '100vh',
          padding: '120px 32px 80px',
        }}
      >
        <div className="max-w-screen-2xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Main Content */}
            <div ref={leftRef}>
              
              <div
                style={{
                  width: '60px',
                  height: '2px',
                  backgroundColor: '#ffffff',
                  marginBottom: '32px',
                }}
              />

              <div style={{ marginBottom: '24px' }}>
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{
                    color: '#737373',
                    letterSpacing: '0.25em',
                  }}
                >
                  Community Space
                </span>
              </div>

              <h1
                className="font-bold"
                style={{
                  fontSize: 'clamp(3rem, 7vw, 6rem)',
                  color: '#ffffff',
                  lineHeight: '1.05',
                  letterSpacing: '-0.04em',
                  marginBottom: '32px',
                }}
              >
                Share Your
                <br />
                Journey.
                <br />
                <span
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '2px #ffffff',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Grow Together.
                </span>
              </h1>

              <p
                className="text-lg md:text-xl"
                style={{
                  color: '#a3a3a3',
                  lineHeight: '1.8',
                  maxWidth: '550px',
                  marginBottom: '48px',
                }}
              >
                This is where progress happens. Ask questions, celebrate wins, 
                and find support from people who understand the journey.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: '#ffffff', marginBottom: '4px' }}
                  >
                    100K+
                  </div>
                  <div
                    className="text-xs uppercase tracking-wider"
                    style={{ color: '#737373' }}
                  >
                    Members
                  </div>
                </div>
                <div>
                  <div
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: '#ffffff', marginBottom: '4px' }}
                  >
                    24/7
                  </div>
                  <div
                    className="text-xs uppercase tracking-wider"
                    style={{ color: '#737373' }}
                  >
                    Active
                  </div>
                </div>
                <div>
                  <div
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: '#ffffff', marginBottom: '4px' }}
                  >
                    500K+
                  </div>
                  <div
                    className="text-xs uppercase tracking-wider"
                    style={{ color: '#737373' }}
                  >
                    Posts
                  </div>
                </div>
              </div>

            </div>

            {/* Right - Live Activity Feed */}
            <div>
              
              <div
                style={{
                  border: '2px solid #ffffff',
                  padding: '40px',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                }}
              >
                {/* Header */}
                <div style={{ marginBottom: '32px' }}>
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: '#ffffff' }}
                    >
                      Live Activity
                    </h3>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#ffffff',
                        borderRadius: '50%',
                        animation: 'pulse 2s infinite',
                      }}
                    />
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: '#737373', marginTop: '4px' }}
                  >
                    What's happening right now
                  </p>
                </div>

                {/* Activity Items */}
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      ref={(el) => (activityRef.current[index] = el)}
                      style={{
                        padding: '16px',
                        border: '1px solid #262626',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      {/* Icon */}
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          border: '1px solid #ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '20px',
                          flexShrink: 0,
                        }}
                      >
                        {activity.icon}
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p
                          className="text-sm font-medium"
                          style={{ color: '#ffffff', marginBottom: '2px' }}
                        >
                          <strong>{activity.user}</strong> {activity.action}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: '#737373' }}
                        >
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div
                  style={{
                    marginTop: '24px',
                    paddingTop: '24px',
                    borderTop: '1px solid #262626',
                    textAlign: 'center',
                  }}
                >
                  <p
                    className="text-sm font-medium"
                    style={{ color: '#a3a3a3' }}
                  >
                    Join the conversation below ↓
                  </p>
                </div>

                {/* Corner Decorations */}
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    width: '40px',
                    height: '40px',
                    borderTop: '3px solid #ffffff',
                    borderLeft: '3px solid #ffffff',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    width: '40px',
                    height: '40px',
                    borderBottom: '3px solid #ffffff',
                    borderRight: '3px solid #ffffff',
                  }}
                />
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Add pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>

      {/* Bottom Border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: '#262626' }}
      />

    </section>
  );
}