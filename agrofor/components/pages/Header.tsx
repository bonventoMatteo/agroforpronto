"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
// import { MessageCircle } from "lucide-react" // Pode remover se não for usar

interface NavItem {
  label: string
  id: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Início",   id: "inicio",   href: "#inicio"   },
  { label: "Agrofor",  id: "agrofor",  href: "#agrofor"  },
  { label: "Produtos", id: "produtos", href: "#produtos" },
  { label: "Contato",  id: "contato",  href: "#contato"  },
]

// Inline WhatsApp icon
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function ProfessionalHeader() {
  const [active, setActive]       = useState("inicio")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --cream: #F7F3EE;
          --warm-beige: #EDE7DC;
          --coconut: #C8A97A;
          --forest: #2D5A27;
          --forest-mid: #3D7A35;
          --forest-light: #5A9E50;
          --text-dark: #1A1A18;
          --text-mid: #4A4840;
          --text-light: #8A8680;
        }

        /* ─── Header shell ─────────────────────────────────────── */
        .hdr-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9999; /* 🚀 CORREÇÃO AQUI: z-index altíssimo para ficar sobre TUDO */
          transition: padding 0.4s cubic-bezier(0.4,0,0.2,1),
                      background 0.4s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.4s cubic-bezier(0.4,0,0.2,1);
          font-family: 'DM Sans', sans-serif;
        }

        .hdr-root.transparent {
          padding: 1.4rem 0;
          background: transparent;
        }

        .hdr-root.scrolled, .hdr-root.mobile-open {
          padding: 0.75rem 0;
          background: rgba(247,243,238,0.88);
          backdrop-filter: blur(20px) saturate(1.4);
          -webkit-backdrop-filter: blur(20px) saturate(1.4);
          box-shadow: 0 1px 0 rgba(200,169,122,0.25), 0 4px 24px rgba(26,26,24,0.06);
        }

        .hdr-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 10000; /* 🚀 Garante que a barra superior fique por cima do próprio overlay */
        }

        /* ─── Logo ─────────────────────────────────────────────── */
        .hdr-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-dark);
          letter-spacing: 0.06em;
          text-decoration: none;
          line-height: 1;
          transition: opacity 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .hdr-logo:hover { opacity: 0.75; }

        .hdr-logo-accent { color: var(--forest); }

        /* Small leaf separator */
        .hdr-logo-sep {
          width: 5px; height: 5px;
          background: var(--coconut);
          border-radius: 50%;
          margin-bottom: 1px;
        }

        /* ─── Desktop Nav pill ─────────────────────────────────── */
        .hdr-nav {
          display: flex;
          align-items: center;
          background: rgba(237,231,220,0.55);
          border: 1px solid rgba(200,169,122,0.3);
          border-radius: 100px;
          padding: 0.3rem;
          gap: 0;
          backdrop-filter: blur(8px);
        }

        @media (max-width: 767px) { .hdr-nav { display: none; } }

        .hdr-nav-item {
          position: relative;
          text-decoration: none;
          padding: 0.5rem 1.3rem;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: var(--text-mid);
          transition: color 0.2s;
          z-index: 1;
        }

        .hdr-nav-item:hover { color: var(--text-dark); }

        .hdr-nav-item.is-active {
          color: #fff;
        }

        .hdr-nav-pill {
          position: absolute;
          inset: 0;
          background: var(--forest);
          border-radius: 100px;
          z-index: -1;
          box-shadow: 0 4px 14px rgba(45,90,39,0.28);
        }

        /* ─── Desktop CTA ──────────────────────────────────────── */
        .hdr-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.3rem;
          background: var(--forest);
          color: #fff;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 6px 20px rgba(45,90,39,0.22);
        }

        .hdr-cta:hover {
          background: var(--forest-mid);
          transform: translateY(-1px);
          box-shadow: 0 10px 28px rgba(45,90,39,0.3);
        }

        @media (max-width: 767px) { .hdr-cta { display: none; } }

        /* ─── Hamburger ────────────────────────────────────────── */
        .hdr-burger {
          display: none;
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(200,169,122,0.45);
          background: rgba(247,243,238,0.7);
          backdrop-filter: blur(8px);
          cursor: pointer;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 5px;
          padding: 0;
          transition: border-color 0.2s, background 0.2s;
          position: relative;
          z-index: 10001; /* 🚀 Fica ACIMA do overlay para ser clicável */
        }

        .hdr-burger:hover {
          border-color: var(--coconut);
          background: rgba(237,231,220,0.9);
        }

        @media (max-width: 767px) { .hdr-burger { display: flex; } }

        .hdr-burger-bar {
          width: 18px; height: 1.5px;
          background: var(--text-dark);
          border-radius: 2px;
          transform-origin: center;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1),
                      opacity 0.25s;
        }

        .hdr-burger.is-open .bar1 { transform: translateY(6.5px) rotate(45deg); }
        .hdr-burger.is-open .bar2 { opacity: 0; transform: scaleX(0.4); }
        .hdr-burger.is-open .bar3 { transform: translateY(-6.5px) rotate(-45deg); }

        /* ─── Mobile fullscreen overlay ────────────────────────── */
        .mob-overlay {
          position: fixed;
          inset: 0;
          height: 100dvh; /* 🚀 Protege contra a barra de tarefas do Safari no iOS */
          background: var(--cream);
          z-index: 9998; /* 🚀 Fica abaixo apenas dos itens do header (Logo/Hamburguer) */
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Organic deco blobs */
        .mob-blob1 {
          position: absolute;
          top: -80px; right: -80px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(200,169,122,0.18) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .mob-blob2 {
          position: absolute;
          bottom: 0; left: -60px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(45,90,39,0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .mob-inner {
          flex: 1;
          overflow-y: auto;
          padding: 7rem 2rem 3rem;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
        }

        .mob-nav {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .mob-link-wrap {
          border-bottom: 1px solid rgba(200,169,122,0.2);
          overflow: hidden;
        }

        .mob-link-wrap:first-child {
          border-top: 1px solid rgba(200,169,122,0.2);
        }

        .mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.4rem 0;
          text-decoration: none;
          transition: padding-left 0.25s;
        }

        .mob-link:hover { padding-left: 0.5rem; }

        .mob-link-index {
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: var(--coconut);
          font-family: 'DM Sans', sans-serif;
          margin-bottom: 0.1rem;
          text-transform: uppercase;
        }

        .mob-link-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem;
          font-weight: 400;
          line-height: 1;
          color: var(--text-dark);
          transition: color 0.2s;
          letter-spacing: -0.01em;
        }

        .mob-link.is-active .mob-link-label {
          color: var(--forest);
          font-style: italic;
        }

        .mob-link-arrow {
          color: var(--text-light);
          transition: transform 0.25s, color 0.2s;
          flex-shrink: 0;
        }

        .mob-link:hover .mob-link-arrow {
          transform: translateX(4px);
          color: var(--forest);
        }

        /* Mobile footer */
        .mob-footer {
          margin-top: auto;
          padding-top: 2.5rem;
        }

        .mob-footer-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          width: 100%;
          padding: 1.1rem;
          background: var(--forest);
          color: #fff;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(45,90,39,0.25);
          transition: background 0.2s, transform 0.2s;
        }

        .mob-footer-cta:active {
          background: var(--forest-mid);
          transform: scale(0.98);
        }

        .mob-footer-meta {
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-light);
          font-weight: 500;
        }

        .mob-footer-dot {
          width: 4px; height: 4px;
          background: var(--coconut);
          border-radius: 50%;
        }
      `}</style>

      <header
        className={`hdr-root ${isScrolled || mobileOpen ? "scrolled" : "transparent"} ${mobileOpen ? "mobile-open" : ""}`}
      >
        <div className="hdr-inner">

          {/* Logo */}
          <Link href="/#inicio" className="hdr-logo" onClick={() => setMobileOpen(false)}>
            <Image src={"/Logo.svg"} alt={"Logotipo"} width={50} height={50}/>
          </Link>

          {/* Desktop nav */}
          <nav className="hdr-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`hdr-nav-item ${active === item.id ? "is-active" : ""}`}
                onClick={() => setActive(item.id)}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="hdr-nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="https://wa.me/553537141025"
            target="_blank"
            rel="noopener noreferrer"
            className="hdr-cta"
          >
            <WhatsAppIcon />
            Fale Conosco
          </Link>

          {/* Hamburger */}
          <button
            className={`hdr-burger ${mobileOpen ? "is-open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span className="hdr-burger-bar bar1" />
            <span className="hdr-burger-bar bar2" />
            <span className="hdr-burger-bar bar3" />
          </button>
        </div>

        {/* Mobile fullscreen overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="mob-overlay"
              initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
              transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="mob-blob1" />
              <div className="mob-blob2" />

              <div className="mob-inner">
                <nav className="mob-nav">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.id}
                      className="mob-link-wrap"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18 + i * 0.08, ease: [0.25, 0.1, 0.25, 1], duration: 0.5 }}
                    >
                      <Link
                        href={item.href}
                        className={`mob-link ${active === item.id ? "is-active" : ""}`}
                        onClick={() => { setActive(item.id); setMobileOpen(false) }}
                      >
                        <div>
                          <p className="mob-link-index">0{i + 1}</p>
                          <p className="mob-link-label">{item.label}</p>
                        </div>
                        <svg className="mob-link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Footer */}
                <motion.div
                  className="mob-footer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                >
                  <Link
                    href="https://wa.me/553537141025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mob-footer-cta"
                    onClick={() => setMobileOpen(false)}
                  >
                    <WhatsAppIcon />
                    Falar no WhatsApp
                  </Link>

                  <div className="mob-footer-meta">
                    <span>Agrofor</span>
                    <span className="mob-footer-dot" />
                    <span>© 2026</span>
                    <span className="mob-footer-dot" />
                    <span>Fibra de Coco</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
} 