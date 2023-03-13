import About from "@/components/About";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import LandingSection from "@/components/LandingSection";
import Life from "@/components/Life";
import Projects from "@/components/Projects";
// import { useFollowPointer } from "@/hooks/use-follow-pointer";
// import { motion } from "framer-motion";
import Head from "next/head";
// import { useRef } from "react";

export default function Home() {
  // const ref = useRef(null);
  // const { x, y } = useFollowPointer(ref);
  return (
    <>
      <Head>
        <title>Portfolio | Baha Eddine</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col text-white">
        <Background />
        <LandingSection />
        <About />
        <Life />
        <Projects />
        <Contact />
        {/* <motion.div */}
        {/*   className="w-10 h-10 rounded-full bg-red-500 absolute" */}
        {/*   ref={ref} */}
        {/*   animate={{ x, y }} */}
        {/*   transition={{ */}
        {/*     type: "spring", */}
        {/*     damping: 3, */}
        {/*     stiffness: 50, */}
        {/*     restDelta: 0.001, */}
        {/*   }} */}
        {/* /> */}
      </main>
    </>
  );
}