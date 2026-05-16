"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/data/workProcessData";

gsap.registerPlugin(ScrollTrigger);

export default function WorkProcess() {
  const sectionRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (stepsRef.current?.children) {
        gsap.fromTo(
          stepsRef.current.children,
          {
            opacity: 0,
            yPercent: 15,   // relative motion for smoother effect
            rotate: -2,     // subtle rotation
            scale: 0.95,    // subtle scaling
          },
          {
            opacity: 1,
            yPercent: 0,
            rotate: 0,
            scale: 1,
            stagger: {
              each: 0.1,    // shorter stagger, more continuous
              ease: "power2.out",
            },
            duration: 0.5,  // slightly longer for smoother motion
            ease: "power2.out",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 90%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work-process"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28 section-gradient"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 lg:mb-16">
        <span
          className="inline-block text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          Our Work Process
        </span>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
          style={{ color: "var(--text)" }}
        >
          Our <span className="gradient-text">expertise</span>
          <br className="hidden sm:block" />
          drives excellence
        </h2>
      </div>

      {/* Cards */}
      <div
        ref={stepsRef}
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-5 sm:gap-6 lg:gap-8
        "
      >
        {processSteps.map((step, index) => (
        <motion.div
        key={step.step}
        whileHover={{
          y: -10,
          rotate: 2, // slight playful rotation
          boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
        }}
        transition={{
          type: "tween",       // smoother than spring
          ease: [0.33, 1, 0.68, 1],  // gentle easing (power2.out equivalent)
          duration: 0.3,       // quick, smooth response
        }}
        className="
          group
          relative
          h-full
          border
          border-[var(--border)]
          bg-[var(--card-bg)]
          p-5 sm:p-6 lg:p-7
          backdrop-blur-sm
          transition-all
          duration-300
        "
      >
            <div
              className="
                text-4xl sm:text-5xl
                font-black
                mb-4
                opacity-80
                group-hover:opacity-100
                transition-opacity
              "
              style={{ color: "var(--accent)" }}
            >
              {step.step}
            </div>

            <h3
              className="
                text-lg sm:text-xl
                font-bold
                mb-3
                leading-snug
              "
              style={{ color: "var(--text-card)" }}
            >
              {step.title}
            </h3>

            <p
              className="
                text-sm sm:text-base
                leading-relaxed
              "
              style={{ color: "var(--muted-card)" }}
            >
              {step.desc}
            </p>

            <div
              className="
                absolute
                bottom-0
                left-0
                h-1
                w-0
                group-hover:w-full
                transition-all
                duration-500
                rounded-b-2xl
              "
              style={{ background: "var(--accent)" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}