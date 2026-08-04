"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);
  const contentsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.set(lineRef.current, { scaleX: 0 });
      gsap.set(headerRef.current.children, { opacity: 0, y: 50 });

      gsap.to(lineRef.current, {
        scaleX: 1,
        duration: 1.4,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      gsap.to(headerRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const image = imagesRef.current[index];
        const content = contentsRef.current[index];

        // Determine direction: even index = left, odd index = right
        const fromLeft = index % 2 === 0;
        const xOffset = fromLeft ? -120 : 120;

        // Set initial states
        gsap.set(card, { opacity: 0, x: xOffset });
        gsap.set(image, { scale: 1.3 });
        gsap.set(content, { opacity: 0, y: 30 });

        // Create timeline for each card
        const cardTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // Card slides in from side
        cardTimeline
          .to(card, {
            opacity: 1,
            x: 0,
            duration: 1.6,
            ease: "power4.out",
          })
          // Image zoom
          .to(
            image,
            {
              scale: 1,
              duration: 2,
              ease: "power3.out",
            },
            "-=1.6",
          )
          // Content fades in
          .to(
            content,
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
            },
            "-=1",
          );

        // Parallax on scroll
        gsap.to(image, {
          y: -50,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        // Content fade scrub effect
        gsap.to(content, {
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            end: "top 40%",
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      image: "https://4kwallpapers.com/images/walls/thumbs_2t/24472.png",
      title: "Community Driven",
      description:
        "Join thousands of individuals on the same journey. We rise by lifting each other up.",
      tag: "TOGETHER",
    },
    {
      image: "https://4kwallpapers.com/images/walls/thumbs_2t/25454.jpg",
      title: "Shared Growth",
      description:
        "Your progress inspires others. Every milestone you achieve becomes motivation for someone else.",
      tag: "INSPIRE",
    },
    {
      image: "https://4kwallpapers.com/images/walls/thumbs_2t/22972.jpg",
      title: "No Judgement Zone",
      description:
        "This is not about competition. Its about becoming better versions of ourselves, together.",
      tag: "SUPPORT",
    },
    {
      image: "https://4kwallpapers.com/images/walls/thumbs_2t/22577.png",
      title: "Built by Dreamers",
      description:
        "Created by people who understand the struggle. Not for profit, but for genuine progress.",
      tag: "PURPOSE",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        backgroundColor: "#000000",
        padding: "160px 32px",
      }}
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          style={{ marginBottom: "120px", maxWidth: "1200px" }}
        >
          <div
            ref={lineRef}
            style={{
              width: "80px",
              height: "2px",
              backgroundColor: "#ffffff",
              marginBottom: "32px",
              transformOrigin: "left",
            }}
          />

          <span
            className="text-sm font-medium tracking-widest uppercase"
            style={{
              color: "#737373",
              letterSpacing: "0.3em",
              display: "block",
              marginBottom: "24px",
            }}
          >
            Our Philosophy
          </span>

          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              color: "#ffffff",
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
              marginBottom: "40px",
            }}
          >
            We're Not Here
            <br />
            For Profit.
          </h2>

          <h3
            className="font-bold"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
              marginBottom: "40px",
            }}
          >
            We're Here To{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #ffffff",
                WebkitTextFillColor: "transparent",
              }}
            >
              Grow Together.
            </span>
          </h3>

          <p
            className="text-lg md:text-xl"
            style={{
              color: "#a3a3a3",
              maxWidth: "650px",
              lineHeight: "1.8",
            }}
          >
            This platform was built on a simple belief: everyone deserves
            support on their journey to becoming better. No hidden agendas, just
            genuine growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                border: "1px solid #262626",
                aspectRatio: "4/3",
              }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: "100%", height: "100%" }}
              >
                <img
                  ref={(el) => (imagesRef.current[index] = el)}
                  src={feature.image}
                  alt={feature.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(100%) contrast(1.1)",
                    transition: "filter 0.6s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.filter = "grayscale(0%) contrast(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.filter = "grayscale(100%) contrast(1.1)";
                  }}
                />
              </div>

              {/* Overlay Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)",
                }}
              />

              {/* Tag */}
              <div
                style={{
                  position: "absolute",
                  top: "24px",
                  left: "24px",
                  padding: "10px 20px",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {feature.tag}
                </span>
              </div>

              {/* Content */}
              <div
                ref={(el) => (contentsRef.current[index] = el)}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "48px",
                }}
              >
                <h3
                  className="text-3xl md:text-4xl font-bold"
                  style={{
                    color: "#ffffff",
                    marginBottom: "16px",
                    letterSpacing: "-0.02em",
                    lineHeight: "1.2",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-base md:text-lg"
                  style={{
                    color: "#d4d4d4",
                    lineHeight: "1.7",
                    maxWidth: "450px",
                  }}
                >
                  {feature.description}
                </p>
              </div>

              {/* Corner Decoration */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "40px",
                  height: "40px",
                  borderTop: "2px solid #ffffff",
                  borderRight: "2px solid #ffffff",
                  opacity: 0.6,
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div
          style={{
            marginTop: "120px",
            paddingTop: "80px",
            borderTop: "1px solid #262626",
            textAlign: "center",
          }}
        >
          <p
            className="text-2xl md:text-4xl font-medium"
            style={{
              color: "#ffffff",
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: "1.5",
              letterSpacing: "-0.01em",
            }}
          >
            "Success isn't a solo journey. It's a shared path where we all climb
            together, one day at a time."
          </p>
        </div>
      </div>
    </section>
  );
}
