"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Button from "../Ui/Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);
  const lastScrollY = useRef(0);

  // Lock/Unlock body scroll when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen]);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setScrollDirection("up");
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate navbar based on scroll direction
  useEffect(() => {
    if (scrollDirection === "down") {
      gsap.to(navRef.current, {
        y: -100,
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(navRef.current, {
        y: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [scrollDirection]);

  // Initial animations
  useEffect(() => {
    // Animate nav links
    const elements = linksRef.current.filter((el) => el !== null);
    if (elements.length > 0) {
      gsap.fromTo(
        elements,
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out",
        },
      );
    }

    // Animate button separately
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.8,
          ease: "power2.out",
        },
      );
    }
  }, []);

  // Mobile menu animations
  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
        style={{ paddingLeft: "24px", paddingRight: "24px" }}
      >
        <div className="w-full max-w-screen-2xl mx-auto">
          <div
            className="flex items-center justify-between"
            style={{ height: "96px" }}
          >
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-bold text-white hover:text-gray-300 transition-colors duration-300"
            >
              LOGO
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  ref={(el) => (linksRef.current[index] = el)}
                  className="text-white/80 hover:text-white text-base font-medium tracking-wide transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div ref={buttonRef} className="hidden lg:block">
              <Button size="default">Get Started</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white rounded-lg transition-colors duration-300 relative z-50"
              style={{ padding: "8px" }}
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ display: "block" }} // Add this line
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 bottom-0 w-full lg:hidden bg-black z-40 translate-x-full overflow-y-auto overscroll-contain"
      >
        <div
          className="flex flex-col items-center justify-center min-h-full gap-8"
          style={{ paddingTop: "96px", paddingBottom: "96px" }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-4xl sm:text-5xl font-bold hover:text-gray-400 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          <Button
            size="large"
            onClick={() => setIsMenuOpen(false)}
            style={{ marginTop: "32px" }}
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}
    </>
  );
}
