import Image from "next/image";
import projectOne from "@/public/projectOne.png";
import projectTwo from "@/public/projectTwo.png";
import projectThree from "@/public/projectThree.png";
import Link from "next/link";
import { VscGithub, VscProject } from "react-icons/vsc";
import { SiExpress, SiMongodb, SiOpenai, SiTrpc } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import { FaNodeJs, FaReact } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="w-5/6 mx-auto mt-10">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center gap-5 my-20"
      >
        <VscProject className="text-3xl text-green-500" />
        <h1 className="text-white text-5xl font-bold capitalize">Projects</h1>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true, amount: 0 }}
        className="w-5/6 lg:w-1/2 text-lg lg:ml-28 mb-20"
      >
        <p>
          Here are two projects that I built one with MERN and the other with
          the T3-Stack that offers a user-friendly interface, advanced features,
          and a seamless shopping experience for customers. The website is
          optimized for speed, security, and scalability, and has a responsive
          design that can be accessed on any device. It also includes an admin
          panel for managing the products, inventory, and customer orders, as
          well as features like user authentication, product search, cart
          functionality, and secure payment options, including the third chatbot
          small project that uses OpenAI api.
        </p>
      </motion.div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
        <Tilt>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:w-96 w-72 h-[500px] border border-white rounded backdrop-blur"
          >
            <a
              href="https://blackbeard-beta.vercel.app/"
              target="_blank"
              className="h-2/5 p-5 flex items-center justify-center"
            >
              <Image
                src={projectOne}
                alt="website picture"
                className="object-cover rounded"
              />
            </a>
            <div className="mx-4 my-2 flex items-center gap-2 text-2xl">
              <SiTrpc />
              <TbBrandNextjs />
              <TbBrandTypescript />
              <TbBrandTailwind />
            </div>
            <div className="h-1/2 flex flex-col justify-evenly">
              <h1 className="mx-4 my-2 text-2xl font-bold capitalize">
                BlackBeard-v2
              </h1>
              <p className="mx-4 my-2">
                An ecommerce website that sells laptops offers a wide range of
                laptop models with detailed descriptions, secure checkout, and
                customer support for an enhanced shopping experience.
              </p>
              <div className="mx-4 my-2 flex items-center justify-between">
                <p className="font-bold">
                  Built with: <span className="text-green-500">T3-stack</span>
                </p>
                <p className="font-bold flex items-center gap-2">
                  Github repo{" --> "}
                  <Link
                    href="https://github.com/Bahhe/blackbeard"
                    className="text-green-500"
                  >
                    <VscGithub className="text-2xl" />
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </Tilt>
        <Tilt>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:w-96 w-72 h-[500px] border border-white rounded backdrop-blur"
          >
            <a
              href="https://blackbeardt.store"
              target="_blank"
              className="h-2/5 p-5 flex items-center justify-center"
            >
              <Image
                src={projectTwo}
                alt="website picture"
                className="object-cover rounded"
              />
            </a>
            <div className="mx-4 my-2 flex items-center gap-2 text-2xl">
              <FaNodeJs />
              <SiMongodb />
              <SiExpress />
              <FaReact />
            </div>
            <div className="h-1/2 flex flex-col justify-evenly">
              <h1 className="mx-4 my-2 text-2xl font-bold capitalize">
                BlackBeard
              </h1>
              <p className="mx-4 my-2">
                An ecommerce website that sells laptops offers a wide range of
                laptop models with detailed descriptions, secure checkout, and
                customer support for an enhanced shopping experience.
              </p>
              <div className="mx-4 my-2 flex items-center justify-between">
                <p className="font-bold">
                  Built with: <span className="text-green-500">MERN</span>
                </p>
                <p className="font-bold flex items-center gap-2">
                  Github repo{" --> "}
                  <Link
                    href="https://github.com/Bahhe/webstore-frontend"
                    className="text-green-500"
                  >
                    <VscGithub className="text-2xl" />
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </Tilt>
        <Tilt>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:w-96 w-72 h-[500px] border border-white rounded backdrop-blur"
          >
            <a
              href="https://brainstorm-ai.vercel.app/"
              target="_blank"
              className="h-2/5 p-5 flex items-center justify-center"
            >
              <Image
                src={projectThree}
                alt="website picture"
                className="object-cover rounded"
              />
            </a>
            <div className="mx-4 my-2 flex items-center gap-2 text-2xl">
              <TbBrandNextjs />
              <TbBrandTypescript />
              <SiOpenai />
            </div>
            <div className="h-1/2 flex flex-col justify-evenly">
              <h1 className="mx-4 my-2 text-2xl font-bold capitalize">
                BrainstormAi
              </h1>
              <p className="mx-4 my-2">
                chatbot app powered by OpenAI&apos;s GPT-3.5 model. This
                intelligent conversational agent can understand and respond to
                natural language inputs from users with a high degree of
                accuracy.
              </p>
              <div className="mx-4 my-2 flex items-center justify-between">
                <p className="font-bold">
                  Built with: <span className="text-green-500">Next.JS</span>
                </p>
                <p className="font-bold flex items-center gap-2">
                  Github repo{" --> "}
                  <Link
                    href="https://github.com/Bahhe/BrainstormAi"
                    className="text-green-500"
                  >
                    <VscGithub className="text-2xl" />
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
};
export default Projects;
