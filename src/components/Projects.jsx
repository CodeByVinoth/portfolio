import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MediMate Application',
      description: 'Developed an Android app to help users manage medications by setting schedules, receiving alerts, and tracking doses. Includes appointment notifications for doctor visits. Enhanced skills in mobile app development and UI design.',
      technologies: ['Flutter', 'SQLite', 'Firebase'],
      icon: Smartphone,
      gradient: 'from-blue-500 to-cyan-500',
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Student Housing Management System',
      description: 'Built a web-based system to automate room allocation, maintenance tracking, and secure authentication. Gained hands-on experience in full-stack development and database management.',
      technologies: ['Django', 'MySQL', 'HTML/CSS', 'JavaScript'],
      icon: Globe,
      gradient: 'from-green-500 to-emerald-500',
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Smart Leukemia Detection System',
      description: 'Created a deep-learning system to classify blood cell images and predict leukemia stages. Streamlit interface enables real-time predictions. Strengthened skills in ML model deployment and AI applications.',
      technologies: ['MobileNetV2 CNN', 'Streamlit', 'Python', 'TensorFlow'],
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      links: {
        github: 'https://github.com/CodeByVinoth/Smart-Leukemia-Detection-System',
        live: '#'
      }
    }
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-primary-900/20">
      <div className="container-width section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Projects</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and technical projects
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                className="glass-effect rounded-xl overflow-hidden hover-glow group"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Header */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent size={48} className="text-white" />
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={16} className="text-white" />
                      </motion.a>
                    )}
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={16} className="text-white" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/CodeByVinoth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;