import { motion } from "framer-motion";
import ToTopIcon from "./icons/ToTopIcon";

const ToTop = () => {
  return (
    <motion.button
      initial={{ scale: 1, y: 0 }}
      animate={{
        scale: [1, 1.1, 1],
        y: [0, -7, 0],
        transition: { duration: 1, repeat: Infinity },
      }}
      type="button"
      className=" fixed bottom-12 right-10 maxSm:bottom-3 maxSm:right-3 p-2 z-50 bg-black/50 glass-effect  text-white rounded-full shadow-чд"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ToTopIcon />
    </motion.button>
  );
};

export default ToTop;
