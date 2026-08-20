'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Left content animation
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Right content animation
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

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

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '160px 32px',
        backgroundColor: '#000000',
        borderTop: '1px solid #262626',
      }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left - Image */}
          <div ref={leftRef} className="relative overflow-hidden">
            <div
              style={{
                aspectRatio: '3/4',
                border: '1px solid #262626',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div ref={imageRef} className="absolute inset-0">
                <img
                  src="https://4kwallpapers.com/images/walls/thumbs_2t/24472.png"
                  alt="Our Beginning"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(100%)',
                  }}
                />
              </div>
              
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 100%)',
                }}
              />

              {/* Corner Accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '30px',
                  left: '30px',
                  width: '60px',
                  height: '60px',
                  borderTop: '3px solid #ffffff',
                  borderLeft: '3px solid #ffffff',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  right: '30px',
                  width: '60px',
                  height: '60px',
                  borderBottom: '3px solid #ffffff',
                  borderRight: '3px solid #ffffff',
                }}
              />
            </div>
          </div>

          {/* Right - Content */}
          <div ref={rightRef}>
            <div
              style={{
                width: '60px',
                height: '3px',
                backgroundColor: '#ffffff',
                marginBottom: '32px',
              }}
            />

            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{
                color: '#ffffff',
                lineHeight: '1.15',
                letterSpacing: '-0.02em',
              }}
            >
              It Started With
              <br />
              Instagram
            </h2>

            <div className="space-y-6 text-lg" style={{ color: '#a3a3a3', lineHeight: '1.8' }}>
              <p>
                <strong style={{ color: '#ffffff' }}>January 2023.</strong> We posted our first motivational video. 
                It was simple—just a message about showing up every day, even when you don't feel like it.
              </p>

              <p>
                The response shocked us. Hundreds of messages from people saying "I needed this today." 
                They weren't just watching; they were <strong style={{ color: '#ffffff' }}>sharing their own journeys</strong>.
              </p>

              <p>
                As our community grew to thousands, we saw a pattern: everyone wanted to grow, 
                but tracking progress felt lonely. Comments became filled with people asking,
                <em> "How do I stay consistent?"</em>
              </p>

              <p>
                That's when it hit us. Our community needed more than motivation—they needed 
                <strong style={{ color: '#ffffff' }}> a tool to track their growth and connect with others doing the same</strong>.
              </p>

              <p style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: '600' }}>
                So we built this platform. Not as a business. As a home for our community.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}