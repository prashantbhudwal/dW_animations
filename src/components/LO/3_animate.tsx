import { motion } from "motion/react";
import { useState } from "react";
import colors from "tailwindcss/colors"; // Import Tailwind color object

export const AnimatedDiv = function () {
  const [isAnimated, setIsAnimated] = useState(false);
  return (
    <motion.div
      className="flex flex-col items-center justify-center rounded-full bg-slate-900 select-none cursor-pointer rotate-45"
      animate={{
        scale: isAnimated ? 1.1 : 1,
        backgroundColor: isAnimated
          ? colors.yellow["400"]
          : colors.yellow["200"],
      }}
      transition={{ duration: 1 }}
      onClick={() => setIsAnimated((prevValue) => !prevValue)}
    >
      <motion.div
        className="text-6xl p-4"
        animate={{
          translateY: isAnimated ? -200 : 0,
          translateX: isAnimated ? 200 : 0,
        }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        🚀
      </motion.div>
    </motion.div>
  );
};
