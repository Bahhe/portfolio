import Image from "next/image";
import mypic from "@/public/mypic.jpg";
import ComputerCanvas from "./canvas/Computer";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";

const LandingSection = () => {
  return (
    <section className="mx-auto w-1/2 h-screen">
      <div className="flex justify-center items-center gap-10 mt-20">
        <div className="relative">
          <Image
            src={mypic}
            alt="mypic"
            width={200}
            height={200}
            className="rounded-full border border-white"
          />
          <div className="w-1 h-96 absolute left-1/2 -translate-x-1/2 bg-gradient-to-b from-white via-white to-black"></div>
          <FaReact className=" bg-black absolute left-1/2 -bottom-32 -translate-x-1/2 -translate-y-1/2 text-white text-7xl" />
          <TbBrandTypescript className=" bg-black absolute left-1/2 -bottom-56 -translate-x-1/2 -translate-y-1/2 text-white text-6xl" />
          <SiJavascript className=" bg-black absolute left-1/2 -bottom-80 -translate-x-1/2 -translate-y-1/2 text-white text-4xl" />
        </div>
        <div className="relative">
          <h1 className="text-white text-4xl font-bold">
            <span className="text-7xl">Hi,</span> I&apos;m{" "}
            <span className="text-green-500">Baha Eddine</span>
          </h1>
          <p className="text-white w-[500px] ml-10 mt-10 text-lg font-semibold">
            As a software engineer, I specialize in developing efficient,
            reliable, and user-friendly software solutions.
          </p>
          <div className="absolute bottom-[-500px] flex items-center justify-center text-white h-96 w-96">
            <ComputerCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};
export default LandingSection;
