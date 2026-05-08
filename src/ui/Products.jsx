import { motion } from "framer-motion";
import lynspeedImg from "../assets/lynspeed.png";
import delynImg from "../assets/delyn1.png";
import lynafrickImg from "../assets/lynafrick.png";
import monifrapImg from "../assets/monifrap.png";
import mialaImg from "../assets/maila.png";
<<<<<<< HEAD
import bitwireImg from "../assets/bitwire1.png";
import deonsmartImg from "../assets/deonsmart.png";
import ifensImg from "../assets/ifens.png";
import jslotImg from "../assets/j-slot.png";
import Navbar from "../components/Navbar";

/* ================= DATA ================= */
=======
import delynImg1 from "../assets/bitwire1.png";
import deonsmartImg from "../assets/deonsmart.png";
import ifensImg from "../assets/ifens.png";
>>>>>>> c78ec4d65992b76de4bf07d3d7484e513d56f542

const ownProducts = [
  {
    id: 1,
    name: "Lynspeed",
    category: "EdTech Platform",
    desc: "A Nigerian EdTech platform helping students prepare for JAMB exams while providing career guidance.",
    image: lynspeedImg,
    link: "https://www.lynspeed.com.ng",
  },
  {
    id: 2,
    name: "DELYN",
    category: "Business Solutions",
    desc: "An all-in-one business system for automating operations and managing logistics and distribution.",
    image: delynImg,
    link: "https://delyn.biz",
  },

  {
    id: 3,
    name: "Monifrap",
    category: "FinTech",
    desc: "A platform that allows users to manage multiple bank accounts from a single interface.",
    image: monifrapImg,
    link: "https://monifrapweb.vercel.app/",
  },
];

const clientProducts = [
  {
    id: 4,
    name: "Miala Media",
    category: "Beauty & Cosmetics",
    desc: "A skincare and cosmetics brand focused on melanin-rich skin.",
    image: mialaImg,
    link: "https://www.mialacosmetics.com",
  },
  {
    id: 5,
    name: "Lynafrick Agro",
    category: "Food & Agriculture",
    desc: "A food processing company delivering natural, organic flour products to consumers and businesses.",
    image: lynafrickImg,
    link: "https://www.lynafrickagrofoods.com.ng",
  },
  {
    id: 6,
    name: "BITWIRETRUST",
    category: "Crypto & Finance",
<<<<<<< HEAD
    desc: "A platform for crypto trading, gift cards, and utility payments.",
    image: bitwireImg,
=======
    desc: "A single platform to trade gift cards, buy and sell crypto, and pay utility bills like data and electricity — turning digital assets into local value quickly and securely.",
    image: delynImg,
>>>>>>> c78ec4d65992b76de4bf07d3d7484e513d56f542
    link: "https://bitwiretrust.vercel.app/",
  },
  {
    id: 7,
    name: "Ifens Technologies",
    category: "Networking & CCTV",
    desc: "A company providing networking, security, and connectivity solutions.",
    image: ifensImg,
<<<<<<< HEAD
    link: "https://ifenstech.vercel.app/",
=======
    link: "https://ifens.vercel.app/",
    accent: "#A78BFA",
    number: "03",
>>>>>>> c78ec4d65992b76de4bf07d3d7484e513d56f542
  },
  {
    id: 8,
    name: "Deon Smart Solution",
<<<<<<< HEAD
    category: "Smart Security",
    desc: "Premium smart lock systems for homes and businesses.",
=======
    category: "Smart Lock Systems",
    desc: "We provide premium smart security solutions designed for modern homes, businesses, and luxury spaces — combining technology, convenience, and peace of mind.",
>>>>>>> c78ec4d65992b76de4bf07d3d7484e513d56f542
    image: deonsmartImg,
    link: "https://deon-lovat.vercel.app/",
  },
  {
    id: 9,
    name: "J-slot Technologies",
    category: "Gadget Store",
    desc: "A platform for laptops, phones, accessories, and repairs.",
    image: jslotImg,
    link: "https://gadgetstore-three.vercel.app/",
  },
];

/* ================= COMPONENTS ================= */

const ProductCard = ({ p }) => {
  return (

    <a href={p.link} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="bg-[#111827] border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/40 transition">

        {/* Image */}
        <div className="h-52 overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-3">
          <span className="text-xs text-blue-400 uppercase tracking-wide">
            {p.category}
          </span>

          <h3 className="text-lg font-semibold text-white">
            {p.name}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            {p.desc}
          </p>

          <span className="text-sm text-blue-500 mt-2">
            Visit Project →
          </span>
        </div>
      </div>
    </a>
  );
};

/* ================= MAIN SECTION ================= */

const Products = () => {
  return (
    <section className="bg-[#0B0F19] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Our Work & Products
          </h2>
          <p className="text-gray-400 mt-3">
            We build scalable digital platforms and deliver solutions that help
            businesses operate efficiently and grow with confidence.
          </p>
        </motion.div>

        {/* OWN PRODUCTS */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-white mb-6">
            Our Products
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ownProducts.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>

        {/* CLIENT PROJECTS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">
            Client Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientProducts.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 p-8 border border-white/10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 bg-[#111827]"
        >
          <div>
            <h4 className="text-xl font-semibold text-white">
              Have a project in mind?
            </h4>
            <p className="text-gray-400 text-sm mt-1">
              Let’s build something reliable and scalable together.
            </p>
          </div>

          <a
            href="https://wa.me/2349033113048"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-sm font-semibold text-white transition"
          >
            Start a Project
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Products;