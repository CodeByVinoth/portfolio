  import React, { useState } from 'react';
  import { motion } from 'framer-motion';
  import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

  const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      const { name, email, subject, message } = formData;

      // WhatsApp message content
      const whatsappMessage = `Hello, I'm ${name}.\n\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // Your WhatsApp number (without +, with country code)
      const whatsappNumber = "917010986536";

      // Open WhatsApp chat
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    };

    const contactInfo = [
      {
        icon: Phone,
        label: 'Phone',
        value: '+91 7010986536',
        href: 'tel:+917010986536'
      },
      {
        icon: Mail,
        label: 'Email',
        value: 'vinothkanna122004@gmail.com',
        href: 'mailto:vinothkanna122004@gmail.com'
      },
      {
        icon: MapPin,
        label: 'Location',
        value: ' Namakkal, Tamil Nadu',
        href: '#'
      }
    ];

    const socialLinks = [
      {
        icon: Github,
        label: 'GitHub',
        href: 'https://github.com/CodeByVinoth',
        color: 'hover:text-gray-400'
      },
      {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/vinothkanna-jr',
        color: 'hover:text-blue-400'
      },
      {
        icon: Mail,
        label: 'Email',
        href: 'mailto:vinothkanna122004@gmail.com',
        color: 'hover:text-red-400'
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
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      },
    };

    return (
      <section id="contact" className="py-20 bg-gradient-to-b">
        <div className="container-width section-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Let's Work Together</h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Open to Onsite | Open to Hybrid | Open to Remote opportunities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="mb-8" variants={itemVariants}>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <MessageSquare className="text-accent-500" size={28} />
                  Get In Touch
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Ready to contribute to your next project with clean code and innovative solutions. 
                  I'm always open to discussing new opportunities and interesting projects.
                </p>
              </motion.div>

              {/* Contact Details */}
              <motion.div className="space-y-6 mb-8" variants={itemVariants}>
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      className="flex items-center gap-4 glass-effect rounded-lg p-4 hover-glow"
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="text-accent-500" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        {info.href !== '#' ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-accent-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 glass-effect rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-colors hover-glow`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <IconComponent size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="glass-effect rounded-xl p-8 hover-glow"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 transition-colors"
                        placeholder="Your Name"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 transition-colors"
                      placeholder="Project Discussion"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 transition-colors resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-500 hover:bg-accent-600 disabled:bg-accent-500/50 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover-glow transition-colors"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send via WhatsApp
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;
