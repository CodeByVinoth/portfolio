import React from "react";
import { motion } from "framer-motion";

export default function PortfolioBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Sophisticated Dark Base */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(30, 41, 59, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(15, 23, 42, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(17, 24, 39, 0.4) 0%, transparent 50%),
            linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f172a 75%, #000000 100%)
          `
        }}
        animate={{
          backgroundPosition: [
            "20% 30%, 80% 20%, 20% 80%",
            "80% 70%, 20% 80%, 80% 20%",
            "20% 30%, 80% 20%, 20% 80%"
          ]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Monochrome 3D Cube Matrix */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`cube-${i}`}
          className="absolute border"
          style={{
            width: `${40 + (i % 3) * 20}px`,
            height: `${40 + (i % 3) * 20}px`,
            top: `${(Math.floor(i / 5) * 25) + 10}%`,
            left: `${(i % 5) * 20 + 5}%`,
            borderColor: `rgba(148, 163, 184, ${0.1 + (i % 3) * 0.05})`,
            background: `linear-gradient(45deg, 
              rgba(51, 65, 85, 0.05), 
              rgba(30, 41, 59, 0.05), 
              rgba(15, 23, 42, 0.05)
            )`,
            backdropFilter: "blur(1px)",
          }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, -360],
            rotateZ: [0, 180],
            scale: [1, 1.2, 0.8, 1],
            borderColor: [
              `rgba(148, 163, 184, ${0.1 + (i % 3) * 0.05})`,
              `rgba(203, 213, 225, ${0.15 + (i % 3) * 0.05})`,
              `rgba(100, 116, 139, ${0.1 + (i % 3) * 0.05})`,
              `rgba(148, 163, 184, ${0.1 + (i % 3) * 0.05})`
            ],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <div className="absolute inset-2 border border-white/5 rotate-45" />
          <div className="absolute inset-1 bg-gradient-to-br from-slate-500/5 to-transparent rounded" />
        </motion.div>
      ))}

      {/* Subtle Energy Waves */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`plasma-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${300 + i * 100}px`,
            height: `${300 + i * 100}px`,
            background: `radial-gradient(circle, 
              rgba(59, 130, 246, ${0.08 + i * 0.02}) 0%,
              rgba(147, 197, 253, ${0.05 + i * 0.01}) 30%,
              rgba(30, 41, 59, ${0.03 + i * 0.01}) 60%,
              transparent 100%
            )`,
            top: `${20 + i * 10}%`,
            left: `${-10 + i * 15}%`,
            filter: `blur(${30 + i * 10}px)`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.3, 0.8],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 100 * Math.sin(i), 0],
            y: [0, 50 * Math.cos(i), 0],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Elegant DNA Helix */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(20)].map((_, i) => {
          const progress = i / 20;
          const y1 = 10 + progress * 80;
          const y2 = y1 + 2;
          const x1 = 50 + 20 * Math.sin(progress * Math.PI * 4);
          const x2 = 50 - 20 * Math.sin(progress * Math.PI * 4);
          return (
            <g key={`dna-${i}`}>
              <motion.circle
                cx={`${x1}%`}
                cy={`${y1}%`}
                r="2"
                fill={i % 2 === 0 ? "rgba(148, 163, 184, 0.6)" : "rgba(203, 213, 225, 0.4)"}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
              <motion.circle
                cx={`${x2}%`}
                cy={`${y2}%`}
                r="2"
                fill={i % 2 === 0 ? "rgba(203, 213, 225, 0.4)" : "rgba(148, 163, 184, 0.6)"}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.2 + 0.1,
                  ease: "easeInOut"
                }}
              />
              <motion.line
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="rgba(148, 163, 184, 0.2)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Refined Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`quantum-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 3 === 0 
              ? "rgba(148, 163, 184, 0.8)" 
              : i % 3 === 1 
              ? "rgba(203, 213, 225, 0.6)" 
              : "rgba(100, 116, 139, 0.7)",
            boxShadow: `0 0 ${8 + Math.random() * 12}px ${
              i % 3 === 0 
                ? "rgba(148, 163, 184, 0.4)" 
                : i % 3 === 1 
                ? "rgba(203, 213, 225, 0.3)" 
                : "rgba(100, 116, 139, 0.3)"
            }`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [
              0, 
              (Math.random() - 0.5) * 300,
              (Math.random() - 0.5) * 300,
              0
            ],
            y: [
              0,
              (Math.random() - 0.5) * 300,
              (Math.random() - 0.5) * 300,
              0
            ],
            scale: [0, 2, 1, 0],
            opacity: [0, 0.8, 0.4, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 10,
          }}
        />
      ))}

      {/* Sophisticated Grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(148, 163, 184, 0.03) 25%, rgba(148, 163, 184, 0.03) 26%, transparent 27%, transparent 74%, rgba(203, 213, 225, 0.02) 75%, rgba(203, 213, 225, 0.02) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(100, 116, 139, 0.03) 25%, rgba(100, 116, 139, 0.03) 26%, transparent 27%, transparent 74%, rgba(148, 163, 184, 0.02) 75%, rgba(148, 163, 184, 0.02) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '80px 80px'
        }}
        animate={{
          backgroundPosition: [
            "0px 0px, 0px 0px",
            "80px 80px, 80px 80px",
            "0px 0px, 0px 0px"
          ],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Minimal Data Streams */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute"
          style={{
            width: "1px",
            height: "100vh",
            background: `linear-gradient(to bottom, 
              transparent 0%, 
              rgba(148, 163, 184, ${0.3 + i * 0.05}) 20%, 
              rgba(203, 213, 225, ${0.2 + i * 0.03}) 50%,
              rgba(100, 116, 139, ${0.2 + i * 0.03}) 80%, 
              transparent 100%
            )`,
            left: `${15 + i * 15}%`,
            filter: `blur(0.5px)`,
            boxShadow: `0 0 10px rgba(148, 163, 184, ${0.2 + i * 0.02})`,
          }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            scaleY: [0, 1, 1, 0],
            x: [0, Math.sin(i) * 30, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2,
          }}
        />
      ))}

      {/* Elegant Geometric Portals */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`portal-${i}`}
          className="absolute border opacity-15"
          style={{
            width: `${150 + i * 50}px`,
            height: `${150 + i * 50}px`,
            top: `${20 + i * 20}%`,
            right: `${10 + i * 15}%`,
            borderColor: `rgba(148, 163, 184, ${0.3 + i * 0.1})`,
            borderWidth: '1px',
            background: `linear-gradient(${i * 45}deg,
              rgba(51, 65, 85, 0.05),
              rgba(30, 41, 59, 0.08),
              rgba(15, 23, 42, 0.05)
            )`,
            backdropFilter: "blur(2px)",
          }}
          animate={{
            borderRadius: [
              "0% 0% 0% 0%",
              "30% 0% 30% 0%",
              "30% 30% 30% 30%",
              "0% 30% 0% 30%",
              "0% 0% 0% 0%"
            ],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 0.9, 1.05, 1],
            borderColor: [
              `rgba(148, 163, 184, ${0.3 + i * 0.1})`,
              `rgba(203, 213, 225, ${0.4 + i * 0.1})`,
              `rgba(100, 116, 139, ${0.3 + i * 0.1})`,
              `rgba(148, 163, 184, ${0.3 + i * 0.1})`
            ],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 3,
          }}
        >
          <div className="absolute inset-4 border border-white/10 rounded-full" />
          <div className="absolute inset-8 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full" />
        </motion.div>
      ))}

      {/* Subtle Lightning Effects */}
      <svg className="absolute inset-0 w-full h-full opacity-25">
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={`lightning-${i}`}
            d={`M${20 + i * 20},${20 + i * 15} Q${40 + i * 15},${60 + i * 10} ${60 + i * 20},${40 + i * 20} T${80 + i * 10},${80 + i * 15}`}
            stroke={i % 2 === 0 ? "rgba(148, 163, 184, 0.6)" : "rgba(203, 213, 225, 0.4)"}
            strokeWidth="1"
            fill="none"
            filter={`drop-shadow(0 0 8px ${i % 2 === 0 ? "rgba(148, 163, 184, 0.3)" : "rgba(203, 213, 225, 0.2)"})`}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Refined Pulsating Core */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full"
        style={{
          background: `radial-gradient(circle,
            rgba(203, 213, 225, 0.05) 0%,
            rgba(148, 163, 184, 0.08) 25%,
            rgba(100, 116, 139, 0.06) 50%,
            rgba(51, 65, 85, 0.04) 75%,
            transparent 100%
          )`,
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 360],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Minimal Glitch Overlay */}
      <motion.div
        className="absolute inset-0 mix-blend-overlay opacity-10"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(148, 163, 184, 0.02) 2px,
            rgba(148, 163, 184, 0.02) 4px
          )`
        }}
        animate={{
          x: [0, 2, -2, 0],
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </div>
  );
}