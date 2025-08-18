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

  return (
    <section id="skills" className="py-20 bg-gradient-to-b">
      <div className="container-width section-padding text-center">
        <motion.h2
          className="text-5xl font-extrabold gradient-text mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        {/* Technical Skills */}
        <h3 className="text-2xl font-bold text-accent-400 mb-8">Technical</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-16">
          {technicalSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-accent-500/50 flex flex-col items-center justify-center gap-3 cursor-pointer transition-transform hover:-translate-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className={`${skill.color} text-4xl`} />
                <span className="text-white font-semibold text-lg">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <h3 className="text-2xl font-bold text-accent-400 mb-8">Soft Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-16">
          {softSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-blue-500/50 flex flex-col items-center justify-center gap-3 cursor-pointer transition-transform hover:-translate-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className={`${skill.color} text-4xl`} />
                <span className="text-white font-semibold text-lg">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Languages */}
        <h3 className="text-2xl font-bold text-accent-400 mb-8">Languages</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          <span className="px-6 py-2 rounded-full bg-accent-500/20 text-accent-400 font-medium shadow-lg">
            English – Proficient
          </span>
          <span className="px-6 py-2 rounded-full bg-blue-500/20 text-blue-400 font-medium shadow-lg">
            Tamil – Native
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
