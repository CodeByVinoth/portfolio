import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDatabase,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaBullseye,
  FaStar,
  FaCode,
  FaHeart,
  FaGlobe,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiJavascript,
  SiDjango,
} from "react-icons/si";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", icon: FaPython, color: "#FFD43B", shadowColor: "rgba(255, 212, 59, 0.3)" },
    { name: "Java", icon: FaJava, color: "#ED8B16", shadowColor: "rgba(237, 139, 22, 0.3)" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", shadowColor: "rgba(247, 223, 30, 0.3)" },
    { name: "HTML", icon: FaHtml5, color: "#E34F26", shadowColor: "rgba(227, 79, 38, 0.3)" },
    { name: "CSS", icon: FaCss3Alt, color: "#264DE4", shadowColor: "rgba(38, 77, 228, 0.3)" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", shadowColor: "rgba(6, 182, 212, 0.3)" },
    { name: "React", icon: FaReact, color: "#61DAFB", shadowColor: "rgba(97, 218, 251, 0.3)" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", shadowColor: "rgba(109, 179, 63, 0.3)" },
    { name: "Django", icon: SiDjango, color: "#092E20", shadowColor: "rgba(9, 46, 32, 0.3)" },
    { name: "MySQL", icon: FaDatabase, color: "#00758F", shadowColor: "rgba(0, 117, 143, 0.3)" },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: FaLightbulb, color: "from-yellow-300 to-yellow-500", bgGlow: "rgba(253, 224, 71, 0.2)" },
    { name: "Presentation", icon: FaComments, color: "from-purple-400 to-purple-600", bgGlow: "rgba(167, 139, 250, 0.2)" },
    { name: "Team Collaboration", icon: FaUsers, color: "from-blue-400 to-blue-600", bgGlow: "rgba(96, 165, 250, 0.2)" },
    { name: "Leadership", icon: FaBullseye, color: "from-red-400 to-red-600", bgGlow: "rgba(248, 113, 113, 0.2)" },
  ];

  const languages = [
    { name: "English", level: "Proficient", icon: FaGlobe, color: "from-cyan-400 to-blue-500" },
    { name: "Tamil", level: "Native", icon: FaHeart, color: "from-pink-400 to-red-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="skills" className="py-16 text-center relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
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

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4 text-white inline-flex items-center gap-3"
            {...floatingAnimation}
          >
            <FaCode className="text-3xl text-cyan-400" />
            Skills & Expertise
            <FaStar className="text-3xl text-yellow-400" />
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies and collaborative spirit
          </p>
        </motion.div>

        {/* Technical Skills - Professional Card Design */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400"></span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {technicalSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group relative"
                >
                  <motion.div
                    className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden cursor-pointer h-full"
                    whileHover={{ 
                      y: -8,
                      boxShadow: `0 20px 40px ${skill.shadowColor}`,
                      borderColor: skill.color
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    {/* Background gradient on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.shadowColor} 0%, transparent 70%)`
                      }}
                    />

                    {/* Content */}
                    <div className="relative flex flex-col items-center gap-4">
                      {/* Icon container */}
                      <motion.div
                        className="relative"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <div 
                          className="w-16 h-16 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-current transition-all duration-300"
                          style={{ borderColor: `${skill.color}40` }}
                        >
                          <Icon 
                            className="text-3xl transition-all duration-300"
                            style={{ color: skill.color }}
                          />
                        </div>
                        
                        {/* Animated ring */}
                        <motion.div
                          className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100"
                          style={{ borderColor: skill.color }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>

                      {/* Skill name */}
                      <div className="text-center">
                        <h4 className="text-white font-semibold text-sm">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Soft Skills - Card Flip Design */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Soft Skills
            </span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {softSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group perspective-1000 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-full aspect-square preserve-3d group-hover:rotate-y-180 transition-transform duration-700">
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 flex flex-col items-center justify-center gap-4 p-4">
                      <Icon className="text-4xl text-white/90" />
                      <span className="text-sm font-semibold text-white text-center">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Back */}
                    <div 
                      className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-400/50 flex items-center justify-center p-4"
                      style={{ boxShadow: `0 0 20px ${skill.bgGlow}` }}
                    >
                      <div className="text-center">
                        <Icon className="text-3xl text-white mb-2 mx-auto" />
                        <p className="text-xs text-white/80">
                          {skill.name === "Problem Solving" && "Analytical thinking & creative solutions"}
                          {skill.name === "Presentation" && "Clear communication & storytelling"}
                          {skill.name === "Team Collaboration" && "Synergy & shared success"}
                          {skill.name === "Leadership" && "Vision, guidance & inspiration"}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Languages - Interactive Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-green-400"></span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Languages
            </span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-green-400"></span>
          </h3>
          
          <div className="flex justify-center gap-8 flex-wrap">
            {languages.map((lang, i) => {
              const Icon = lang.icon;
              return (
                <motion.div
                  key={lang.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-6 min-w-[180px] hover:border-green-400 transition-colors">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative flex flex-col items-center gap-3">
                      <Icon className="text-3xl text-white/90" />
                      <div className="text-center">
                        <h4 className="text-white font-bold text-lg">{lang.name}</h4>
                        <span className="text-sm text-green-400">{lang.level}</span>
                      </div>
                      {/* Animated underline */}
                      <motion.div
                        className="h-0.5 bg-gradient-to-r from-green-400 to-emerald-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

       
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

export default Skills;