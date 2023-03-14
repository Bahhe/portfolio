import { motion } from "framer-motion";

const Buttons = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed top-1 right-5 m-1">
      <div>
        <motion.button
          onClick={scrollToBottom}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="py-2 px-4 border border-white rounded mr-5"
        >
          Contact me
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="py-2 px-4 border border-white rounded"
        >
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1YwO41QGgIVKbG7VCC7mEcg78DDoGuGFbn04rOn4K_k4/edit?usp=sharing"
          >
            Download PDF
          </a>
        </motion.button>
      </div>
    </div>
  );
};

export default Buttons;
