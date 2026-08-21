'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TheWhy() {
  const sectionRef = useRef(null);
  const topImageRef = useRef(null);
  const bottomImageRef = useRef(null);
  const topContentRef = useRef(null);
  const bottomContentRef = useRef(null);
  const thoughtsRef = useRef([]);
  const answersRef = useRef([]);
  const middleTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Top section animation
      gsap.fromTo(
        topContentRef.current.children,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: topContentRef.current,
            start: 'top 75%',
          },
        }
      );

      // Bottom section animation
      gsap.fromTo(
        bottomContentRef.current.children,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: bottomContentRef.current,
            start: 'top 75%',
          },
        }
      );

      // Thoughts stagger in with parallax
      thoughtsRef.current.forEach((thought, index) => {
        gsap.fromTo(
          thought,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: thought,
              start: 'top 80%',
            },
          }
        );

        // Individual card parallax
        gsap.to(thought, {
          y: -30,
          scrollTrigger: {
            trigger: thought,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      });

      // Answers stagger in with parallax
      answersRef.current.forEach((answer, index) => {
        gsap.fromTo(
          answer,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: answer,
              start: 'top 80%',
            },
          }
        );

        // Individual card parallax
        gsap.to(answer, {
          y: -30,
          scrollTrigger: {
            trigger: answer,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      });

      // Middle text parallax and fade
      gsap.to(middleTextRef.current, {
        y: -50,
        opacity: 0.7,
        scrollTrigger: {
          trigger: middleTextRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Top image parallax (stronger)
      gsap.to(topImageRef.current, {
        y: -120,
        scale: 1.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'center top',
          scrub: 2,
        },
      });

      // Bottom image parallax (stronger)
      gsap.to(bottomImageRef.current, {
        y: -100,
        scale: 1.05,
        scrollTrigger: {
          trigger: bottomImageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });

      // Content sections parallax (slower than background)
      gsap.to(topContentRef.current, {
        y: -40,
        scrollTrigger: {
          trigger: topContentRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(bottomContentRef.current, {
        y: -40,
        scrollTrigger: {
          trigger: bottomContentRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const thoughts = [
    { text: 'Why do I always start strong but quit within a week?', emotion: 'Frustrated' },
    { text: 'Everyone else seems to have it figured out... except me.', emotion: 'Lost' },
    { text: "I want to change, but I don't know where to begin.', emotion: 'Confused'" },
    { text: "I'm tired of feeling like I'm going nowhere.', emotion: 'Stuck'" },
  ];

  const solutions = [
    { title: 'Simple Tracking', description: 'An intuitive system to log daily wins and measure growth over time.' },
    { title: 'Real Community', description: 'A space where people support each other, not compete with each other.' },
    { title: 'Daily Accountability', description: 'Gentle reminders and streaks that keep you showing up every day.' },
    { title: 'Clear Roadmap', description: 'Structured goals and milestones so you always know your next step.' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#000000',
      }}
    >
      
      {/* ======================== */}
      {/* TOP HALF - THE PROBLEM   */}
      {/* ======================== */}
      <div className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            ref={topImageRef}
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
              src="Whyimg.jpg"
              alt="The Problem"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'grayscale(100%)',
                opacity: 0.25,
              }}
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{
            minHeight: '100vh',
            padding: '120px 32px',
          }}
        >
          <div style={{ width: '100%', maxWidth: '1200px' }}>
            <div ref={topContentRef} className="text-center">
              
              {/* Section Label */}
              <div style={{ marginBottom: '32px' }}>
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{
                    color: '#737373',
                    letterSpacing: '0.25em',
                  }}
                >
                  What We Heard
                </span>
              </div>

              {/* Heading */}
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
                The Same Thoughts,
                <br />
                Over and Over
              </h2>

              {/* Subheading */}
              <p
                className="text-xl md:text-2xl"
                style={{
                  color: '#a3a3a3',
                  lineHeight: '1.7',
                  maxWidth: '700px',
                  margin: '0 auto 80px',
                }}
              >
                Our community shared their struggles. These weren't just questions—
                they were the thoughts keeping people stuck.
              </p>

              {/* Thoughts Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {thoughts.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => (thoughtsRef.current[index] = el)}
                    style={{
                      padding: '48px 40px',
                      border: '1px solid #262626',
                      position: 'relative',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(10px)',
                      textAlign: 'left',
                    }}
                  >
                    {/* Emotion Label */}
                    <div
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{
                        color: '#737373',
                        letterSpacing: '0.15em',
                        marginBottom: '24px',
                      }}
                    >
                      {item.emotion}
                    </div>

                    {/* Thought Text */}
                    <p
                      className="text-xl md:text-2xl font-medium"
                      style={{
                        color: '#d4d4d4',
                        lineHeight: '1.5',
                        fontStyle: 'italic',
                      }}
                    >
                      "{item.text}"
                    </p>

                    {/* Bottom Accent */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '60px',
                        height: '3px',
                        backgroundColor: '#ffffff',
                      }}
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: '#262626' }}
        />
      </div>

      {/* ======================== */}
      {/* MIDDLE - THE REALIZATION */}
      {/* ======================== */}
      <div
        ref={middleTextRef}
        style={{
          padding: '140px 32px',
          borderTop: '1px solid #262626',
          borderBottom: '1px solid #262626',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p
            className="font-bold"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: '#ffffff',
              lineHeight: '1.3',
              letterSpacing: '-0.02em',
            }}
          >
            Motivation fades in days.
            <br />
            <span style={{ color: '#737373' }}>What people needed was</span>
            <br />
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px #ffffff',
                WebkitTextFillColor: 'transparent',
              }}
            >
              a system that lasts.
            </span>
          </p>
        </div>
      </div>

      {/* ========================= */}
      {/* BOTTOM HALF - THE SOLUTION */}
      {/* ========================= */}
      <div className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            ref={bottomImageRef}
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
              src="https://4kwallpapers.com/images/walls/thumbs_2t/22577.png"
              alt="The Solution"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'grayscale(100%)',
                opacity: 0.25,
              }}
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{
            minHeight: '100vh',
            padding: '120px 32px',
          }}
        >
          <div style={{ width: '100%', maxWidth: '1200px' }}>
            <div ref={bottomContentRef} className="text-center">
              
              {/* Section Label */}
              <div style={{ marginBottom: '32px' }}>
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{
                    color: '#737373',
                    letterSpacing: '0.25em',
                  }}
                >
                  What We Built
                </span>
              </div>

              {/* Heading */}
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
                So We Built
                <br />
                <span
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '2px #ffffff',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  The Answer
                </span>
              </h2>

              {/* Subheading */}
              <p
                className="text-xl md:text-2xl"
                style={{
                  color: '#a3a3a3',
                  lineHeight: '1.7',
                  maxWidth: '700px',
                  margin: '0 auto 80px',
                }}
              >
                We stopped posting for a month and started building. 
                A platform designed around everything our community needed.
              </p>

              {/* Solution Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {solutions.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => (answersRef.current[index] = el)}
                    style={{
                      padding: '48px 40px',
                      border: '2px solid #ffffff',
                      position: 'relative',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(10px)',
                      textAlign: 'left',
                    }}
                  >
                    {/* Number */}
                    <div
                      className="text-6xl font-black"
                      style={{
                        color: '#262626',
                        marginBottom: '20px',
                      }}
                    >
                      0{index + 1}
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
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-lg"
                      style={{
                        color: '#a3a3a3',
                        lineHeight: '1.7',
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Top Accent */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '60px',
                        height: '3px',
                        backgroundColor: '#ffffff',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Final Statement */}
              <div
                style={{
                  marginTop: '80px',
                  paddingTop: '60px',
                  borderTop: '1px solid #262626',
                  maxWidth: '800px',
                  margin: '80px auto 0',
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
                  Built in 6 months. Free forever.
                  <br />
                  <span style={{ color: '#737373' }}>
                    Made by the community, for the community.
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: '#262626' }}
        />
      </div>

    </section>
  );
}