import { useState } from "react";
import { motion, LayoutGroup, Variants } from "motion/react";

interface CartItem {
  id: number;
  name: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function ShoppingCart() {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: "🍕 Pizza" },
    { id: 2, name: "🍔 Burger" },
    { id: 3, name: "🍣 Sushi" },
    { id: 4, name: "🥗 Salad" },
  ]);

  const moveToTop = (id: number): void => {
    setItems((prev: CartItem[]) => {
      const clickedItem = prev.find((item) => item.id === id);
      const filteredItems = prev.filter((item) => item.id !== id);
      return clickedItem ? [clickedItem, ...filteredItems] : prev;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">click to move</h2>
      <LayoutGroup>
        <motion.div
          className="w-80 space-y-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              variants={itemVariants}
              whileHover={{
                backgroundColor: "rgb(55, 65, 81)",
                transition: { duration: 0.2 },
              }}
              className="p-4 bg-gray-800 rounded-lg shadow-lg flex justify-between cursor-pointer"
              onClick={() => moveToTop(item.id)}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 25,
              }}
              style={{ height: "50px", overflow: "hidden" }} // Added fixed height and overflow hidden
            >
              <motion.span
                layoutId={`item-name-${item.id}`}
                style={{ fontSize: "1rem" }}
              >
                {" "}
                {/* Adjusted font size */}
                {item.name}
              </motion.span>
              <motion.span className="text-gray-400">⬆️</motion.span>
            </motion.div>
          ))}
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
