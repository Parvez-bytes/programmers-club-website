import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
} from "motion/react";

import { cn } from "../../lib/utils";

export const CardSpotlight = ({
  children,
  radius = 180,
  color = "#262626",
  className,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    const { currentTarget, clientX, clientY } = event;

    const { left, top } =
      currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      className={cn(
        `
        group/spotlight
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-7
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-white/20
        `,
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      {/* Spotlight */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -inset-px
          z-0
          rounded-2xl
          opacity-0
          transition
          duration-300
          group-hover/spotlight:opacity-100
        "
        style={{
          backgroundColor: color,

          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at
              ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at
              ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};