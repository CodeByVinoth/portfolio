import React from "react";
import { motion } from "framer-motion";

const blobs = [
  { color: "bg-pink-500", size: "w-72 h-72", x: -200, y: -100, delay: 0 },
  { color: "bg-purple-500", size: "w-96 h-96", x: 150, y: 100, delay: 1 },
  { color: "bg-blue-500", size: "w-80 h-80", x: -100, y: 200, delay: 2 },
];

const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`${b.color} ${b.size} rounded-full mix-blend-multiply filter blur-3xl opacity-30 absolute`}
          initial={{ x: b.x, y: b.y }}
          animate={{
            x: [b.x, b.x + 100, b.x - 100, b.x],
            y: [b.y, b.y - 100, b.y + 100, b.y],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffect;
