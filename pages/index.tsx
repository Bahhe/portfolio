import About from "@/components/About";
import Background from "@/components/Background";
import Buttons from "@/components/Buttons";
import Contact from "@/components/Contact";
import LandingSection from "@/components/LandingSection";
import Life from "@/components/Life";
import Projects from "@/components/Projects";
import { useVariants } from "@/hooks/use-mouse-tracker";
import { motion, spring } from "framer-motion";
import Head from "next/head";
import { useRef } from "react";
import { TbBrandReact } from "react-icons/tb";

export default function Home() {
  const ref = useRef(null);

  const variants = useVariants(ref);
  return (
    <>
      <Head>
        <title>Portfolio | Baha Eddine</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col text-white overflow-hidden" ref={ref}>
        <Background />
        <LandingSection />
        <About />
        <Life />
        <Projects />
        <Contact />
        <Buttons />
        <motion.div
          variants={variants}
          className="circle"
          animate="default"
          transition={spring}
        >
          <TbBrandReact className=" border border-white bg-black rounded-full" />
        </motion.div>
      </main>
    </>
  );
}
