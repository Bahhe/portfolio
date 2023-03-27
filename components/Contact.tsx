import emailjs from "@emailjs/browser";
import { AiOutlinePhone } from "react-icons/ai";
import EarthCanvas from "./canvas/Earth";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [nameBorder, setNameBorder] = useState("border-white");
  const [emailBorder, setEmailBorder] = useState("border-white");
  const [messageBorder, setMessageBorder] = useState("border-white");

  useEffect(() => {
    if (name && message && email) {
      setError(false);
    }
    if (name) {
      setNameBorder("border-white");
    }
    if (email) {
      setEmailBorder("border-white");
    }
    if (message) {
      setMessageBorder("border-white");
    }
  }, [name, message, email]);

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError(true);
      if (!name) {
        setNameBorder("border-red-500");
      }
      if (!email) {
        setEmailBorder("border-red-500");
      }
      if (!message) {
        setMessageBorder("border-red-500");
      }
      return;
    }
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
          alert(
            "Thank you for contacting us. We will get back to you as soon as possible."
          );
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setName("");
        setEmail("");
        setMessage("");
      });
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
            className="flex flex-col items-center border border-white p-10 rounded backdrop-blur"
          >
            {error ? (
              <span className="absolute left-10 top-5 text-sm text-red-500">
                *All fields are required
              </span>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              value={name}
              onChange={onNameChange}
              className={`py-3 px-4 my-5 bg-transparent rounded border ${nameBorder} placeholder-white w-52 lg:w-80`}
            />
            <input
              type="from_email"
              placeholder="Email"
              name="user_email"
              value={email}
              onChange={onEmailChange}
              className={`py-3 px-4 my-5 bg-transparent rounded border ${emailBorder} placeholder-white w-52 lg:w-80`}
            />
            <textarea
              placeholder="Message..."
              name="message"
              value={message}
              onChange={onMessageChange}
              className={`py-3 px-4 my-5 bg-transparent rounded border ${messageBorder} placeholder-white w-52 lg:w-80 h-32`}
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
