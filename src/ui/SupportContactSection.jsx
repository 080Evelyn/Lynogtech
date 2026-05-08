import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/contact.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const SupportContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_xheqrb3",      // replace
        "template_b6x1xgj",     // replace
        formRef.current,
        "06WYxmkF7Nuy2l6-m"       // replace
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setSuccess("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="bg-[#080B1A] py-14 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">

        {/* FORM */}
        <motion.div
          className="w-full md:w-1/2 p-6 md:p-10 bg-white/5 border border-white/10 rounded-2xl"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl text-white mb-6">
            Let’s build something impactful
          </h2>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full font-semibold"
              style={{
                background: "linear-gradient(135deg, #6B4EFF, #FF16E0)",
                color: "#fff",
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-sm text-center text-gray-300">{success}</p>
            )}
          </form>
        </motion.div>

        {/* IMAGE */}
        <div
          className="w-full md:w-1/2 min-h-[300px] rounded-2xl"
          style={{
            backgroundImage: `url('${contactImg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </section>
  );
};

export default SupportContactSection;