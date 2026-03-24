import { motion, useMotionValue, useTransform, useSpring, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import laptop from "../assets/laptopBg.png";
import wire from "../assets/wireFrame.png";
import phone from "../assets/phone.png";

const CountUp = ({ to, suffix = "" }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const controls = animate(0, to, {
      duration: 2,
      delay: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return controls.stop;
  }, [to]);
  return <>{val}{suffix}</>;
};

const MagneticImage = ({ src, alt, className, delay, style }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18 });
  const sy = useSpring(y, { stiffness: 120, damping: 18 });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.12);
    y.set((e.clientY - cy) * 0.12);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy, ...style }}
      initial={{ opacity: 0, scale: 0.75, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <img src={src} alt={alt} className="w-full h-full object-contain drop-shadow-2xl" />
    </motion.div>
  );
};

const Ring = ({ size, duration, reverse, style }) => (
  <motion.div
    className="absolute rounded-full border pointer-events-none"
    style={{ width: size, height: size, ...style }}
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
  />
);

const Hero = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gradX = useSpring(useTransform(mouseX, [0, 1], ["-10%", "10%"]), { stiffness: 60, damping: 20 });
  const gradY = useSpring(useTransform(mouseY, [0, 1], ["-10%", "10%"]), { stiffness: 60, damping: 20 });

  const handleMouseMove = (e) => {
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width);
    mouseY.set((e.clientY - top) / height);
  };

  const words = ["Ideas", "Visions", "Products", "Brands"];
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { value: 50, suffix: "+", label: "Projects Shipped" },
    { value: 5, suffix: "", label: "Platforms Built" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-root { font-family: 'DM Sans', sans-serif; }
        .hero-display { font-family: 'Syne', sans-serif; }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(2deg); }
        }
        @keyframes float-med {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .float-slow { animation: float-slow 7s ease-in-out infinite; }
        .float-med { animation: float-med 5s ease-in-out infinite; }
        .float-fast { animation: float-med 3.5s ease-in-out infinite; }

        .shimmer-text {
          background: linear-gradient(90deg, #fff 0%, #a78bfa 30%, #f472b6 60%, #fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }

        .scanline {
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent);
          animation: scanline 8s linear infinite;
          pointer-events: none;
        }

        .ticker-wrap { overflow: hidden; white-space: nowrap; }
        .ticker-inner {
          display: inline-block;
          animation: ticker 22s linear infinite;
        }

        .glow-btn { position: relative; overflow: hidden; }
        .glow-btn::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #8B5CF6, #EC4899, #8B5CF6);
          background-size: 200% 200%;
          border-radius: inherit;
          z-index: -1;
          animation: shimmer 3s linear infinite;
        }

        .dot-grid {
          background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="hero-root relative w-full min-h-screen overflow-hidden flex flex-col"
        style={{ background: "#06040F" }}
      >
        <div className="dot-grid absolute inset-0 pointer-events-none" />
        <div className="scanline" />

        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: 900,
            height: 900,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(236,72,153,0.08) 40%, transparent 70%)",
            x: gradX,
            y: gradY,
            top: "50%",
            left: "40%",
            translateX: "-50%",
            translateY: "-50%",
          }}
        />

        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(99,60,255,0.18) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)" }} />

        <Ring size={600} duration={40} style={{ top: "50%", right: "-15%", marginTop: -300, borderColor: "rgba(139,92,246,0.07)", borderWidth: 1 }} />
        <Ring size={400} duration={28} reverse style={{ top: "50%", right: "-8%", marginTop: -200, borderColor: "rgba(236,72,153,0.08)", borderWidth: 1, borderStyle: "dashed" }} />

        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

        <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 pb-8 lg:pb-10 gap-6 lg:gap-12 max-w-[1400px] mx-auto w-full pt-8 lg:pt-0">

          <div className="lg:w-[52%] flex flex-col gap-6 lg:gap-7 w-full">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 w-fit"
            >
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full"
                style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.3)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse" />
                <span className="text-xs font-semibold tracking-widest uppercase text-[#a78bfa]">
                  Innovative Technology
                </span>
              </div>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="hero-display font-extrabold leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)", color: "#fff" }}
              >
                We Turn
              </motion.h1>

              <div className="overflow-hidden" style={{ height: "clamp(2.6rem, 7vw, 5.5rem)" }}>
                <motion.div
                  key={wordIndex}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="hero-display font-extrabold shimmer-text leading-[0.95] tracking-tight"
                  style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
                >
                  {words[wordIndex]}
                </motion.div>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="hero-display font-extrabold leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)", color: "#fff" }}
              >
                Into Reality
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="text-base md:text-lg leading-relaxed max-w-lg"
              style={{ color: "rgba(180,180,210,0.75)" }}
            >
              From concept to product, we craft digital experiences that are practical,
              elegant, and built to perform. Real solutions for real impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#Products"
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(139,92,246,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="glow-btn relative px-8 py-3.5 rounded-full text-white font-semibold text-sm tracking-wide"
                style={{ background: "linear-gradient(135deg, #7C3AED, #DB2777)", zIndex: 0 }}
              >
                View Our Products
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.04, background: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 rounded-full text-white font-semibold text-sm tracking-wide flex items-center gap-2 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                Our Services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-8 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="hero-display font-extrabold text-2xl md:text-3xl text-white">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </span>
                  <span className="text-xs mt-0.5" style={{ color: "rgba(160,160,195,0.6)" }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div
            className="lg:w-[48%] relative flex items-center justify-center w-full"
            style={{ minHeight: "260px", maxHeight: "400px" }}
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.18) 0%, transparent 65%)" }} />

            <MagneticImage
              src={laptop}
              alt="Laptop"
              delay={0.5}
              className="float-slow relative z-20"
              style={{ width: "70%", maxWidth: 420 }}
            />

            <MagneticImage
              src={wire}
              alt="Wireframe"
              delay={0.75}
              className="float-med absolute z-10"
              style={{
                width: "38%",
                maxWidth: 200,
                top: "5%",
                right: "2%",
                filter: "drop-shadow(0 0 20px rgba(139,92,246,0.35))",
              }}
            />

            <MagneticImage
              src={phone}
              alt="Phone"
              delay={1.0}
              className="float-fast absolute z-30"
              style={{
                width: "25%",
                maxWidth: 130,
                bottom: "2%",
                left: "8%",
                filter: "drop-shadow(0 0 24px rgba(236,72,153,0.4))",
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
              className="absolute top-[12%] left-[5%] z-40 flex items-center gap-2 px-3 py-2 rounded-xl"
              style={{
                background: "rgba(6,4,15,0.8)",
                border: "1px solid rgba(139,92,246,0.3)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-white">5 Platforms Live</span>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="relative z-10 w-full ticker-wrap py-3 mt-auto"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="ticker-inner">
            {[...Array(2)].map((_, ri) => (
              <span key={ri}>
                {["Web Development", "Mobile Apps", "EdTech", "FinTech", "Agro Tech", "UI/UX Design", "SaaS Platforms", "Brand Identity"].map((t, i) => (
                  <span key={i} className="inline-flex items-center gap-4 mx-8 text-xs font-semibold tracking-widest uppercase"
                    style={{ color: "rgba(160,160,200,0.45)" }}>
                    <span className="w-1 h-1 rounded-full bg-[#8B5CF6] inline-block" />
                    {t}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
