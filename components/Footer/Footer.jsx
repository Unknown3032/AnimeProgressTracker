'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Button from '../Ui/Button';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useRef(null);
  const linksRef = useRef([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(ctaRef.current, { opacity: 0, y: 60 });
      gsap.set(linksRef.current, { opacity: 0, y: 40 });
      gsap.set(bottomRef.current, { opacity: 0 });

      // Entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power4.out',
      })
      .to(linksRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
      }, '-=0.8')
      .to(bottomRef.current, {
        opacity: 1,
        duration: 1,
      }, '-=0.6');

      // Image parallax
      gsap.to(imageRef.current, {
        y: -100,
        scale: 1.05,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });

      // Content parallax (slower)
      gsap.to(contentRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Roadmap', href: '#roadmap' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Community', href: '#community' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
    ],
    resources: [
      { name: 'Help Center', href: '#help' },
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
      { name: 'Contact', href: '#contact' },
    ],
    social: [
      { name: 'Twitter', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'Discord', href: '#' },
      { name: 'GitHub', href: '#' },
    ],
  };

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#000000',
        borderTop: '1px solid #262626',
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
            src="https://4kwallpapers.com/images/walls/thumbs_2t/24472.png"
            alt="Footer Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'grayscale(100%)',
              opacity: 0.05,
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.9) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10"
      >
        {/* CTA Section */}
        <div
          ref={ctaRef}
          className="text-center"
          style={{
            padding: '120px 32px 100px',
            borderBottom: '1px solid #262626',
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-bold mb-8"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                color: '#ffffff',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
              }}
            >
              Ready To Start
              <br />
              Your Journey?
            </h2>
            <p
              className="text-lg md:text-xl mb-12"
              style={{
                color: '#a3a3a3',
                maxWidth: '600px',
                margin: '0 auto 48px',
                lineHeight: '1.7',
              }}
            >
              Join thousands of people transforming their lives through consistent daily action.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button size="default" variant="primary">
                Get Started Free
              </Button>
              <Button size="default" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div
          style={{
            padding: '80px 32px',
          }}
        >
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-16">
              
              {/* Brand Column */}
              <div
                ref={(el) => (linksRef.current[0] = el)}
                className="col-span-2 md:col-span-4 lg:col-span-1"
              >
                <Link
                  href="/"
                  className="text-2xl font-bold mb-4 inline-block"
                  style={{ color: '#ffffff' }}
                >
                  LOGO
                </Link>
                <p
                  className="text-sm mb-6"
                  style={{
                    color: '#737373',
                    lineHeight: '1.7',
                    maxWidth: '250px',
                  }}
                >
                  Building better habits, one day at a time.
                </p>
              </div>

              {/* Product Links */}
              <div ref={(el) => (linksRef.current[1] = el)}>
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-6"
                  style={{
                    color: '#ffffff',
                    letterSpacing: '0.15em',
                  }}
                >
                  Product
                </h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-300"
                        style={{ color: '#737373' }}
                        onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                        onMouseLeave={(e) => (e.target.style.color = '#737373')}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div ref={(el) => (linksRef.current[2] = el)}>
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-6"
                  style={{
                    color: '#ffffff',
                    letterSpacing: '0.15em',
                  }}
                >
                  Company
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-300"
                        style={{ color: '#737373' }}
                        onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                        onMouseLeave={(e) => (e.target.style.color = '#737373')}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div ref={(el) => (linksRef.current[3] = el)}>
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-6"
                  style={{
                    color: '#ffffff',
                    letterSpacing: '0.15em',
                  }}
                >
                  Resources
                </h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-300"
                        style={{ color: '#737373' }}
                        onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                        onMouseLeave={(e) => (e.target.style.color = '#737373')}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div ref={(el) => (linksRef.current[4] = el)}>
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-6"
                  style={{
                    color: '#ffffff',
                    letterSpacing: '0.15em',
                  }}
                >
                  Social
                </h3>
                <ul className="space-y-3">
                  {footerLinks.social.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-300"
                        style={{ color: '#737373' }}
                        onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                        onMouseLeave={(e) => (e.target.style.color = '#737373')}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          ref={bottomRef}
          style={{
            padding: '32px',
            borderTop: '1px solid #262626',
          }}
        >
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p
                className="text-sm"
                style={{ color: '#737373' }}
              >
                © 2024 Daily Growth Tracker. Built with dedication, not for profit.
              </p>
              <div className="flex gap-8">
                <Link
                  href="#privacy"
                  className="text-sm transition-colors duration-300"
                  style={{ color: '#737373' }}
                  onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.target.style.color = '#737373')}
                >
                  Privacy
                </Link>
                <Link
                  href="#terms"
                  className="text-sm transition-colors duration-300"
                  style={{ color: '#737373' }}
                  onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.target.style.color = '#737373')}
                >
                  Terms
                </Link>
                <Link
                  href="#cookies"
                  className="text-sm transition-colors duration-300"
                  style={{ color: '#737373' }}
                  onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.target.style.color = '#737373')}
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative Elements */}
      <div
        style={{
          position: 'absolute',
          bottom: '100px',
          right: '60px',
          width: '120px',
          height: '120px',
          border: '1px solid #262626',
          transform: 'rotate(45deg)',
          opacity: 0.4,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '80px',
          left: '40px',
          width: '1px',
          height: '200px',
          backgroundColor: '#262626',
          opacity: 0.6,
        }}
      />
    </footer>
  );
}