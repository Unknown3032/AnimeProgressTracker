'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  const milestonesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Header animation
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Timeline line animation
      gsap.fromTo(
        timelineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.6,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
          },
        }
      );

      // Milestones stagger in
      milestonesRef.current.forEach((milestone, index) => {
        gsap.fromTo(
          milestone,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: 0.3 + index * 0.15,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: milestonesRef.current[0],
              start: 'top 75%',
            },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const milestones = [
    {
      date: 'Jan 2023',
      title: 'First Post',
      description: 'Started sharing daily motivation. Got 127 views and felt on top of the world.',
    },
    {
      date: 'Mar 2023',
      title: '10K Members',
      description: 'Community exploded. DMs flooded with stories of people changing their lives.',
    },
    {
      date: 'Jun 2023',
      title: 'The Idea',
      description: "Realized motivation isn't enough. People needed a system to track their growth.",
    },
    {
      date: 'Oct 2023',
      title: 'Building',
      description: 'Stopped posting. Started coding. Involved the community in every decision.',
    },
    {
      date: 'Jan 2024',
      title: 'Launch',
      description: 'Released the platform. Free forever. 100K+ users in the first month.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '160px 32px',
        backgroundColor: '#000000',
        borderTop: '1px solid #262626',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div ref={headerRef} className="text-center" style={{ marginBottom: '100px' }}>
          
          <div style={{ marginBottom: '32px' }}>
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{
                color: '#737373',
                letterSpacing: '0.25em',
              }}
            >
              Our Journey
            </span>
          </div>

          <h2
            className="font-bold"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: '#ffffff',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}
          >
            From Zero To
            <br />
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px #ffffff',
                WebkitTextFillColor: 'transparent',
              }}
            >
              A Movement
            </span>
          </h2>

          <p
            className="text-xl md:text-2xl"
            style={{
              color: '#a3a3a3',
              lineHeight: '1.7',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            One year. Five major milestones. Countless lives changed.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Timeline Line */}
          <div
            ref={timelineRef}
            style={{
              position: 'absolute',
              top: '30px',
              left: '60px',
              right: '60px',
              height: '2px',
              backgroundColor: '#262626',
              transformOrigin: 'left',
            }}
          />

          {/* Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                ref={(el) => (milestonesRef.current[index] = el)}
                className="relative"
              >
                {/* Dot */}
                <div className="flex justify-center" style={{ marginBottom: '32px' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      border: '3px solid #ffffff',
                      borderRadius: '50%',
                      backgroundColor: '#000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '24px',
                        fontWeight: '900',
                        color: '#ffffff',
                      }}
                    >
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  style={{
                    padding: '32px 24px',
                    border: '1px solid #262626',
                    textAlign: 'center',
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Date */}
                  <div
                    className="text-sm font-bold tracking-widest uppercase"
                    style={{
                      color: '#737373',
                      letterSpacing: '0.15em',
                      marginBottom: '16px',
                    }}
                  >
                    {milestone.date}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl md:text-3xl font-bold"
                    style={{
                      color: '#ffffff',
                      letterSpacing: '-0.01em',
                      marginBottom: '16px',
                    }}
                  >
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-base"
                    style={{
                      color: '#a3a3a3',
                      lineHeight: '1.6',
                    }}
                  >
                    {milestone.description}
                  </p>
                </div>

                {/* Arrow (except last item) */}
                {index < milestones.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 -right-4 text-2xl"
                    style={{ color: '#262626' }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}