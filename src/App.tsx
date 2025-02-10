import { motion } from "motion/react";
import "./App.css";
import { Basics } from "./components/LO/1_basics";
import { TestingMotionButton } from "./components/LO/2_motion-button";
import { AnimatedDiv } from "./components/LO/3_animate";
import { MotionWithInitial } from "./components/LO/4_initial";
import { TransitionDemo } from "./components/LO/5_transition";
import { EasingDemo } from "./components/LO/6_easing";
import ShoppingCart from "./components/LO/layout_group";
import { Separator } from "./components/ui/separator";

const MotionSeparator = motion.create(Separator);

const AnimatedSeparator = () => (
  <MotionSeparator
    initial={{ x: "-100%" }}
    whileInView={{ x: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
  />
);

function App() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <Basics />
      <AnimatedSeparator />
      <TestingMotionButton />
      <AnimatedSeparator />

      <AnimatedDiv />
      <AnimatedSeparator />

      <MotionWithInitial />
      <AnimatedSeparator />

      <ShoppingCart />
      <AnimatedSeparator />
      <TransitionDemo />
      <AnimatedSeparator />
      <EasingDemo />
      <AnimatedSeparator />
      <AnimatedSeparator />
      <AnimatedSeparator />
      <AnimatedSeparator />
      <AnimatedSeparator />
    </div>
  );
}

export default App;
