import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Brain, Code, Zap, Eye } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'MediMate Application',
      description: 'Developed an Android app to help users manage medications by setting schedules, receiving alerts, and tracking doses. Includes appointment notifications for doctor visits. Enhanced skills in mobile app development and UI design.',
      technologies: ['Flutter', 'SQLite', 'Firebase'],
      icon: Smartphone,
      gradient: 'from-blue-500 via-purple-500 to-cyan-500',
      accentColor: '#3b82f6',
      stats: { downloads: '2.5K+', rating: '4.8', users: '1.2K+' },
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      id: 2,
      title: 'Student Housing Management System',
      description: 'Built a web-based system to automate room allocation, maintenance tracking, and secure authentication. Gained hands-on experience in full-stack development and database management.',
      technologies: ['Django', 'MySQL', 'HTML/CSS', 'JavaScript'],
      icon: Globe,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      accentColor: '#10b981',
      stats: { institutions: '15+', rooms: '500+', efficiency: '89%' },
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      id: 3,
      title: 'Smart Leukemia Detection System',
      description: 'Created a deep-learning system to classify blood cell images and predict leukemia stages. Streamlit interface enables real-time predictions. Strengthened skills in ML model deployment and AI applications.',
      technologies: ['MobileNetV2 CNN', 'Streamlit', 'Python', 'TensorFlow'],
      icon: Brain,
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      accentColor: '#8b5cf6',
      stats: { accuracy: '94.2%', images: '10K+', models: '3' },
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
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.8,
        type: "spring",
        bounce: 0.4
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="w-8 h-8 text-cyan-400" />
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Zap className="w-8 h-8 text-purple-400" />
          </motion.div>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore my latest creations where{" "}
            <span className="text-cyan-400 font-semibold">innovation</span> meets{" "}
            <span className="text-purple-400 font-semibold">functionality</span>
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                className="relative group perspective-1000"
                variants={cardVariants}
                onHoverStart={() => setHoveredCard(project.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div
                  className="relative h-full bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 cursor-pointer"
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: 5,
                    z: 50,
                  }}
                  onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                  style={{
                    boxShadow: hoveredCard === project.id 
                      ? `0 20px 40px ${project.accentColor}40` 
                      : '0 10px 30px rgba(0,0,0,0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `linear-gradient(45deg, ${project.accentColor}40, transparent, ${project.accentColor}40)`,
                      backgroundSize: '400% 400%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Header with Floating Icon */}
                  <div className={`relative h-40 bg-gradient-to-br ${project.gradient} p-6 overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      animate={{
                        background: [
                          'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                          'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                          'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    <motion.div
                      className="relative z-10 flex items-center justify-between h-full"
                      animate={hoveredCard === project.id ? { y: -5 } : { y: 0 }}
                    >
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <div className="flex gap-2">
                          {project.links.github && (
                            <motion.a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30"
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github size={16} className="text-white" />
                            </motion.a>
                          )}
                          {project.links.live !== '#' && (
                            <motion.a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30"
                              whileHover={{ scale: 1.2, rotate: -10 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={16} className="text-white" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          scale: hoveredCard === project.id ? 1.2 : 1,
                        }}
                        transition={{
                          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                          scale: { duration: 0.3 }
                        }}
                      >
                        <IconComponent size={64} className="text-white/90" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.p
                      className="text-gray-300 text-sm leading-relaxed mb-6"
                      animate={hoveredCard === project.id ? { color: '#d1d5db' } : { color: '#9ca3af' }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <motion.div
                          key={key}
                          className="text-center p-3 bg-gray-700/30 rounded-lg border border-gray-600/30"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
                        >
                          <div className="text-lg font-bold text-white">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies with Animation */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium border"
                          style={{
                            backgroundColor: `${project.accentColor}20`,
                            borderColor: `${project.accentColor}60`,
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: `${project.accentColor}30`,
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 pointer-events-none"
                    animate={{ opacity: hoveredCard === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Interactive Project Details Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full border border-gray-600"
                initial={{ scale: 0.5, rotateY: -90 }}
                animate={{ scale: 1, rotateY: 0 }}
                exit={{ scale: 0.5, rotateY: 90 }}
                transition={{ type: "spring", bounce: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === activeProject);
                  const IconComponent = project.icon;
                  return (
                    <>
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <IconComponent size={32} className="text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                          <p className="text-gray-400">Detailed Overview</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="text-center p-4 bg-gray-700/50 rounded-xl">
                            <div className="text-xl font-bold text-white">{value}</div>
                            <div className="text-sm text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        {project.links.github && (
                          <motion.a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={20} />
                            View Code
                          </motion.a>
                        )}
                        {project.links.live !== '#' && (
                          <motion.a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2"
                            style={{ backgroundColor: project.accentColor }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={20} />
                            Live Demo
                          </motion.a>
                        )}
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-50"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <motion.a
              href="https://github.com/CodeByVinoth"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="relative flex items-center gap-3"
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Github size={24} />
                <span>Explore All Projects</span>
                <Eye size={20} />
              </motion.div>
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12"
                animate={{ x: [-200, 200] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;