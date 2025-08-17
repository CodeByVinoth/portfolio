import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Calendar, MapPin, Trophy, Users, FileText } from 'lucide-react';

const Experience = () => {
  const workExperience = [
    {
      title: 'Software Developer Intern',
      company: 'Wattstrons',
      period: 'Aug 2025 - Present',
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
    <section id="experience" className="py-20 bg-primary-900/10">
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
                    <div className="absolute -left-3 top-8 w-6 h-6 bg-accent-500 rounded-full border-4 border-black" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-1">{job.title}</h4>
                        <p className="text-accent-400 font-medium mb-2">{job.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                          <Calendar size={16} />
                          {job.period}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <MapPin size={16} />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                          {responsibility}
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
                      <div className="text-2xl font-bold text-accent-400 mb-2">{item.score}</div>
                      <div className="text-sm text-gray-400">{item.level}</div>
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

            {/* Certifications */}
            <motion.div className="mt-12" variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-6">Certifications</h3>
              <div className="space-y-4">
                <div className="glass-effect rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">Java Programming</p>
                      <p className="text-gray-400 text-sm">Wipro</p>
                    </div>
                    <motion.a
                      href="https://cert.diceid.com/cid/9z7MzHvmmF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-400 hover:text-accent-300 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      View Certificate
                    </motion.a>
                  </div>
                </div>

                <div className="glass-effect rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">Python Programming</p>
                      <p className="text-gray-400 text-sm">Certiport</p>
                    </div>
                    <motion.a
                      href="https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=471&cvid=ApQqnS634DUgcKNAgabfEA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-400 hover:text-accent-300 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      View Certificate
                    </motion.a>
                  </div>
                </div>

                <div className="glass-effect rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">Django Development</p>
                      <p className="text-gray-400 text-sm">Udemy</p>
                    </div>
                    <motion.a
                      href="https://ude.my/UC-b2c0ab44-4ff5-4b78-8477-ba9a0227d57a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-400 hover:text-accent-300 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      View Certificate
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;