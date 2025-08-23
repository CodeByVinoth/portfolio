import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaFigma,
  FaDatabase,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaBullseye,
} from "react-icons/fa";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", icon: FaPython, color: "text-yellow-400" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Figma", icon: FaFigma, color: "text-pink-500" },
    { name: "MySQL", icon: FaDatabase, color: "text-green-400" },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: FaLightbulb, color: "text-yellow-300" },
    { name: "Presentation", icon: FaComments, color: "text-purple-400" },
    { name: "Team Collaboration", icon: FaUsers, color: "text-blue-400" },
    { name: "Leadership", icon: FaBullseye, color: "text-red-400" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="skills" className="py-16 text-center relative">
      <motion.h2
        className="text-4xl font-bold mb-12 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Technical Skills */}
      <h3 className="text-xl font-semibold text-cyan-400 mb-8">Technical</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
        {technicalSkills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400 transition-all flex flex-col items-center gap-2 cursor-pointer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ scale: 1.05 }}
            >
              <Icon className={`${skill.color} text-3xl`} />
              <span className="text-white text-sm font-medium">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Soft Skills */}
      <h3 className="text-xl font-semibold text-cyan-400 mb-8">Soft Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
        {softSkills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400 transition-all flex flex-col items-center gap-2 cursor-pointer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ scale: 1.05 }}
            >
              <Icon className={`${skill.color} text-3xl`} />
              <span className="text-white text-sm font-medium">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Languages */}
      <h3 className="text-xl font-semibold text-cyan-400 mb-8">Languages</h3>
      <div className="flex justify-center gap-4 flex-wrap">
        <motion.span
          className="px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 text-sm font-medium border border-cyan-400/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          English – Proficient
        </motion.span>
        <motion.span
          className="px-4 py-2 rounded-full bg-blue-400/10 text-blue-300 text-sm font-medium border border-blue-400/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tamil – Native
        </motion.span>
      </div>
    </section>
  );
};

export default Skills;
