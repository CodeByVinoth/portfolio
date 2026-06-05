import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Calendar, MapPin, Trophy, Users, FileText, ExternalLink, GraduationCap, Shield } from 'lucide-react';

const Experience = () => {
  const workExperience = [
    {
      title: 'Software Developer Intern',
      company: 'Wattstrons',
      period: 'Aug 2025 - Mar 2026',
      location: 'Remote',
      responsibilities: [
        'Developed interactive UI components and animations using React and Tailwind CSS',
        'Created custom designs to improve user experience and brand appeal',
        'Assisted in backend API integrations for smooth server-client communication'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Logical Programming Participant',
      organization: 'TECHNOPHILE\'24 at PGP College of Engineering',
      icon: Trophy
    },
    {
      title: 'Paper Presentation',
      organization: 'IoT-Based Smart Agriculture at Gnanamani College of Engineering',
      icon: FileText
    },
    {
      title: 'Hackathon Participant',
      organization: 'Department of Computer Science & Engineering',
      icon: Users
    }
  ];

  const academicPerformance = [
    { level: "Bachelor's CGPA", score: "7.9" },
    { level: "HSLC", score: "81.8%" },
    { level: "SSLC", score: "78.2%" }
  ];

  const certifications = [
    {
      title: "Full Stack Java Development",
      organization: "EXcelR",
      credentialId: "11099/EXCELR/05012026",
      skills: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
      link: "#",
      color: "from-blue-500 to-cyan-500",
      icon: Shield
    },
    {
      title: "Java Programming",
      organization: "Wipro",
      credentialId: "9z7MzHvmmF",
      skills: ["Core Java", "OOP", "Collections", "Multithreading"],
      link: "https://cert.diceid.com/cid/9z7MzHvmmF",
      color: "from-orange-500 to-red-500",
      icon: FileText
    },
    {
      title: "Python Programming",
      organization: "Certiport",
      credentialId: "ApQqnS634DUgcKNAgabfEA==",
      skills: ["Python", "Data Structures", "Problem Solving"],
      link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=471&cvid=ApQqnS634DUgcKNAgabfEA==",
      color: "from-yellow-500 to-green-500",
      icon: Award
    },
    {
      title: "Django Development",
      organization: "Udemy",
      credentialId: "UC-b2c0ab44-4ff5-4b78-8477-ba9a0227d57a",
      skills: ["Django", "Python Web", "Database Management"],
      link: "https://ude.my/UC-b2c0ab44-4ff5-4b78-8477-ba9a0227d57a",
      color: "from-green-500 to-emerald-500",
      icon: GraduationCap
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20">
      <div className="container-width section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and notable accomplishments
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Work Experience */}
            <motion.div className="mb-12" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Briefcase className="text-accent-500" size={28} />
                Professional Experience
              </h3>

              <div className="space-y-6">
                {workExperience.map((job, index) => (
                  <motion.div
                    key={index}
                    className="glass-effect rounded-xl p-6 hover-glow relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-3 top-8 w-6 h-6 bg-accent-500 rounded-full border-4 border-black hidden lg:block" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-1">{job.title}</h4>
                        <p className="text-accent-400 font-medium mb-2">{job.company}</p>
                      </div>
                      <div className="sm:text-right mt-2 sm:mt-0">
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                          <Calendar size={16} />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Academic Performance */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="text-accent-500" size={28} />
                Academic Performance
              </h3>

              <div className="glass-effect rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4">
                  {academicPerformance.map((item, index) => (
                    <motion.div
                      key={item.level}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-xl sm:text-2xl font-bold text-accent-400 mb-2">{item.score}</div>
                      <div className="text-xs sm:text-sm text-gray-400">{item.level}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
              variants={itemVariants}
            >
              <Trophy className="text-accent-500" size={28} />
              Achievements
            </motion.h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    className="glass-effect rounded-xl p-6 hover-glow"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-accent-500" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {achievement.organization}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Certifications Section - Full Width Below - Fully Responsive */}
        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3">
              <GraduationCap className="text-accent-500" size={28} />
              <span>Professional Certifications</span>
            </h3>
            <div className="w-16 sm:w-20 h-1 bg-accent-500 mx-auto mb-3 sm:mb-4" />
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
              Verified credentials showcasing my technical expertise and professional development
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-xl blur transition duration-500" 
                       style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                  <div className="relative glass-effect rounded-xl p-4 sm:p-6 border border-white/10 hover:border-accent-500/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                      {/* Certificate Badge */}
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${cert.color} p-0.5`}>
                            <div className="w-full h-full rounded-lg sm:rounded-xl bg-gray-900/90 backdrop-blur-sm flex items-center justify-center">
                              <IconComponent className="text-white" size={20} />
                            </div>
                          </div>
                          {/* Verification Badge - Hidden on mobile */}
                          
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2 sm:mb-3">
                            <div className="flex-1 min-w-0">
                              <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-accent-400 transition-colors truncate">
                                {cert.title}
                              </h4>
                              <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1">
                                <p className="text-accent-400 text-xs sm:text-sm font-medium">{cert.organization}</p>
                                <span className="text-gray-600 hidden sm:inline">•</span>
                                <p className="text-gray-500 text-xs font-mono truncate">
                                  <span className="hidden sm:inline">ID: </span>
                                  {cert.credentialId.length > 15 
                                    ? `${cert.credentialId.substring(0, 15)}...` 
                                    : cert.credentialId}
                                </p>
                              </div>
                            </div>
                            
                            {/* View Button */}
                            <motion.a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full sm:w-auto text-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 hover:bg-accent-500/20 border border-white/10 hover:border-accent-500/50 rounded-lg text-accent-400 text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 flex-shrink-0"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink size={12} />
                              <span>Verify</span>
                            </motion.a>
                          </div>

                          {/* Skills Tags */}
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                            {cert.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium rounded-full bg-white/5 text-gray-400 border border-white/10 hover:bg-accent-500/10 hover:text-accent-400 hover:border-accent-500/30 transition-all duration-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;