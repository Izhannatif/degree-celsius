import { motion, usePresence } from "framer-motion";
import { useEffect } from "react";

// values for right to left transition
const variants = {
  initial: {
    y: "100vh",
},
animate: {
    y: 0,
},
exit: {
    y: "-100vh",
    opacity: 0,
},
};

const PageTransition = ({ children }) => {
  const [isPresent, safeToRemove] = usePresence();
  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent]);
  return (
    <motion.div
      {...variants}
      transition={{ duration: 0.5 }}
      // style={{ position: "absolute" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

