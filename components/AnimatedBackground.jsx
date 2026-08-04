'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnimatedBackground() {
  const containerRef = useRef(null);
  const orbs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create animated orbs
    const orbCount = 6;
    for (let i = 0; i < orbCount; i++) {
      const orb = document.createElement('div');
      orb.className = 'absolute rounded-full opacity-20 blur-3xl pointer-events-none';

      const size = Math.random() * 200 + 100;
      const colors = ['bg-blue-600', 'bg-purple-600', 'bg-pink-600', 'bg-cyan-600'];
      orb.classList.add(colors[Math.floor(Math.random() * colors.length)]);

      gsap.set(orb, {
        width: size,
        height: size,
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
      });

      container.appendChild(orb);
      orbs.current.push(orb);

      // Animate each orb
      gsap.to(orb, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: Math.random() * 10 + 15,
        repeat: -1,
        yoyo: true,
        ease: 'none',
      });
    }

    return () => {
      orbs.current.forEach((orb) => orb.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    />
  );
}