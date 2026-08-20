'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const lineRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Set initial states
      gsap.set([lineRef.current, tagRef.current, titleRef.current, descRef.current], {
        opacity: 0,
        y: 50,
      });

      // Entrance animation timeline
      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(lineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
      .to(tagRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.6')
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power4.out',
      }, '-=0.5')
      .to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      }, '-=0.8');

      // Parallax on scroll
      gsap.to(imageRef.current, {
        y: 200,
        ease: 'none',
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

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
      }}
    >
      
      {/* Background Image with Parallax */}
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
            src="https://4kwallpapers.com/images/walls/thumbs_2t/24474.jpg"
            alt="About Hero"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'grayscale(100%)',
              opacity: 0.3,
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center"
        style={{
          padding: '0 32px',
          maxWidth: '1000px',
          marginTop: '80px',
        }}
      >
        
        {/* Decorative Line */}
        <div
          ref={lineRef}
          style={{
            width: '80px',
            height: '2px',
            backgroundColor: '#ffffff',
            margin: '0 auto 48px',
          }}
        />

        {/* Tag */}
        <div ref={tagRef} style={{ marginBottom: '40px' }}>
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{
              color: '#a3a3a3',
              letterSpacing: '0.25em',
            }}
          >
            About Us
          </span>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="font-bold"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            color: '#ffffff',
            lineHeight: '1.1',
            letterSpacing: '-0.03em',
            marginBottom: '48px',
          }}
        >
          We Started With
          <br />
          An Instagram Post
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className="text-xl md:text-2xl"
          style={{
            color: '#d4d4d4',
            lineHeight: '1.7',
            maxWidth: '750px',
            margin: '0 auto',
          }}
        >
          Now we're a movement of 100K+ people choosing to grow together, 
          one day at a time.
        </p>

      </div>

      {/* Bottom Border */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '1px',
          backgroundColor: '#262626',
        }}
      />

    </section>
  );
}