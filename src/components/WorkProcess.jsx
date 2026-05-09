import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "We carefully analyze your ideas and needs to improve your strategic plan with valuable suggestions and feature requests.",
  },
  {
    step: "02",
    title: "Planning & Design",
    desc: "We apply what we've learned from evaluating your requirements to plan how your digital project will function.",
  },
  {
    step: "03",
    title: "Development",
    desc: "We use the latest tech to craft code that suits your goals and audience, guaranteeing top-notch performance.",
  },
  {
    step: "04",
    title: "QA Testing",
    desc: "We thoroughly test across platforms to address your needs, employing regression and integration testing.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "After successful QA testing and user acceptance, we proceed confidently to the deployment phase.",
  },
  {
    step: "06",
    title: "Support & Maintenance",
    desc: "Our commitment extends beyond deployment, encompassing ongoing maintenance and support.",
  },
];

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
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 85%",
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
        {processSteps.map((step) => (
          <motion.div
            key={step.step}
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 20,
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
            // style={{
            //     background: "var(--card-bg2)"
            // }}
          >
            {/* Step Number */}
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

            {/* Title */}
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

            {/* Description */}
            <p
              className="
                text-sm sm:text-base
                leading-relaxed
              "
              style={{ color: "var(--muted-card)" }}
            >
              {step.desc}
            </p>

            {/* Accent Line */}
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