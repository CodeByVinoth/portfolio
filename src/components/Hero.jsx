import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">VINOTHKANNA</span>
                <br />
                
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light">
                Full Stack Developer | Python & Java Enthusiast
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Open to Onsite
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  Open to Hybrid
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  Open to Remote
                </span>
              </div>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Ready to contribute to your next project with clean code and
              innovative solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .querySelector("#projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </motion.button>
<motion.a
  href="/resume.pdf"
  target="_blank"
  className="relative border border-white/20 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold backdrop-blur-md bg-white/10 
             shadow-[0_0_20px_rgba(0,255,200,0.15)] transition-all duration-300 
             hover:shadow-[0_0_35px_rgba(0,255,200,0.45)] hover:border-cyan-400"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <span className="relative z-10">Download Resume</span>
  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 blur-md transition-opacity duration-300 hover:opacity-100"></span>
</motion.a>

            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.a
                href="https://github.com/CodeByVinoth"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 liquid-glass rounded-full flex items-center justify-center hover:bg-accent-500/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/vinothkanna-jr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 liquid-glass rounded-full flex items-center justify-center hover:bg-accent-500/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>

              <motion.a
                href="mailto:vinothkanna122004@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 liquid-glass rounded-full flex items-center justify-center hover:bg-accent-500/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Card with Liquid Glass */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="liquid-glass rounded-2xl p-6 sm:p-8 max-w-sm w-full hover-glow">
              <div className="text-center space-y-6">
                {/* Profile Image */}
                <motion.div
                  className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <img
                    src="/profile.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                     Namakkal, Tamil Nadu
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone size={16} className="text-accent-500" />
                    <span>+91 7010986536</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail size={16} className="text-accent-500" />
                    <span>vinothkanna122004@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin size={16} className="text-accent-500" />
                    <span> Namakkal, Tamil Nadu</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <motion.a
                    href="https://linkedin.com/in/vinothkanna-jr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    LinkedIn Profile
                  </motion.a>
                  <motion.a
                    href="https://github.com/CodeByVinoth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    GitHub Profile
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
