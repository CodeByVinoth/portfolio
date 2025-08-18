import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Award, Calendar } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python', icon: Code },
    { name: 'Java', icon: Code },
    { name: 'Django', icon: Globe },
    { name: 'React', icon: Globe },
    { name: 'Figma', icon: Smartphone },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about">
      <div className="container-width section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Passionate Computer Science and Engineering graduate with expertise in modern
              web technologies. Currently working as a Software Developer Intern at Wattstrons,
              gaining real-time experience in web development, UI design, and backend
              integration.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Skilled in building functional, user-friendly applications and solving real-world
              problems through clean code and teamwork. I believe in continuous learning and
              staying updated with the latest technology trends.
            </motion.p>

            {/* Skills Tags */}
            <motion.div
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-2 bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(147, 51, 234, 0.3)' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent size={16} />
                    {skill.name}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Current Role & Education */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Current Role */}
            <motion.div
              className="glass-effect rounded-xl p-6 hover-glow"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center">
                  <Award className="text-accent-500" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Current Role</h3>
                  <p className="text-accent-400 font-medium mb-1">Software Developer Intern</p>
                  <p className="text-gray-400 mb-2">Wattstrons</p>
                  <p className="text-sm text-gray-500">Aug 2025 - Present</p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="glass-effect rounded-xl p-6 hover-glow"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center">
                  <Calendar className="text-accent-500" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                  <p className="text-accent-400 font-medium mb-1">
                    Bachelor of Computer Science and Engineering
                  </p>
                  <p className="text-gray-400 mb-2">
                    Kongunadu College of Engineering and Technology
                  </p>
                  <p className="text-sm text-gray-500 mb-2">2021 – 2025</p>
                  <p className="text-sm text-accent-300 font-medium">CGPA: 7.9</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <div className="glass-effect rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-accent-400 mb-1">5+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="glass-effect rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-accent-400 mb-1">3+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;