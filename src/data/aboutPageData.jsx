import {
  FiTarget,
  FiEye,
  FiAward,
  FiUsers,
  FiZap,
  FiShield,
} from "react-icons/fi";

export const aboutMissionVisionCards = [
  {
    icon: <FiTarget size={26} />,
    title: "Our Mission",
    desc: "To deliver cutting-edge digital solutions that empower businesses to thrive in the modern web landscape with speed, security, and scalability.",
    accent: "var(--accent)",
  },
  {
    icon: <FiEye size={26} />,
    title: "Our Vision",
    desc: "To become the most trusted IT partner for startups and enterprises, building the future of the web one pixel at a time.",
    accent: "var(--accent)",
  },
];

export const aboutStats = [
  { icon: <FiAward size={20} />, value: "50+", label: "Projects Delivered" },
  { icon: <FiUsers size={20} />, value: "50+", label: "Happy Clients" },
  { icon: <FiZap size={20} />, value: "99%", label: "Client Satisfaction" },
  { icon: <FiShield size={20} />, value: "2+", label: "Years Experience" },
];
