import { motion } from "motion/react";
import { Button } from "../ui/button";
import { useState } from "react";

export const Basics = function () {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setIsAnimated(true)}>Animate</Button>
      <motion.div initial={{ x: "0%" }} animate={isAnimated && { x: "50%" }}>
        <div className="text-3xl bg-accent">Hello Framer.</div>
      </motion.div>
    </>
  );
};
