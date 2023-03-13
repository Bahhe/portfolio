import Image from "next/image";
import projectOne from "@/public/projectOne.png";
import projectTwo from "@/public/projectTwo.png";
import Link from "next/link";
import { VscGithub, VscProject } from "react-icons/vsc";
import { SiExpress, SiMongodb, SiTrpc } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  return (
    <section className="w-5/6 mx-auto mt-10">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center gap-5 my-20"
      >
        <VscProject className="text-3xl text-green-500" />
        <h1 className="text-white text-5xl font-bold capitalize">Projects</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-1/2 text-lg ml-28 mb-20"
      >
        <p>
          Here are two projects that I built one with MERN and the other with
          the T3-Stack that offers a user-friendly interface, advanced features,
          and a seamless shopping experience for customers. The website is
          optimized for speed, security, and scalability, and has a responsive
          design that can be accessed on any device. It also includes an admin
          panel for managing the products, inventory, and customer orders, as
          well as features like user authentication, product search, cart
          functionality, and secure payment options.
        </p>
      </motion.div>
      <div className="flex items-center justify-center gap-20">
        <Tilt>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-96 h-[500px] border border-white rounded"
          >
            <div className="h-2/5 p-5 flex items-center justify-center">
              <Image
                src={projectOne}
                alt="website picture"
                className="object-cover rounded"
              />
            </div>
            <div className="mx-4 my-2 flex items-center gap-2 text-2xl">
              <SiTrpc />
              <TbBrandNextjs />
              <TbBrandTypescript />
              <TbBrandTailwind />
            </div>
            <div className="h-1/2 flex flex-col justify-evenly">
              <h1 className="mx-4 my-2 text-2xl font-bold capitalize">
                ecommerce website
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
            transition={{ duration: 1 }}
            className="w-96 h-[500px] border border-white rounded"
          >
            <div className="h-2/5 p-5 flex items-center justify-center">
              <Image
                src={projectTwo}
                alt="website picture"
                className="object-cover rounded"
              />
            </div>
            <div className="mx-4 my-2 flex items-center gap-2 text-2xl">
              <FaNodeJs />
              <SiMongodb />
              <SiExpress />
              <FaReact />
            </div>
            <div className="h-1/2 flex flex-col justify-evenly">
              <h1 className="mx-4 my-2 text-2xl font-bold capitalize">
                ecommerce website
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
      </div>
    </section>
  );
};
export default Projects;