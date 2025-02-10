import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export const TransitionDemo = function () {
  const [count, setCount] = useState<number>(0);

  const increaseCount = function () {
    setCount((oldCount) => ++oldCount);
  };

  const decreaseCount = function () {
    if (count > 0) setCount((oldCount) => --oldCount);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-row space-x-3 items-center">
        <Badge>{count}</Badge>
        <Button variant={"default"} size={"icon"} onClick={increaseCount}>
          🔺
        </Button>
        <Button variant={"default"} size={"icon"} onClick={decreaseCount}>
          🔻
        </Button>
      </div>
      <motion.div
        className="text-4xl"
        initial={{ x: -100 }}
        animate={count > 0 && { x: 0, rotate: 180 }}
        transition={{ duration: 1 }}
      >
        ⚽️
      </motion.div>
    </div>
  );
};
