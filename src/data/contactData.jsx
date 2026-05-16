import {
  FiMail,
  FiMapPin,
  FiClock,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: "Email Us",
    value: "info@worceny.com",
    sub: "Reply within 2 hours",
    accent: "#865aff",
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: "Call & WhatsApp",
    value: ["+91 81403 98723", "+91 91069 30388"],
    sub: "Mon-Sat, 9am-7pm IST",
    accent: "#25D366",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Office",
    value: "Surat, Gujarat, India",
    sub: "India — 395004",
    accent: "#865aff",
  },
  {
    icon: <FiClock size={20} />,
    label: "Working Hours",
    value: "Mon - Sat",
    sub: "9:00 AM - 7:00 PM IST",
    accent: "#5aff73",
  },
];

export const contactSocials = [
  {
    icon: <FiLinkedin size={17} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/worceny-infotech",
    accent: "#0077b5",
  },
  {
    icon: <FiGithub size={17} />,
    label: "GitHub",
    href: "https://github.com/WorcenyInfotech",
    accent: "#0e0e0e",
  },
];

export const contactFormServices = [
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "UI/UX Design",
  "Other",
];

export const contactFormBudgets = [
  "< ₹50K",
  "₹50K-1L",
  "₹1L-3L",
  "₹3L-5L",
  "₹5L+",
  "Discuss",
];

export const contactFaqs = [
  {
    q: "How long does a project take?",
    a: "Typical projects take 2–8 weeks depending on complexity. We provide a detailed timeline after the initial consultation.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer fixed-price and hourly models. After understanding your requirements, we provide a transparent quote with no hidden costs.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes! We offer 3 months of free support after launch, and ongoing maintenance packages are available.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We integrate seamlessly with in-house teams and adapt to your workflow and tools.",
  },
];

/** Short bullets beside contact forms (home + contact page). */
export const contactFormWhyBullets = [
  { title: "Fast Delivery", desc: "On time, every time." },
  { title: "Clean Code", desc: "Scalable & well-documented." },
  {
    title: "Transparent Pricing",
    desc: "No hidden costs. Fixed quotes.",
  },
  { title: "24/7 Support", desc: "We're always here for you." },
  {
    title: "Modern Tech Stack",
    desc: "React, Node.js, Next.js & more.",
  },
];
