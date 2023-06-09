import { motion } from "framer-motion";
import { BsFillInfoCircleFill } from "react-icons/bs";
import {
  GiBarbute,
  GiBatteredAxe,
  GiBiceps,
  GiDualityMask,
} from "react-icons/gi";

const About = () => {
  return (
    <section id="about" className="w-3/4 md:w-5/6 mx-auto lg:my-20">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center gap-5 mt-16 lg:mt-0"
      >
        <BsFillInfoCircleFill className="text-3xl text-green-500" />
        <h1 className="text-white text-5xl font-bold capitalize mt-5">
          About me
        </h1>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="lg:ml-20 mt-20 text-white flex gap-10 flex-wrap xl:flex-nowrap"
      >
        <p>
          <span className="text-3xl font-bold">
            <GiBatteredAxe className="inline mr-5 mb-2" />
          </span>
          I am a passionate software engineer with a focus on utilizing the
          power of <span className="text-green-500">JavaScript</span> and{" "}
          <span className="text-green-500">TypeScript</span> to build dynamic
          and engaging web applications. Although I am a beginner with no work
          experience, I have honed my skills through personal projects and
          ongoing learning.
        </p>
        <p>
          <span className="text-3xl font-bold">
            <GiBarbute className="inline mr-5 mb-2" />
          </span>
          My main area of expertise is working with the{" "}
          <span className="text-green-500">React.js</span> framework, using it
          to create beautiful, responsive user interfaces that prioritize user
          experience. Additionally, I have experience building full-stack
          applications with the <span className="text-green-500">MERN </span>
          stack{" "}
          <span className="text-green-500">
            (MongoDB, Express.js, React.js, and Node.js)
          </span>{" "}
          and <span className="text-green-500">Next.js</span>, leveraging the
          power of each tool to create seamless and efficient applications.
        </p>
        <p>
          <span className="text-3xl font-bold">
            <GiBiceps className="inline mr-5 mb-2" />
          </span>
          I also have experience using
          <span className="text-green-500"> trpc</span> and{" "}
          <span className="text-green-500">Express.js</span> to build robust
          APIs that can be seamlessly integrated with front-end applications.
          With a deep understanding of how to optimize web applications for
          speed and performance, I am dedicated to creating applications that
          are both functional and enjoyable to use. While I may be a beginner, I
          am eager to continue growing and expanding my skills as a software
          engineer.
        </p>
        <p>
          <span className="text-3xl font-bold">
            <GiDualityMask className="inline mr-5 mb-2" />
          </span>
          I am always seeking out new challenges and opportunities to learn, and
          I am committed to delivering high-quality work that exceeds
          expectations. Please take a look at my portfolio to see examples of my
          work, and feel free to get in touch to discuss how I can help bring
          your ideas to life. Thank you for considering me as a partner in your
          next project!
        </p>
      </motion.div>
    </section>
  );
};

export default About;
