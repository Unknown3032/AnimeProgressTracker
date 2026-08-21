'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CommunityStats() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headerRef = useRef(null);
  const statsRef = useRef([]);
  const [counts, setCounts] = useState([0, 0, 0]);

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

      // Stats cards animation
      statsRef.current.forEach((stat, index) => {
        gsap.fromTo(
          stat,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: 0.3 + index * 0.15,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            },
          }
        );
      });

      // Number counter animation
      const targetNumbers = [100, 1000, 50];
      const counters = { num1: 0, num2: 0, num3: 0 };

      gsap.to(counters, {
        num1: targetNumbers[0],
        num2: targetNumbers[1],
        num3: targetNumbers[2],
        duration: 2,
        delay: 0.8,
        ease: 'power2.out',
        onUpdate: () => {
          setCounts([
            Math.floor(counters.num1),
            Math.floor(counters.num2),
            Math.floor(counters.num3),
          ]);
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      // Image parallax
      gsap.to(imageRef.current, {
        y: -80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      value: counts[0],
      suffix: 'K+',
      label: 'Active Members',
      description: 'Growing every single day',
    },
    {
      value: counts[1],
      suffix: 'K+',
      label: 'Goals Achieved',
      description: 'Dreams turned into reality',
    },
    {
      value: counts[2],
      suffix: 'K+',
      label: 'Daily Check-ins',
      description: 'Consistent action every day',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#000000',
      }}
    >
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          ref={imageRef}
          style={{
            position: 'absolute',
            top: '-15%',
            left: 0,
            width: '100%',
            height: '130%',
            willChange: 'transform',
          }}
        >
          <img
            src="./Aboutcommunity.jpg"
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
        className="relative z-10 w-full"
        style={{
          padding: '120px 32px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
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
                Our Impact
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
              By The Numbers
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
              These aren't just statistics. They're real people making 
              real progress every single day.
            </p>

          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={(el) => (statsRef.current[index] = el)}
                style={{
                  padding: '64px 48px',
                  border: '2px solid #ffffff',
                  textAlign: 'center',
                  position: 'relative',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Number */}
                <div
                  className="font-black"
                  style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    color: '#ffffff',
                    lineHeight: '1',
                    letterSpacing: '-0.03em',
                    marginBottom: '16px',
                  }}
                >
                  {stat.value}{stat.suffix}
                </div>

                {/* Label */}
                <h3
                  className="text-xl md:text-2xl font-bold"
                  style={{
                    color: '#ffffff',
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {stat.label}
                </h3>

                {/* Description */}
                <p
                  className="text-base"
                  style={{
                    color: '#737373',
                    lineHeight: '1.6',
                  }}
                >
                  {stat.description}
                </p>

                {/* Corner Accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '40px',
                    height: '40px',
                    borderTop: '3px solid #ffffff',
                    borderRight: '3px solid #ffffff',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    width: '40px',
                    height: '40px',
                    borderBottom: '3px solid #ffffff',
                    borderLeft: '3px solid #ffffff',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div
            className="text-center"
            style={{
              marginTop: '80px',
              paddingTop: '60px',
              borderTop: '1px solid #262626',
            }}
          >
            <p
              className="text-2xl md:text-3xl font-bold"
              style={{
                color: '#ffffff',
                letterSpacing: '-0.01em',
                lineHeight: '1.4',
              }}
            >
              And we're just getting started.
              <br />
              <span style={{ color: '#737373' }}>
                Join us and become part of the story.
              </span>
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: '#262626' }}
      />

    </section>
  );
}