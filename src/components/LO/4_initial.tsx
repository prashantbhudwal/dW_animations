import { motion } from "motion/react";

export const MotionWithInitial = function () {
  return (
    <motion.div initial={{}} className="rounded-full p-8">
      <div className="text-5xl">🐯</div>
    </motion.div>
  );
};
