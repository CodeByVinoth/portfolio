import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Users,
  Lightbulb,
  MessageSquare,
  Target,
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", icon: Code },
    { name: "Java", icon: Code },
    { name: "HTML/CSS", icon: Globe },
    { name: "Django", icon: Globe },
    { name: "React", icon: Globe },
    { name: "Figma", icon: Smartphone },
    { name: "MySQL", icon: Database },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Presentation", icon: MessageSquare },
    { name: "Team Collaboration", icon: Users },
    { name: "Leadership", icon: Target },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
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
        <h3 className="text-2xl font-bold text-accent-400 mb-6">Technical</h3>
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {technicalSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="px-6 py-4 bg-gray-800/40 border border-accent-500/30 rounded-xl shadow-lg flex items-center gap-3 hover:scale-110 hover:shadow-accent-500/50 transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="text-accent-400" size={22} />
                <span className="text-white font-medium">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <h3 className="text-2xl font-bold text-accent-400 mb-6">Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {softSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="px-6 py-4 bg-gray-800/40 border border-blue-500/30 rounded-xl shadow-lg flex items-center gap-3 hover:scale-110 hover:shadow-blue-500/50 transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="text-blue-400" size={22} />
                <span className="text-white font-medium">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Languages */}
        <h3 className="text-2xl font-bold text-accent-400 mb-6">Languages</h3>
        <div className="flex justify-center gap-6">
          <span className="px-6 py-2 rounded-full bg-accent-500/20 text-accent-400 font-medium">
            English – Proficient
          </span>
          <span className="px-6 py-2 rounded-full bg-blue-500/20 text-blue-400 font-medium">
            Tamil – Native
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
