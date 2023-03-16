import About from "@/components/About";
import Background from "@/components/Background";
import Buttons from "@/components/Buttons";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
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
        <meta
          name="description"
          content="
        Baha Eddine is a 23-year-old software engineer hailing from Batna, Algeria. With a passion for coding and a strong technical background, Baha Eddine is well-equipped to tackle complex software engineering projects. With a keen eye for detail and a dedication to delivering high-quality work, Baha Eddine is a valuable asset to any team.
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mypic.ico" />
      </Head>
      <main className="flex flex-col text-white overflow-hidden" ref={ref}>
        <Background />
        <Hero />
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
          <TbBrandReact className="border border-white bg-black rounded-full translate-x-3 translate-y-3" />
        </motion.div>
        <Footer />
      </main>
    </>
  );
}
