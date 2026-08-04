'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../Ui/Button';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const lineRef = useRef(null);
  const cardRef = useRef(null);
  const progressBarsRef = useRef([]);
  const levelBarRef = useRef(null);
  const floatingRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(lineRef.current, { scaleX: 0 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 30 });
      gsap.set(titleRef.current.children, { opacity: 0, y: 80 });
      gsap.set(descriptionRef.current, { opacity: 0, y: 40 });
      gsap.set(ctaRef.current.children, { opacity: 0, y: 30 });
      gsap.set(cardRef.current, { opacity: 0, x: 60, rotationY: 15 });

      // Main timeline
      const tl = gsap.timeline({ 
        defaults: { 
          ease: 'power4.out',
        } 
      });

      tl.to(lineRef.current, {
        scaleX: 1,
        duration: 1.6,
        ease: 'power3.inOut',
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.4,
      }, '-=1.2')
      .to(titleRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 1.8,
        stagger: 0.2,
      }, '-=1')
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.4,
      }, '-=1.2')
      .to(ctaRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
      }, '-=0.8')
      .to(cardRef.current, {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1.6,
        ease: 'power3.out',
      }, '-=1.4');

      // Animate level bar
      setTimeout(() => {
        if (levelBarRef.current) {
          gsap.to(levelBarRef.current, {
            width: '73%',
            duration: 2,
            ease: 'power3.out',
          });
        }
      }, 2200);

      // Animate progress bars
      setTimeout(() => {
        progressBarsRef.current.forEach((bar, index) => {
          const width = bar.getAttribute('data-width');
          gsap.to(bar, {
            width: width + '%',
            duration: 2,
            delay: index * 0.15,
            ease: 'power3.out',
          });
        });
      }, 2400);

      // Floating elements animation
      floatingRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: -15,
            duration: 2 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3,
          });
        }
      });

      // Parallax effects
      gsap.to(imageRef.current, {
        y: 200,
        scale: 1.05,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
      });

      gsap.to([titleRef.current, descriptionRef.current, ctaRef.current], {
        opacity: 0,
        y: -80,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '40% top',
          scrub: 2,
        },
      });

      gsap.to(cardRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const progressData = [
    { label: 'Physical Training', value: 85, points: 850, icon: '💪' },
    { label: 'Mental Focus', value: 72, points: 720, icon: '🧠' },
    { label: 'Knowledge Quest', value: 90, points: 900, icon: '📚' },
    { label: 'Inner Peace', value: 65, points: 650, icon: '🧘' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          ref={imageRef}
          className="absolute inset-0"
          style={{
            width: '100%',
            height: '100%',
            willChange: 'transform',
          }}
        >
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_2t/24474.jpg"
            alt="Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.5) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div 
        className="relative z-10 w-full" 
        style={{ 
          padding: '0 32px',
          marginTop: '96px'
        }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <div className="max-w-3xl">
              <div 
                ref={lineRef}
                style={{
                  width: '80px',
                  height: '2px',
                  backgroundColor: '#ffffff',
                  marginBottom: '40px',
                  transformOrigin: 'left',
                }}
              />

              <div ref={subtitleRef} style={{ marginBottom: '32px' }}>
                <span
                  className="text-sm font-medium tracking-widest uppercase"
                  style={{
                    color: '#ffffff',
                    letterSpacing: '0.3em',
                  }}
                >
                  Daily Growth Tracker
                </span>
              </div>

              <h1
                ref={titleRef}
                className="font-bold leading-none"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 8rem)',
                  color: '#ffffff',
                  marginBottom: '48px',
                  letterSpacing: '-0.03em',
                  lineHeight: '0.95',
                }}
              >
                <div>Build</div>
                <div>Better</div>
                <div 
                  style={{ 
                    color: 'transparent',
                    WebkitTextStroke: '2px #ffffff',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Habits
                </div>
              </h1>

              <p
                ref={descriptionRef}
                className="text-lg md:text-xl"
                style={{
                  color: '#d4d4d4',
                  maxWidth: '550px',
                  marginBottom: '56px',
                  lineHeight: '1.8',
                }}
              >
                Track your progress, achieve your goals, and transform your daily routine 
                into meaningful growth.
              </p>

              <div ref={ctaRef} className="flex flex-wrap gap-6">
                <Button size="default" variant="primary">
                  Get Started
                </Button>
                <Button size="default" variant="secondary">
                  View Demo
                </Button>
              </div>
            </div>

            {/* Right Content - Anime Stats Card */}
            <div 
              ref={cardRef}
              className="relative"
              style={{
                perspective: '1000px',
              }}
            >
              {/* Main Card */}
              <div
                style={{
                  backgroundColor: '#000000',
                  border: '2px solid #ffffff',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative Corner Lines */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '60px',
                  height: '60px',
                  borderTop: '4px solid #ffffff',
                  borderLeft: '4px solid #ffffff',
                }} />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '60px',
                  height: '60px',
                  borderTop: '4px solid #ffffff',
                  borderRight: '4px solid #ffffff',
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '60px',
                  height: '60px',
                  borderBottom: '4px solid #ffffff',
                  borderLeft: '4px solid #ffffff',
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '60px',
                  height: '60px',
                  borderBottom: '4px solid #ffffff',
                  borderRight: '4px solid #ffffff',
                }} />

                {/* Header */}
                <div style={{
                  backgroundColor: '#ffffff',
                  padding: '24px 40px',
                  borderBottom: '2px solid #ffffff',
                }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: '#737373', marginBottom: '4px', letterSpacing: '0.2em' }}
                      >
                        Player Stats
                      </div>
                      <div
                        className="text-2xl font-bold"
                        style={{ color: '#000000' }}
                      >
                        LEVEL 47
                      </div>
                    </div>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        backgroundColor: '#000000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '28px',
                        border: '2px solid #000000',
                      }}
                    >
                      ⚡
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '40px' }}>
                  
                  {/* EXP Bar */}
                  <div style={{ marginBottom: '40px' }}>
                    <div className="flex justify-between items-baseline" style={{ marginBottom: '12px' }}>
                      <span
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: '#737373', letterSpacing: '0.2em' }}
                      >
                        Experience Points
                      </span>
                      <span
                        className="text-sm font-bold"
                        style={{ color: '#ffffff' }}
                      >
                        7,340 / 10,000 XP
                      </span>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '8px',
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #404040',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        ref={levelBarRef}
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          height: '100%',
                          width: '0%',
                          backgroundColor: '#ffffff',
                          transition: 'width 2s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                    </div>
                    <div
                      className="text-xs font-medium"
                      style={{ color: '#737373', marginTop: '8px' }}
                    >
                      2,660 XP to next level
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div style={{ marginBottom: '40px' }}>
                    <div
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: '#737373', marginBottom: '24px', letterSpacing: '0.2em' }}
                    >
                      Skill Attributes
                    </div>
                    <div className="space-y-5">
                      {progressData.map((item, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center" style={{ marginBottom: '10px' }}>
                            <div className="flex items-center gap-3">
                              <span style={{ fontSize: '20px' }}>{item.icon}</span>
                              <span
                                className="text-base font-bold"
                                style={{ color: '#ffffff' }}
                              >
                                {item.label}
                              </span>
                            </div>
                            <div className="flex items-baseline gap-2">
                              <span
                                className="text-lg font-bold"
                                style={{ color: '#ffffff' }}
                              >
                                {item.points}
                              </span>
                              <span
                                className="text-xs font-medium"
                                style={{ color: '#737373' }}
                              >
                                / 1000
                              </span>
                            </div>
                          </div>
                          <div
                            style={{
                              width: '100%',
                              height: '6px',
                              backgroundColor: '#1a1a1a',
                              border: '1px solid #404040',
                              position: 'relative',
                              overflow: 'hidden',
                            }}
                          >
                            <div
                              ref={(el) => (progressBarsRef.current[index] = el)}
                              data-width={item.value}
                              style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                height: '100%',
                                width: '0%',
                                backgroundColor: '#ffffff',
                                transition: 'width 2s cubic-bezier(0.4, 0, 0.2, 1)',
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Stats */}
                  <div
                    style={{
                      borderTop: '1px solid #404040',
                      paddingTop: '32px',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '24px',
                    }}
                  >
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: '#737373', marginBottom: '8px', letterSpacing: '0.2em' }}
                      >
                        Current Streak
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span
                          className="text-4xl font-bold"
                          style={{ color: '#ffffff' }}
                        >
                          12
                        </span>
                        <span
                          className="text-lg font-medium"
                          style={{ color: '#737373' }}
                        >
                          days
                        </span>
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: '#737373', marginBottom: '8px', letterSpacing: '0.2em' }}
                      >
                        Total Score
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span
                          className="text-4xl font-bold"
                          style={{ color: '#ffffff' }}
                        >
                          3,120
                        </span>
                        <span
                          className="text-lg font-medium"
                          style={{ color: '#737373' }}
                        >
                          pts
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Achievement Badge */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '16px 40px',
                    borderTop: '2px solid #ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <span style={{ fontSize: '24px' }}>🏆</span>
                  <div>
                    <div
                      className="text-xs font-bold uppercase"
                      style={{ color: '#737373' }}
                    >
                      Recent Achievement
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: '#000000' }}
                    >
                      "Consistency Master" Unlocked
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div
                ref={(el) => (floatingRef.current[0] = el)}
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#000000',
                  border: '2px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  zIndex: 10,
                }}
              >
                ⭐
              </div>

              <div
                ref={(el) => (floatingRef.current[1] = el)}
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-20px',
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#000000',
                  border: '2px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  zIndex: 10,
                }}
              >
                🎯
              </div>

            </div>

          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: '#262626' }}
      />
    </section>
  );
}