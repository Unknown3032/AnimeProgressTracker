'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer slides up from bottom
      gsap.fromTo(
        footerRef.current,
        { y: 100 },
        {
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
            end: 'top 75%',
            scrub: 1.5,
          },
        }
      );

      // Image parallax
      gsap.to(imageRef.current, {
        y: -60,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#000000',
        borderTop: '1px solid #262626',
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div ref={imageRef} className="absolute inset-0">
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_2t/22577.png"
            alt="Footer"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(100%)',
              opacity: 0.05,
            }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, #000000 0%, rgba(0,0,0,0.98) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10" style={{ padding: '80px 32px' }}>
        <div className="max-w-screen-xl mx-auto text-center">
          
          <Link
            href="/"
            className="text-4xl font-bold mb-6 inline-block"
            style={{ color: '#ffffff' }}
          >
            LOGO
          </Link>

          <p
            className="text-lg mb-12"
            style={{
              color: '#737373',
              maxWidth: '400px',
              margin: '0 auto 48px',
            }}
          >
            Grow together, not apart.
          </p>

          <div className="flex justify-center gap-8 mb-12">
            {['Twitter', 'Instagram', 'Discord', 'GitHub'].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-base transition-colors duration-300"
                style={{ color: '#737373' }}
                onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.target.style.color = '#737373')}
              >
                {social}
              </Link>
            ))}
          </div>

          <div
            style={{
              paddingTop: '32px',
              borderTop: '1px solid #262626',
            }}
          >
            <p className="text-sm" style={{ color: '#737373' }}>
              © 2024 Daily Growth Tracker. Built for progress, not profit.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}