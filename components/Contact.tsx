import emailjs from "@emailjs/browser";
import { AiOutlinePhone } from "react-icons/ai";
import EarthCanvas from "./canvas/Earth";
import { FormEvent, useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentForm = form.current;
    if (currentForm == null) return;
    emailjs
      .sendForm(
        "service_7ifymxp",
        "template_9c5ehkq",
        currentForm,
        "K2SgTvTxH6jO38nqH"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("you message was sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="w-5/6 my-52 mx-auto">
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center gap-5 mb-40"
      >
        <AiOutlinePhone className="text-3xl text-green-500" />
        <h1 className="text-white text-5xl font-bold capitalize">Contact me</h1>
      </motion.div>
      <div className="flex flex-col lg:flex-row items-center justify-evenly">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true, amount: 0 }}
          className="flex"
        >
          <form
            onSubmit={sendEmail}
            ref={form}
            className="flex flex-col items-center border border-white p-10 rounded"
          >
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="py-3 px-4 my-5 bg-transparent rounded border border-white placeholder-white w-52 lg:w-80"
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className="py-3 px-4 my-5 bg-transparent rounded border border-white placeholder-white w-52 lg:w-80"
            />
            <textarea
              placeholder="Message..."
              name="message"
              className="py-3 px-4 my-5 bg-transparent rounded border border-white placeholder-white w-52 lg:w-80 h-32"
            />

            <input
              type="submit"
              value="Send"
              className="py-2 px-4 mt-20 w-52 lg:w-80 border border-white rounded cursor-pointer"
            />
          </form>
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true, amount: 0 }}
        >
          <div className="hidden lg:block w-[500px] h-[500px]">
            <EarthCanvas />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;
