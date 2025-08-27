"use client";

import React, { memo, useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LightingProps {
  staticOnly?: boolean;
  starCount?: number;
  nebula?: boolean;
  nebulaOpacity?: number;
  starAnimRange?: {
    animY?: [number, number];
    animX?: [number, number];
  };
}

const Lighting = memo(function Lighting({
  staticOnly = false,
  starCount = 30, // Reduced from 250
  nebula = true,
  nebulaOpacity = 0.08, // Reduced from 0.3
  starAnimRange,
}: LightingProps) {
  const [animationsReady, setAnimationsReady] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  // Progressive loading of animations
  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 100);

    const animTimer = setTimeout(() => {
      setAnimationsReady(true);
    }, 300);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(animTimer);
    };
  }, []);

  // Memoize expensive calculations
  const stars = useMemo(() => {
    if (!contentLoaded) return []; // Don't generate stars until content is loaded

    const colorOptions = ["#ffffff", "#cceeff", "#fffacd"];
    const animYRange = starAnimRange?.animY || [-1, 2];
    const animXRange = starAnimRange?.animX || [-1, 1];

    return Array.from({ length: starCount }, (_, i) => {
      const size = Math.random() * 2 + 1;
      const blur = Math.random() > 0.8 ? "1px" : "0px";
      const color =
        colorOptions[Math.floor(Math.random() * colorOptions.length)];

      return {
        id: i,
        size,
        blur,
        color,
        top: Math.random() * 200,
        left: Math.random() * 100,
        animY: [
          Math.random() * (animYRange[0] - animYRange[1]) + animYRange[1],
          Math.random() * (animYRange[0] - animYRange[1]) + animYRange[1],
          Math.random() * (animYRange[0] - animYRange[1]) + animYRange[1],
        ],
        animX: [
          Math.random() * (animXRange[0] - animXRange[1]) + animXRange[1],
          Math.random() * (animXRange[0] - animXRange[1]) + animXRange[1],
          Math.random() * (animXRange[0] - animXRange[1]) + animXRange[1],
        ],
        duration: Math.random() * 4 + 3, // Reduced from 10+5
        delay: Math.random() * 2,
      };
    });
  }, [starCount, starAnimRange, contentLoaded]);

  if (staticOnly) {
    return (
      <div className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Static Starry Sky, no nebula, no animation */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}vh`,
              left: `${star.left}vw`,
              backgroundColor: star.color,
              filter: `blur(${star.blur})`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Simplified Nebula Effect - Progressive loading */}
      {nebula && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 transition-opacity duration-1000"
          style={{ opacity: contentLoaded ? nebulaOpacity : 0 }}
        />
      )}

      {/* Progressive Stars Loading */}
      {contentLoaded &&
        stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}vh`,
              left: `${star.left}vw`,
              backgroundColor: star.color,
              filter: `blur(${star.blur})`,
            }}
            initial={{ opacity: 0 }}
            animate={
              animationsReady
                ? {
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }
                : {
                    opacity: 0.5,
                  }
            }
            transition={
              animationsReady
                ? {
                    duration: star.duration,
                    repeat: Infinity,
                    delay: star.delay,
                    ease: "easeInOut",
                  }
                : {
                    duration: 0.5,
                    delay: star.delay * 0.1,
                  }
            }
          />
        ))}
    </div>
  );
});

export default Lighting;
