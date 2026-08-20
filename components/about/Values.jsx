'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../Ui/Button';

gsap.registerPlugin(ScrollTrigger);

export default function Values() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);

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

      // Cards stagger in
      cardsRef.current.forEach((card, index) => {
        const direction = index % 2 === 0 ? -60 : 60;
        
        gsap.fromTo(
          card,
          { opacity: 0, x: direction },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            },
          }
        );
      });

      // CTA animation
      gsap.fromTo(
        ctaRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      number: '01',
      title: 'Always Free',
      description: "No paywalls. No premium tiers. No hidden fees. Growth shouldn't cost money. It never will.",
    },
    {
      number: '02',
      title: 'Community First',
      description: 'Every feature we build, every decision we make—it all starts with listening to you.',
    },
    {
      number: '03',
      title: 'No Judgment',
      description: 'Everyone starts somewhere. We celebrate every step forward, no matter how small.',
    },
    {
      number: '04',
      title: 'Total Transparency',
      description: 'We share our wins, our failures, and our roadmap openly. You deserve to know everything.',
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
              Our Values
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
            What We
            <br />
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px #ffffff',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Stand For
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
            These aren't just words on a page. They're promises we keep 
            to our community every single day.
          </p>

        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: '#262626', marginBottom: '100px' }}>
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                padding: '64px 48px',
                backgroundColor: '#000000',
                position: 'relative',
              }}
            >
              {/* Number */}
              <div
                className="text-7xl font-black"
                style={{
                  color: '#262626',
                  marginBottom: '32px',
                  lineHeight: '1',
                }}
              >
                {value.number}
              </div>

              {/* Title */}
              <h3
                className="text-3xl md:text-4xl font-bold"
                style={{
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  marginBottom: '20px',
                }}
              >
                {value.title}
              </h3>

              {/* Description */}
              <p
                className="text-lg md:text-xl"
                style={{
                  color: '#a3a3a3',
                  lineHeight: '1.7',
                }}
              >
                {value.description}
              </p>

              {/* Corner Accent */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  right: '30px',
                  width: '50px',
                  height: '50px',
                  borderBottom: '3px solid #ffffff',
                  borderRight: '3px solid #ffffff',
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="text-center">
          
          <div
            style={{
              width: '80px',
              height: '2px',
              backgroundColor: '#ffffff',
              margin: '0 auto 40px',
            }}
          />

          <h3
            className="text-3xl md:text-4xl font-bold"
            style={{
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '32px',
            }}
          >
            Ready To Join The Movement?
          </h3>

          <p
            className="text-xl"
            style={{
              color: '#a3a3a3',
              lineHeight: '1.7',
              maxWidth: '600px',
              margin: '0 auto 48px',
            }}
          >
            Thousands are already growing together. Your journey starts today.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <Button size="default" variant="primary">
              Start Growing Free
            </Button>
            <Button size="default" variant="secondary">
              Follow on Instagram
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}