import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Technical Expertise', href: '#skills' },
    { name: 'Featured Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/CodeByVinoth',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/vinothkanna-jr',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:vinothkanna122004@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-900/20 border-t border-white/10">
      <div className="container-width section-padding py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">VINOTHKANNA J R</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Full Stack Developer | Python & Java Enthusiast
            </p>
            <p className="text-gray-400 text-sm mb-6 max-w-md">
              Ready to contribute with clean code and innovative solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-500/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="text-accent-500" />
                <a 
                  href="mailto:vinothkanna122004@gmail.com"
                  className="hover:text-accent-400 transition-colors"
                >
                  vinothkanna122004@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="w-4 h-4 flex items-center justify-center">📱</span>
                <a 
                  href="tel:+917010986536"
                  className="hover:text-accent-400 transition-colors"
                >
                  +91 7010986536
                </a>
              </div>
              <div className="flex items-start gap-2 text-gray-400">
                <span className="w-4 h-4 flex items-center justify-center mt-0.5">📍</span>
                <span>Namakkal, Tamil Nadu</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © {currentYear} Vinothkanna J R. All rights reserved. Made with 
            <Heart size={16} className="text-red-500" fill="currentColor" />
            and lots of coffee.
          </p>
{/* 
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-accent-400 transition-colors text-sm"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top
            <ArrowUp size={16} />
          </motion.button> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;