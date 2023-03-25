import Image from "next/image";
import mypic from "@/public/mypic.jpg";
import ComputerCanvas from "./canvas/Computer";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import Scroll from "./Scroll";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Baha Eddine"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="mx-auto lg:w-1/2 h-screen">
      <div className="flex justify-center items-center gap-10 mt-20">
        <div className="relative hidden lg:block">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-52 h-52"
          >
            <Image
              src={mypic}
              alt="mypic"
              width={200}
              height={200}
              className="rounded-full border border-white cursor-pointer"
            />
          </motion.div>
          <div className="w-1 h-96 absolute left-1/2 -translate-x-1/2 bg-gradient-to-b from-white via-white to-black -z-10"></div>
          <FaReact className="bg-black absolute left-1/2 -bottom-32 -translate-x-1/2 -translate-y-1/2 text-white text-7xl" />
          <TbBrandTypescript className="bg-black absolute left-1/2 -bottom-56 -translate-x-1/2 -translate-y-1/2 text-white text-6xl" />
          <SiJavascript className="bg-black absolute left-1/2 -bottom-80 -translate-x-1/2 -translate-y-1/2 text-white text-4xl" />
        </div>
        <div className="relative">
          <h1 className="text-white text-2xl lg:text-4xl font-bold ml-10 lg:ml-auto">
            <span className="lg:text-7xl text-4xl">Hi,</span> I&apos;m{" "}
            <span ref={el} className="text-green-500">
              {/* Baha Eddine */}
            </span>
          </h1>
          <p className="text-white lg:w-[500px] ml-10 mt-10 text-lg font-semibold">
            As a software engineer, I specialize in developing efficient,
            reliable, and user-friendly software solutions.
          </p>
          <div className="absolute bottom-[-400px] flex items-center justify-center text-white h-96 w-full lg:w-96">
            <ComputerCanvas />
          </div>
        </div>
      </div>
      <Scroll />
    </section>
  );
};
export default Hero;
