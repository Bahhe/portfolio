import { motion } from "framer-motion";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import { Link } from "react-scroll";

const Scroll = () => {
  return (
    <Link to="about" smooth={true} className="cursor-pointer">
      <motion.div
        animate={{
          y: [0, 24, 0],
        }}
        style={{
          translateX: "50%",
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute right-1/2 bottom-10 text-3xl px-10 pt-10"
      >
        <TfiAngleDoubleDown />
      </motion.div>
    </Link>
  );
};
export default Scroll;
