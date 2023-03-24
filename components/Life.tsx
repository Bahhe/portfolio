import { GiBarbarian, GiDiploma, GiNewBorn } from "react-icons/gi";
import { TbSchoolOff } from "react-icons/tb";
import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";
import Swipe from "./Swipe";
import { useState } from "react";
import { isMobile } from "react-device-detect";

const Life = () => {
  const [show, setShow] = useState(true);

  const handleScroll = () => {
    setShow(false);
  };

  return (
    <section className="relative w-3/4 md:w-5/6 mx-auto lg:my-20">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true, amount: 0 }}
        className="flex items-center gap-5 mt-20 lg:mt-0"
      >
        <GiBarbarian className="text-3xl text-green-500" />
        <h1 className="text-white text-5xl font-bold capitalize">My Life</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        viewport={{ once: true, amount: 0 }}
        className="h-[600px] lg:h-[700px] xl:overflow-hidden overflow-x-scroll overflow-y-hidden px-28 xl:px-0"
        onScroll={handleScroll}
      >
        <div className="relative xl:w-3/4 lg:mx-auto w-[1500px] h-1 bg-gradient-to-l from-black via-white to-black mt-40 lg:mb-96 rounded-full">
          <motion.div
            style={{
              bottom: "50%",
              translateY: "50%",
            }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
            viewport={{ once: true, amount: 0 }}
            className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full absolute bottom-1/2 translate-y-1/2 border border-white"
          >
            <GiNewBorn className="text-2xl" />
          </motion.div>
          <motion.div
            style={{
              top: "50%",
              translateY: "-50%",
              translateX: "-50%",
            }}
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            viewport={{ once: true, amount: 0 }}
            className="cursor-pointer bg-black flex items-center justify-center  w-10 h-10 rounded-full absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[30%] md:left-[32%] border border-white "
          >
            <TbSchoolOff className="text-2xl" />
          </motion.div>
          <motion.div
            style={{
              top: "50%",
              translateY: "-50%",
              translateX: "-50%",
            }}
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5, type: "spring" }}
            viewport={{ once: true, amount: 0 }}
            className="cursor-pointer bg-black flex items-center justify-center  w-10 h-10 rounded-full absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[60%] md:left-[65%]  border border-white "
          >
            <GiDiploma className="text-2xl" />
          </motion.div>
          <motion.div
            style={{
              top: "50%",
              translateY: "-50%",
              translateX: "-50%",
            }}
            initial={{ x: -400, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.5, type: "spring" }}
            viewport={{ once: true, amount: 0 }}
            className="cursor-pointer bg-black flex items-center justify-center  w-10 h-10 rounded-full absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[100%] border border-white "
          >
            <MdWork className="text-2xl" />
          </motion.div>
          <p className="absolute -top-16 left-5 -translate-x-1/2">
            9 August 1999
          </p>
          <p className="absolute -top-16 left-[32%] md:left-[35%] w-32 -translate-x-1/2">
            May 2017
          </p>
          <p className="absolute -top-16 left-[60%] md:left-[65%] -translate-x-1/2">
            May 2020
          </p>
          <p className="absolute -top-16 left-[100%] w-32 -translate-x-1/2">
            currently - 2024
          </p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
            viewport={{ once: true, amount: 0 }}
            style={{
              bottom: "-16rem",
              left: "1.25rem",
              translateX: "-50%",
            }}
            className="absolute -bottom-64 left-5 -translate-x-1/2 w-56 p-5 border border-white rounded-lg backdrop-blur"
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-white border-r-[20px] border-r-transparent"></div>
            <p>
              Software engineer born 09 Aug 1999 in Batna, Algeria. Batna is a
              city in Algeria known for its strategic location in the Atlas
              Mountains and its Roman heritage.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            viewport={{ once: true, amount: 0 }}
            style={{
              bottom: "-1100%",
              left: isMobile ? "30%" : "32%",
              translateX: "-50%",
              translateY: "100%",
            }}
            className="absolute -bottom-[1100%] translate-y-[100%] left-[30%] md:left-[32%] -translate-x-1/2 w-96 lg:w-80 p-5 border border-white rounded-lg backdrop-blur"
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-white border-r-[20px] border-r-transparent"></div>
            <p>
              During my high school years, I made the decision to not complete
              my education as I felt that traditional schooling was not the best
              fit for me and that it was a waste of my time. Despite this, I
              have continued to pursue my interests and develop my skills
              through self-directed learning, online courses, and practical
              experience. I recognize the value of education and am constantly
              seeking opportunities to expand my knowledge and expertise in my
              chosen field. Through my experiences, I have learned the
              importance of finding a learning approach that works for me and am
              committed to ongoing personal and professional growth.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5, type: "spring" }}
            viewport={{ once: true, amount: 0 }}
            style={{
              bottom: "-1100%",
              left: isMobile ? "60%" : "65%",
              translateX: "-50%",
              translateY: "100%",
            }}
            className="absolute -bottom-[1100%] translate-y-[100%] left-[60%] md:left-[65%] -translate-x-1/2 w-96 lg:w-72 p-5 border border-white rounded-lg backdrop-blur"
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-white border-r-[20px] border-r-transparent"></div>
            <p>
              I obtained a diploma in PC repair technology from an institute,
              after completing a two-year program of study.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.5, type: "spring" }}
            viewport={{ once: true, amount: 0 }}
            style={{
              bottom: "-1100%",
              left: "100%",
              translateX: "-50%",
              translateY: "100%",
            }}
            className="absolute -bottom-[1100%] translate-y-[100%] left-[100%] -translate-x-1/2 w-96 lg:w-80 p-5 border border-white rounded-lg backdrop-blur"
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-white border-r-[20px] border-r-transparent"></div>
            <p>
              With my year of self-directed learning in software engineering
              through online resources, I now feel confident in my ability to
              apply my knowledge to real-world projects. This experience has
              provided me with valuable practical skills and the ability to
              successfully complete a variety of projects.
            </p>
          </motion.div>
        </div>
        <Swipe show={show} />
      </motion.div>
    </section>
  );
};

export default Life;
