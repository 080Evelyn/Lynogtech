import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import lynspeedImg from "../assets/lynspeed.png";
import delynImg from "../assets/delyn1.png";
import lynafrickImg from "../assets/lynafrick.png";
import monifrapImg from "../assets/monifrap.png";
import mialaImg from "../assets/maila.png";
import delynImg1 from "../assets/bitwire1.png";
import deonsmartImg from "../assets/deonsmart.png";
import ifensImg from "../assets/ifens.png";

const ownProducts = [
  {
    id: 1,
    name: "Lynspeed",
    category: "EdTech Platform",
    desc: "A Nigerian EdTech platform helping students ace JAMB exams while providing career guidance and skill development to set them on the right path.",
    image: lynspeedImg,
    link: "https://www.lynspeed.com.ng",
    accent: "#00F0FF",
    number: "01",
  },
  {
    id: 2,
    name: "DELYN",
    category: "Business Solutions",
    desc: "An all-in-one business software for Nigerian companies to automate and scale operations — a white-label platform for distribution and logistics brands to run their own web and mobile apps.",
    image: delynImg,
    link: "https://delyn.biz",
    accent: "#FF2EBE",
    number: "02",
  },
  {
    id: 3,
    name: "Lynafrick Agro",
    category: "Food & Agriculture",
    desc: "A Nigerian food processing company specialising in 100% natural, organic flour products — connecting quality agro produce directly to consumers and businesses.",
    image: lynafrickImg,
    link: "https://www.lynafrickagrofoods.com.ng",
    accent: "#4AFF91",
    number: "03",
  },
  {
    id: 4,
    name: "Monifrap",
    category: "FinTech",
    desc: "An all-in-one Nigerian banking app that lets users link and manage multiple local bank accounts in a single interface — simplifying personal and business finances.",
    image: monifrapImg,
    link: "https://monifrapweb.vercel.app/",
    accent: "#FFB800",
    number: "04",
  },
];

const clientProducts = [
  {
    id: 5,
    name: "Miala Media",
    category: "Beauty & Cosmetics",
    desc: "A Nigerian cosmetics and skincare brand crafted for melanin-rich skin — offering a curated range of beauty products that celebrate and nourish African skin tones.",
    image: mialaImg,
    link: "https://www.mialacosmetics.com",
    accent: "#FF6B35",
    number: "01",
  },
  {
    id: 6,
    name: "BITWIRE",
    category: "Crypto & Finance",
    desc: "A single platform to trade gift cards, buy and sell crypto, and pay utility bills like data and electricity — turning digital assets into local value quickly and securely.",
    image: delynImg,
    link: "https://bitwiretrust.vercel.app/",
    accent: "#A78BFA",
    number: "02",
  },
  {
    id: 7,
    name: "Ifens Technologies",
    category: "Networking, Starlink & CCTV",
    desc: "A technology solutions company focused on the supply, installation, and support of networking, security, and connectivity equipment.",
    image: ifensImg,
    link: "https://ifenstech.vercel.app/",
    accent: "#A78BFA",
    number: "03",
  },
  {
    id: 8,
    name: "Deon Smart Solution",
    category: "Smart Lock Systems",
    desc: "We provide premium smart security solutions designed for modern homes, businesses, and luxury spaces — combining technology, convenience, and peace of mind.",
    image: deonsmartImg,
    link: "https://deon-lovat.vercel.app/",
    accent: "#FF6B35",
    number: "04",
  },
];

const ProductCard = ({ p, i, variant = "default" }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={p.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        <div
          className="relative overflow-hidden rounded-[2rem] border transition-all duration-500 h-full flex flex-col"
          style={{
            background: variant === "client" ? "rgba(14,10,32,0.9)" : "rgba(10,12,28,0.85)",
            borderColor: hovered ? p.accent : "rgba(255,255,255,0.07)",
            boxShadow: hovered
              ? `0 0 60px ${p.accent}22, 0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 ${p.accent}28`
              : "0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
            style={{
              background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
              opacity: hovered ? 1 : 0.25,
            }}
          />

          <div
            className="absolute top-3 right-5 font-black leading-none select-none transition-all duration-500 pointer-events-none"
            style={{
              color: p.accent,
              opacity: hovered ? 0.1 : 0.04,
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "5rem",
            }}
          >
            {p.number}
          </div>

          <div className="relative overflow-hidden h-52 flex-shrink-0">
            <motion.img
              src={p.image}
              alt={p.name}
              className="w-full h-full object-cover"
              animate={{ scale: hovered ? 1.06 : 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(10,12,28,0.92) 100%)" }}
            />
            <div
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase"
              style={{
                background: `${p.accent}18`,
                border: `1px solid ${p.accent}55`,
                color: p.accent,
                backdropFilter: "blur(8px)",
              }}
            >
              {p.category}
            </div>
          </div>

          <div className="p-7 pt-5 flex flex-col flex-1">
            <h3
              className="mb-3 tracking-tight leading-tight transition-colors duration-300"
              style={{
                color: hovered ? p.accent : "#ffffff",
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.02em",
                fontSize: "1.75rem",
              }}
            >
              {p.name}
            </h3>
            <p
              className="text-sm flex-1 mb-6"
              style={{ color: "rgba(175,180,210,0.75)", lineHeight: 1.75 }}
            >
              {p.desc}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <span
                className="text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300"
                style={{ color: p.accent, opacity: hovered ? 1 : 0.55 }}
              >
                Visit Site
              </span>
              <motion.div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                animate={{
                  x: hovered ? 3 : 0,
                  background: hovered ? p.accent : "rgba(255,255,255,0.04)",
                }}
                transition={{ duration: 0.25 }}
                style={{ border: `1px solid ${hovered ? p.accent : "rgba(255,255,255,0.1)"}` }}
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none"
                  style={{ color: hovered ? "#000" : p.accent }}>
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const SectionLabel = ({ label, sublabel, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className="mb-10 flex items-center gap-5"
  >
    <div className="flex flex-col gap-1">
      <span
        className="text-xs font-bold tracking-[0.28em] uppercase"
        style={{ color: "rgba(160,165,210,0.45)" }}
      >
        {sublabel}
      </span>
      <h3
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          lineHeight: 1,
          letterSpacing: "0.02em",
          color: "#fff",
        }}
      >
        {label}
      </h3>
    </div>
    <div
      className="flex-1 h-[1px] ml-4"
      style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.08), transparent)" }}
    />
  </motion.div>
);

const Products = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');
        .products-section * { box-sizing: border-box; }
        .noise-overlay {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.022; pointer-events: none; mix-blend-mode: overlay;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="products-section relative overflow-hidden py-14 md:py-20 xl:py-36"
        style={{ background: "#080B1A", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="noise-overlay" />

        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

        <motion.div className="absolute pointer-events-none" style={{
          top: "-15%", left: "5%", width: "700px", height: "700px",
          background: "radial-gradient(circle, rgba(80,40,255,0.1) 0%, transparent 70%)",
          borderRadius: "50%", y: bgY,
        }} />
        <motion.div className="absolute pointer-events-none" style={{
          bottom: "-10%", right: "3%", width: "600px", height: "600px",
          background: "radial-gradient(circle, rgba(255,22,224,0.07) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        <div className="absolute left-0 right-0 pointer-events-none" style={{
          top: "50%", height: "300px", marginTop: "-150px",
          background: "radial-gradient(ellipse at center, rgba(107,78,255,0.05) 0%, transparent 70%)",
        }} />

        <div className="relative max-w-7xl mx-auto px-4 md:px-10">

          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-12" style={{ background: "linear-gradient(90deg, transparent, #6B4EFF)" }} />
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#6B4EFF" }}>
                Our Portfolio
              </span>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  lineHeight: 0.92,
                  letterSpacing: "0.01em",
                  color: "#ffffff",
                  maxWidth: "700px",
                }}
              >
                Products &{" "}
                <span style={{
                  background: "linear-gradient(135deg, #6B4EFF 0%, #FF16E0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Client Solutions
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                viewport={{ once: true }}
                className="text-base md:text-lg max-w-xs md:text-right"
                style={{ color: "rgba(160,165,195,0.7)", lineHeight: 1.7 }}
              >
                Platforms and solutions crafted with precision — each one built to perform.
              </motion.p>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mt-10 h-[1px] origin-left"
              style={{ background: "linear-gradient(90deg, rgba(107,78,255,0.6), rgba(255,22,224,0.3), transparent)" }}
            />
          </div>

          <SectionLabel label="Our Own Products" sublabel="In-house built" delay={0} />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-7 mb-24 xl:max-w-[90%] mx-auto">
            {ownProducts.map((p, i) => (
              <ProductCard key={p.id} p={p} i={i} variant="default" />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 relative"
          >
            <div className="h-[1px]" style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), rgba(107,78,255,0.25), rgba(255,255,255,0.08), transparent)"
            }} />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-1.5 rounded-full"
              style={{ background: "#080B1A", border: "1px solid rgba(107,78,255,0.2)" }}>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase"
                style={{ color: "rgba(160,165,210,0.4)" }}>
                Client Work
              </span>
            </div>
          </motion.div>

          <SectionLabel label="Client Solutions" sublabel="Delivered for clients" delay={0.1} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-20 xl:max-w-[66%] mx-auto">
            {clientProducts.map((p, i) => (
              <ProductCard key={p.id} p={p} i={i} variant="client" />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-5 p-5 md:p-8 rounded-[1.5rem]"
            style={{
              background: "rgba(107,78,255,0.05)",
              border: "1px solid rgba(107,78,255,0.14)",
            }}
          >
            <div className="text-center sm:text-left">
              <p className="font-black mb-1" style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.05em",
                fontSize: "1.6rem",
                color: "#fff",
              }}>
                Ready to build something great?
              </p>
              <p className="text-sm" style={{ color: "rgba(160,165,195,0.65)" }}>
                Let's turn your idea into the next standout product.
              </p>
            </div>
            <a
              href="https://wa.me/2349033113048?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(107,78,255,0.45)]"
              style={{
                background: "linear-gradient(135deg, #6B4EFF, #FF16E0)",
                color: "#fff",
                letterSpacing: "0.1em",
              }}
            >
              Start a Project →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Products;
