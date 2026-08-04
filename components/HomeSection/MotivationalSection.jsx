'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MotivationalSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const numberRef = useRef(null);
  const textLinesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(numberRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(textLinesRef.current, { opacity: 0, x: -30 });
      gsap.set(contentRef.current, { opacity: 0 });

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(contentRef.current, {
        opacity: 1,
        duration: 0.8,
      })
      .to(numberRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.6,
        ease: 'power4.out',
      }, '-=0.4')
      .to(textLinesRef.current, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
      }, '-=1.2');

      // Image parallax
      gsap.to(imageRef.current, {
        y: 200,
        scale: 1.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });

      // Content parallax (moves slower)
      gsap.to(contentRef.current, {
        y: -80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
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
          className="absolute inset-0"
          style={{
            width: '100%',
            height: '120%',
            top: '-10%',
          }}
        >
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_2t/22972.jpg"
            alt="Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'grayscale(100%)',
              opacity: 0.15,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full h-full flex items-center"
        style={{
          minHeight: '100vh',
          padding: '120px 32px',
        }}
      >
        <div className="max-w-screen-2xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Side - Big Number */}
            <div className="lg:col-span-5">
              <div
                ref={numberRef}
                style={{
                  fontSize: 'clamp(8rem, 20vw, 24rem)',
                  fontWeight: '900',
                  lineHeight: '0.85',
                  color: 'transparent',
                  WebkitTextStroke: '2px #ffffff',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.05em',
                }}
              >
                1%
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="lg:col-span-7">
              <div className="space-y-8">
                
                <div
                  ref={(el) => (textLinesRef.current[0] = el)}
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                    fontWeight: '700',
                    lineHeight: '1.1',
                    color: '#ffffff',
                    letterSpacing: '-0.03em',
                  }}
                >
                  Better Every Day
                </div>

                <div
                  ref={(el) => (textLinesRef.current[1] = el)}
                  style={{
                    width: '120px',
                    height: '3px',
                    backgroundColor: '#ffffff',
                  }}
                />

                <div
                  ref={(el) => (textLinesRef.current[2] = el)}
                  className="text-xl md:text-2xl"
                  style={{
                    color: '#a3a3a3',
                    lineHeight: '1.7',
                    maxWidth: '600px',
                  }}
                >
                  Improvement isn't dramatic. It's gradual, intentional, and built 
                  through consistent daily action. Small gains compound into 
                  extraordinary results.
                </div>

                <div
                  ref={(el) => (textLinesRef.current[3] = el)}
                  className="flex flex-col gap-4 pt-8"
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className="text-5xl font-bold"
                      style={{ color: '#ffffff' }}
                    >
                      365
                    </span>
                    <span
                      className="text-lg uppercase tracking-widest"
                      style={{ color: '#737373', letterSpacing: '0.2em' }}
                    >
                      Days of Growth
                    </span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span
                      className="text-5xl font-bold"
                      style={{ color: '#ffffff' }}
                    >
                      37×
                    </span>
                    <span
                      className="text-lg uppercase tracking-widest"
                      style={{ color: '#737373', letterSpacing: '0.2em' }}
                    >
                      Better Than Before
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Geometric Decoration */}
      <div
        style={{
          position: 'absolute',
          bottom: '80px',
          right: '80px',
          width: '200px',
          height: '200px',
          border: '1px solid #262626',
          transform: 'rotate(45deg)',
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '100px',
          left: '60px',
          width: '1px',
          height: '150px',
          backgroundColor: '#262626',
        }}
      />

      {/* Bottom Border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: '#262626' }}
      />
    </section>
  );
}