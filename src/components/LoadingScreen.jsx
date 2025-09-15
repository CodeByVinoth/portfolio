import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #FF5733"
  },
  visible: {
    opacity: 1,
    y: 0,
    textShadow: "0 0 0px #fff", // Animate the shadow out
    transition: {
      duration: 0.8,
      ease: "easeOut"
    },
  },
};

const ParticleLoader = () => {
  const name = "VINOTHKANNA".split("");

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {name.map((char, index) => (
          <motion.span
            key={index}
            className="text-white text-4xl md:text-6xl font-extrabold tracking-widest leading-none"
            variants={textVariants}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ParticleLoader;