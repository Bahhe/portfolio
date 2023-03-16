import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Buttons = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setVisible(scrollPosition > currentScrollPosition);
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  if (!visible) return <></>;

  return (
    <div className="fixed top-1 left-1/2 lg:left-[90%] -translate-x-1/2 m-1 text-sm">
      <div className="flex items-center gap-2">
        <motion.button
          onClick={scrollToBottom}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="py-2 px-4 border border-white rounded w-32"
        >
          Contact me
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="py-2 px-4 border border-white rounded w-32"
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
