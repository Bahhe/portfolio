import { motion } from "framer-motion";
import { TbHandMove } from "react-icons/tb";

const Swipe = ({ show }: { show: boolean }) => {
  if (!show) {
    return <></>;
  }
  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      style={{
        translateX: "50%",
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className="absolute right-1/2 bottom-10 text-3xl lg:hidden"
    >
      <TbHandMove />
    </motion.div>
  );
};
export default Swipe;
