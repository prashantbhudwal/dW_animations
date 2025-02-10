import { motion } from "motion/react";
import { Button } from "../ui/button";

const MotionButton = motion(Button);

export const TestingMotionButton = function () {
  return <MotionButton whileHover={{ scale: 1.5 }}>Motion Button</MotionButton>;
};
