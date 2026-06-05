import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCode,
  FiExternalLink,
  FiGithub,
  FiCalendar,
  FiUser,
  FiTrendingUp,
  FiLayers,
  FiActivity,
  FiChevronLeft,
  FiChevronRight,
  FiStar,
} from "react-icons/fi";

const projectsData = [
  {
    id: 1,
    title: "MediMate Application",
    category: "Mobile App Development",
    period: "2023",
    status: "Completed",
    type: "Academic",
    description:
      "Developed an Android app to help users manage medications by setting schedules, receiving alerts, and tracking doses.",
    longDescription:
      "Developed an Android app to help users manage medications by setting schedules, receiving alerts, and tracking doses. It also includes appointment notifications for doctor visits. This project enhanced skills in mobile app development and UI design.",
    technologies: ["Flutter", "SQLite", "Firebase"],
    skills: ["Mobile App Development", "UI Design"],
    achievements: [
      "Helped users manage medications by setting schedules, receiving alerts, and tracking doses",
      "Includes appointment notifications for doctor visits",
      "Enhanced skills in mobile app development and UI design",
    ],
    links: {
      github: null,
      demo: null,
      documentation: null,
    },
    color: "#10b981",
  },
  {
    id: 2,
    title: "Student Housing Management System",
    category: "Full Stack Development",
    period: "2024",
    status: "Completed",
    type: "Academic",
    description:
      "Built a web-based system to automate room allocation, maintenance tracking, and secure authentication.",
    longDescription:
      "Built a web-based system to automate room allocation, maintenance tracking, and secure authentication. This project provided hands-on experience in full-stack development and database management.",
    technologies: ["Django", "MySQL"],
    skills: [
      "Django",
      "MySQL",
      "Full-Stack Development",
      "Database Management",
    ],
    achievements: [
      "Automated room allocation, maintenance tracking, and secure authentication",
      "Gained hands-on experience in full-stack development and database management",
    ],
    links: {
      github: null,
      demo: null,
      documentation: null,
    },
    color: "#f59e0b",
  },
  {
    id: 3,
    title: "Smart Leukemia Detection System",
    category: "AI/Machine Learning",
    period: "2025",
    status: "Completed",
    type: "Academic",
    description:
      "Created a deep-learning system to classify blood cell images and predict leukemia stages.",
    longDescription:
      "Created a deep-learning system to classify blood cell images and predict leukemia stages. A Streamlit interface enables real-time predictions. This project strengthened skills in ML model deployment and AI applications.",
    technologies: ["MobileNetV2 CNN", "Streamlit"],
    skills: [
      "MobileNetV2 CNN",
      "Streamlit",
      "ML Model Deployment",
      "AI Applications",
    ],
    achievements: [
      "Classified blood cell images and predicted leukemia stages",
      "Enabled real-time predictions with a Streamlit interface",
      "Strengthened skills in ML model deployment and AI applications",
    ],
    links: {
      github: "https://github.com/CodeByVinoth",
      demo: null,
      documentation: null,
    },
    color: "#8b5cf6",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Frontend Development",
    period: "2025",
    status: "Completed",
    type: "Personal",
    description:
      "Interactive and animated portfolio website built with Django and React-style UI.",
    longDescription:
      "Built a visually appealing and interactive portfolio website showcasing my skills, projects, and resume. Integrated animated text greetings, project showcase with smooth transitions, and a downloadable resume feature.",
    technologies: ["Django", "HTML", "CSS", "JavaScript"],
    skills: ["UI/UX Design", "Django", "Frontend Animation"],
    achievements: [
      "Showcased projects, skills, and resume in a single platform",
      "Implemented animated greetings and interactive sections",
      "Created a professional-looking personal brand presence online",
    ],
    links: {
      github: null,
      demo: null,
      documentation: null,
    },
    color: "#ec4899",
  },
  {
    id: 5,
    title: "Terndra Project",
    category: "Full Stack Development",
    period: "2025",
    status: "In Progress",
    type: "Personal",
    description:
      "A full-stack web application focusing on smooth data flow and secure user authentication.",
    longDescription:
      "Terndra is a full-stack web application built to experiment with advanced authentication, secure APIs, and scalable backend architecture. This project improves experience with MERN stack and Git workflow.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    skills: ["MERN Stack Development", "API Design", "Git & Version Control"],
    achievements: [
      "Implemented secure user authentication using JWT",
      "Practiced Git branching and conflict resolution",
      "Improved knowledge in scalable backend design",
    ],
    links: {
      github: "https://github.com/CodeByVinoth/terndra",
      demo: "https://terndra.vercel.app/",
      documentation: null,
    },
    color: "#14b8a6",
  },
  {
    id: 6,
    title: "Travel Bridge",
    category: "Web Application",
    period: "2026",
    status: "Completed",
    type: "Internship",
    description:
      "A modern travel booking and trip management platform designed for seamless travel experiences.",
    longDescription:
      "Designed and developed Travel Bridge, a responsive travel platform focused on trip planning, booking assistance, and user-friendly navigation. Built using React, Vite, and Tailwind CSS with smooth animations.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    skills: ["React", "Frontend Design", "Responsive UI"],
    achievements: [
      "Developed a responsive travel booking platform",
      "Implemented smooth animations and modern UI design",
      "Optimized website performance and mobile responsiveness",
    ],
    links: {
      github: "https://github.com/CodeByVinoth",
      demo: null,
      documentation: null,
    },
    color: "#06b6d4",
  },
];

const StatusBadge = ({ status, type }) => {
  const getStatusColor = () => {
    switch (status) {
      case "Completed":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "In Progress":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      default:
        return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case "Academic":
        return "🎓";
      case "Professional":
        return "💼";
      default:
        return "📋";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span
        className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest border uppercase ${getStatusColor()}`}
      >
        {status}
      </span>
      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest bg-zinc-900 text-zinc-400 border border-zinc-800 uppercase">
        {getTypeIcon()} {type}
      </span>
    </div>
  );
};

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const activeProject = projectsData[currentIndex];

  const sectionRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const isScrollingRef = useRef(false);
  const accumulatorRef = useRef(0);

  const currentIndexRef = useRef(currentIndex);
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  const navigateToProject = useCallback((direction) => {
    if (direction === "next") {
      setCurrentIndex((prev) =>
        prev < projectsData.length - 1 ? prev + 1 : prev
      );
    } else if (direction === "prev") {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e) => {
      const isAtLastProject = currentIndexRef.current === projectsData.length - 1;
      const isAtFirstProject = currentIndexRef.current === 0;

      if (isAtLastProject && e.deltaY > 0) {
        return;
      }

      if (isAtFirstProject && e.deltaY < 0) {
        return;
      }

      e.preventDefault();
      accumulatorRef.current += e.deltaY;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      const threshold = 60;

      if (
        !isScrollingRef.current &&
        Math.abs(accumulatorRef.current) >= threshold
      ) {
        isScrollingRef.current = true;

        if (accumulatorRef.current > 0) {
          navigateToProject("next");
        } else if (accumulatorRef.current < 0) {
          navigateToProject("prev");
        }

        accumulatorRef.current = 0;
      }

      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        accumulatorRef.current = 0;
      }, 300);
    };

    section.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      section.removeEventListener("wheel", handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [navigateToProject]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative text-white py-16 px-4 md:px-8 lg:px-16 w-full min-h-screen flex flex-col justify-center items-center overflow-hidden"
      style={{
        fontFamily:
          "'Plus Jakarta Sans', 'SF Pro Display', -apple-system, sans-serif",
      }}
    >
      {/* Integrated Background Blur Elements from Skills */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Container Frame */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col justify-center">
        {/* Integrated Floating Header Layout */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center md:text-left md:flex md:items-end md:justify-between border-b border-white/10 pb-8"
        >
          <div className="text-center md:text-left">
            <motion.h2
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white inline-flex items-center gap-3 justify-center md:justify-start"
              {...floatingAnimation}
            >
              <FiCode className="text-3xl md:text-4xl text-cyan-400" />
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
              <FiStar className="text-3xl md:text-4xl text-yellow-400" />
            </motion.h2>
            <p className="text-gray-400 text-lg max-w-2xl mt-4">
              Crafting digital experiences with modern technologies and scalable architecture
            </p>
          </div>

          {/* Navigation Controllers */}
          <div className="flex items-center justify-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => navigateToProject("prev")}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous project"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={() => navigateToProject("next")}
              disabled={currentIndex === projectsData.length - 1}
              className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next project"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT PANEL */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: -30, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="relative flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group shadow-2xl"
                whileHover={{
                  borderColor: activeProject.color,
                  boxShadow: `0 20px 40px ${activeProject.color}15`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${activeProject.color}10 0%, transparent 70%)`,
                  }}
                />

                <div>
                  <StatusBadge
                    status={activeProject.status}
                    type={activeProject.type}
                  />

                  <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white mt-6 mb-3 leading-tight">
                    {activeProject.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 font-mono tracking-wider mb-6 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar className="text-zinc-600" />{" "}
                      {activeProject.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiUser className="text-zinc-600" />{" "}
                      {activeProject.category}
                    </span>
                  </div>

                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-normal">
                    {activeProject.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3 flex items-center gap-2">
                    <FiCode size={12} /> Tech Architecture
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 30, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeInOut", delay: 0.02 }}
                className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3 flex items-center gap-2">
                    <FiLayers size={12} /> Technical Deep-Dive
                  </h4>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-medium mb-6">
                    {activeProject.longDescription}
                  </p>

                  <h4 className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3 flex items-center gap-2">
                    <FiActivity size={12} /> Engineering Impact Vectors
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {activeProject.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-xs md:text-sm text-zinc-300 leading-relaxed"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: activeProject.color }}
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3 flex items-center gap-2">
                    <FiTrendingUp size={12} /> Specialization Capabilities
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-white/5 text-[11px] font-medium text-zinc-400 rounded border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                    {activeProject.links.github && (
                      <motion.a
                        whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.98 }}
                        href={activeProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-white/10 text-zinc-200 w-full sm:w-auto"
                      >
                        <FiGithub size={13} /> Code Repository
                      </motion.a>
                    )}
                    {activeProject.links.demo && (
                      <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        href={activeProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border w-full sm:w-auto"
                        style={{
                          backgroundColor: `${activeProject.color}15`,
                          borderColor: activeProject.color,
                          color: activeProject.color,
                        }}
                      >
                        <FiExternalLink size={13} /> Live System
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;