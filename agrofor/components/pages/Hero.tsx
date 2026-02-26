"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

// Inline SVG icons to avoid dependencies
const LeafIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.9.9 7.8C18.6 12.5 14 14.3 11 20z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
)

const ArrowRight = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
)


const stats = [
    { value: "100%", label: "Orgânico" },
    { value: "15+", label: "Anos no Mercado" },
    { value: "Brasil", label: "Fabricado Aqui" },
]

const features = [
    "Biodegradável e sustentável",
    "Alta durabilidade e resistência",
    "Ideal para jardins verticais",
]

export default function HeroSection() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, 120])
    const opacityParallax = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --cream: #F7F3EE;
          --warm-beige: #EDE7DC;
          --coconut: #C8A97A;
          --coconut-dark: #A08050;
          --forest: #2D5A27;
          --forest-mid: #3D7A35;
          --forest-light: #5A9E50;
          --soil: #6B4A2A;
          --text-dark: #1A1A18;
          --text-mid: #4A4840;
          --text-light: #8A8680;
        }

        .hero-root {
          font-family: 'DM Sans', sans-serif;
          background-color: var(--cream);
          min-height: 100svh;
          position: relative;
          overflow: hidden;
        }

        /* Organic background texture */
        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(200,169,122,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 50% 80% at 90% 20%, rgba(45,90,39,0.06) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        /* Fiber texture overlay */
        .texture-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.025'/%3E%3C/svg%3E");
          opacity: 0.4;
          pointer-events: none;
          z-index: 0;
        }

        /* Diagonal split */
        .split-bg {
          position: absolute;
          top: 0; right: 0;
          width: 55%;
          height: 100%;
          background: var(--warm-beige);
          clip-path: polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%);
          z-index: 0;
        }

        @media (max-width: 1023px) {
          .split-bg { display: none; }
        }

        .hero-inner {
          position: relative;
          z-index: 10;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          min-height: 100svh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
          padding-top: 5rem;
          padding-bottom: 3rem;
        }

        @media (max-width: 1023px) {
          .hero-inner {
            grid-template-columns: 1fr;
            padding-top: 6rem;
            gap: 3rem;
            text-align: center;
          }
        }

        /* Left column */
        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .tag-line {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--forest-mid);
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .tag-line-dot {
          width: 6px; height: 6px;
          background: var(--coconut);
          border-radius: 50%;
          flex-shrink: 0;
        }

        @media (max-width: 1023px) {
          .tag-line { justify-content: center; }
        }

        .hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(3.2rem, 6vw, 5.4rem);
          line-height: 1.05;
          color: var(--text-dark);
          letter-spacing: -0.02em;
          margin: 0;
        }

        .hero-heading em {
          font-style: italic;
          color: var(--forest);
          font-weight: 400;
        }

        .hero-heading .accent-word {
          position: relative;
          display: inline-block;
        }

        .hero-heading .accent-word::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--coconut);
          border-radius: 2px;
        }

        .hero-body {
          font-size: 1rem;
          color: var(--text-mid);
          line-height: 1.75;
          max-width: 460px;
          font-weight: 300;
        }

        @media (max-width: 1023px) {
          .hero-body { margin: 0 auto; }
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        @media (max-width: 1023px) {
          .features-list { align-items: center; }
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: var(--text-mid);
        }

        .feature-dot {
          width: 5px; height: 5px;
          background: var(--forest-light);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          padding-top: 0.5rem;
        }

        @media (max-width: 1023px) {
          .cta-group { justify-content: center; }
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 2rem;
          background: var(--forest);
          color: #fff;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-decoration: none;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 8px 30px rgba(45,90,39,0.25);
        }

        .btn-primary:hover {
          background: var(--forest-mid);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(45,90,39,0.35);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 1.8rem;
          background: transparent;
          color: var(--text-dark);
          border: 1.5px solid rgba(26,26,24,0.2);
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 400;
          text-decoration: none;
          transition: border-color 0.25s, background 0.25s, color 0.25s;
        }

        .btn-secondary:hover {
          border-color: var(--forest);
          background: var(--forest);
          color: #fff;
        }

        /* Stats */
        .stats-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(26,26,24,0.1);
          margin-top: 0.5rem;
        }

        @media (max-width: 480px) {
          .stats-bar { grid-template-columns: repeat(3, 1fr); gap: 0.75rem; }
        }

        .stat-item {}

        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.9rem;
          font-weight: 500;
          color: var(--text-dark);
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.65rem;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-weight: 500;
        }

        /* Right column - image */
        .hero-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-frame {
          position: relative;
          width: 100%;
          max-width: 520px;
          margin: 0 auto;
        }

        /* Decorative ring */
        .deco-ring {
          position: absolute;
          top: -20px; right: -20px;
          width: 100%;
          height: 100%;
          border: 1.5px solid var(--coconut);
          border-radius: 36% 64% 70% 30% / 30% 40% 60% 70%;
          opacity: 0.4;
          animation: morphRing 8s ease-in-out infinite alternate;
        }

        @keyframes morphRing {
          from { border-radius: 36% 64% 70% 30% / 30% 40% 60% 70%; }
          to   { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        .deco-ring-2 {
          position: absolute;
          bottom: -30px; left: -30px;
          width: 60%;
          height: 60%;
          border: 1px solid var(--forest-light);
          border-radius: 50%;
          opacity: 0.2;
          animation: morphRing2 10s ease-in-out infinite alternate;
        }

        @keyframes morphRing2 {
          from { border-radius: 50%; transform: scale(1); }
          to   { border-radius: 40% 60%; transform: scale(1.1); }
        }

        .image-container {
          position: relative;
          aspect-ratio: 4/5;
          width: 100%;
          border-radius: 24px;
          overflow: hidden;
          box-shadow:
            0 40px 80px -20px rgba(26,26,24,0.18),
            0 0 0 1px rgba(200,169,122,0.15);
        }

        .image-container img {
          object-fit: cover;
          width: 100%; height: 100%;
        }

        /* Floating badge */
        .float-badge {
          position: absolute;
          background: #fff;
          border-radius: 18px;
          padding: 1rem 1.2rem;
          box-shadow: 0 12px 40px rgba(26,26,24,0.12);
          border: 1px solid rgba(237,231,220,0.8);
          backdrop-filter: blur(8px);
        }

        .float-badge-left {
          bottom: 2rem; left: -2rem;
          max-width: 160px;
        }

        @media (max-width: 480px) {
          .float-badge-left { left: 0.5rem; bottom: 0.75rem; }
        }

        .float-badge-top {
          top: 2rem; right: -1.5rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          white-space: nowrap;
        }

        @media (max-width: 480px) {
          .float-badge-top { right: 0.5rem; top: 0.75rem; }
        }

        .badge-icon {
          width: 32px; height: 32px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--forest), var(--forest-light));
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          flex-shrink: 0;
        }

        .badge-title {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 0.2rem;
        }

        .badge-sub {
          font-size: 0.68rem;
          color: var(--text-light);
          line-height: 1.4;
        }

        /* Scrollhint */
        .scroll-hint {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-light);
          font-size: 0.65rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          z-index: 20;
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--coconut), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(0.7); }
        }

        @media (max-width: 1023px) {
          .scroll-hint { display: none; }
        }

        /* Nav bar placeholder */
        .hero-nav {
          position: absolute;
          top: 0; left: 0; right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          max-width: 1280px;
          margin: 0 auto;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
        }

        .logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--text-dark);
          letter-spacing: 0.08em;
          text-decoration: none;
        }

        .logo span {
          color: var(--forest);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0; padding: 0;
        }

        .nav-links a {
          font-size: 0.8rem;
          color: var(--text-mid);
          text-decoration: none;
          font-weight: 400;
          letter-spacing: 0.04em;
          transition: color 0.2s;
        }

        .nav-links a:hover { color: var(--forest); }

        @media (max-width: 767px) {
          .nav-links { display: none; }
        }
      `}</style>

            <section id="inicio" className="hero-root" ref={containerRef}>
                <div className="texture-overlay" />
                <div className="split-bg" />

                {/* Navbar */}
               
                <div className="hero-inner">
                    {/* Left */}
                    <motion.div
                        className="hero-left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <div className="tag-line">
                            <span className="tag-line-dot" />
                            <span>Sustentabilidade &amp; Qualidade</span>
                            <LeafIcon />
                        </div>

                        <h1 className="hero-heading">
                            Fibra de coco<br />
                            que <em>transforma</em><br />
                            <span className="accent-word">ambientes</span>.
                        </h1>

                        <p className="hero-body">
                            Xaxim em fibra de coco — resistente, biodegradável e produzido com respeito à natureza. A escolha sustentável para jardins verticais e projetos paisagísticos.
                        </p>

                        <div className="features-list">
                            {features.map((f, i) => (
                                <div className="feature-item" key={i}>
                                    <span className="feature-dot" />
                                    {f}
                                </div>
                            ))}
                        </div>

                        <div className="cta-group">
                            <Link href="#produtos" className="btn-primary">
                                Explorar Produtos
                                <ArrowRight />
                            </Link>

                        </div>

                        <div className="stats-bar">
                            {stats.map((s, i) => (
                                <motion.div
                                    className="stat-item"
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                                >
                                    <p className="stat-value">{s.value}</p>
                                    <p className="stat-label">{s.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        className="hero-right"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
                        style={{ y: yParallax }}
                    >
                        <div className="image-frame">
                            <div className="deco-ring" />
                            <div className="deco-ring-2" />

                            <div className="image-container">
                                <Image
                                    src="/Foto_principal.png"
                                    alt="Xaxim em fibra de coco Agrofor"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Gradient overlay for image depth */}
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(160deg, transparent 50%, rgba(45,90,39,0.15) 100%)',
                                    pointerEvents: 'none'
                                }} />
                            </div>

                            {/* Badge top right */}
                            <motion.div
                                className="float-badge float-badge-top"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                <div className="badge-icon">
                                    <LeafIcon />
                                </div>
                                <div>
                                    <p className="badge-title">100% Natural</p>
                                    <p className="badge-sub">Fibra de coco</p>
                                </div>
                            </motion.div>

                            {/* Badge bottom left */}
                            <motion.div
                                className="float-badge float-badge-left"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="badge-title">Textura Orgânica</p>
                                <p className="badge-sub">Alta densidade para durabilidade e estética únicas.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll hint */}
                <div className="scroll-hint">
                    <span>Scroll</span>
                    <div className="scroll-line" />
                </div>
            </section>
        </>
    )
}