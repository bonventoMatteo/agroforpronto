"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, ArrowUp } from "lucide-react"

const navLinks = [
  { label: "Início",    href: "#inicio"   },
  { label: "Agrofor",   href: "#agrofor"  },
  { label: "Produtos",  href: "#produtos" },
  { label: "Contato",   href: "#contato"  },
]

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --cream:        #F7F3EE;
          --warm-beige:   #EDE7DC;
          --coconut:      #C8A97A;
          --forest:       #2D5A27;
          --forest-mid:   #3D7A35;
          --forest-light: #5A9E50;
          --text-dark:    #1A1A18;
          --text-mid:     #4A4840;
          --text-light:   #8A8680;
        }

        /* ── Root ───────────────────────────────────────────────── */
        .ft-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--text-dark);
          position: relative;
          overflow: hidden;
        }

        /* Organic blob */
        .ft-blob {
          position: absolute;
          pointer-events: none;
        }

        .ft-blob-1 {
          top: -120px; left: -120px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(45,90,39,0.18) 0%, transparent 70%);
        }

        .ft-blob-2 {
          bottom: -80px; right: -100px;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,169,122,0.1) 0%, transparent 70%);
        }

        /* ── CTA band ───────────────────────────────────────────── */
        .ft-cta-band {
          position: relative;
          z-index: 2;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 5rem 2rem;
        }

        .ft-cta-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .ft-cta-text {}

        .ft-cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--coconut);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .ft-cta-eyebrow-line {
          width: 24px; height: 1px;
          background: var(--coconut);
          opacity: 0.5;
        }

        .ft-cta-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4vw, 3.6rem);
          font-weight: 300;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .ft-cta-heading em {
          font-style: italic;
          color: var(--coconut);
          font-weight: 400;
        }

        .ft-cta-actions {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          flex-shrink: 0;
        }

        .ft-btn-wa {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 1.8rem;
          background: var(--forest);
          color: #fff;
          border-radius: 100px;
          font-size: 0.82rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 8px 28px rgba(45,90,39,0.35);
          white-space: nowrap;
        }

        .ft-btn-wa:hover {
          background: var(--forest-mid);
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(45,90,39,0.45);
        }

        .ft-btn-email {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 1.8rem;
          background: transparent;
          color: rgba(255,255,255,0.55);
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.12);
          font-size: 0.82rem;
          font-weight: 400;
          text-decoration: none;
          transition: border-color 0.25s, color 0.25s;
          white-space: nowrap;
        }

        .ft-btn-email:hover {
          border-color: var(--coconut);
          color: var(--coconut);
        }

        /* ── Main grid ──────────────────────────────────────────── */
        .ft-main {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 2rem 3rem;
          display: grid;
          grid-template-columns: 2fr 1fr 1.4fr 1.4fr;
          gap: 4rem;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 1024px) {
          .ft-main { grid-template-columns: 1fr 1fr; gap: 3rem; }
        }

        @media (max-width: 600px) {
          .ft-main { grid-template-columns: 1fr; gap: 2.5rem; }
        }

        /* Brand col */
        .ft-brand {}

        .ft-logo-wrap {
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .ft-logo-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 400;
          color: #fff;
          letter-spacing: 0.06em;
          line-height: 1;
        }

        .ft-logo-text span { color: var(--coconut); }

        .ft-tagline {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.35);
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: 1.5rem;
        }

        .ft-cnpj {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.18);
          letter-spacing: 0.06em;
        }

        /* Column labels */
        .ft-col-label {
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 1.5rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        /* Nav links */
        .ft-nav-list {
          list-style: none;
          margin: 0; padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .ft-nav-link {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.2s, gap 0.2s;
          font-weight: 300;
        }

        .ft-nav-link::before {
          content: '';
          width: 0;
          height: 1px;
          background: var(--coconut);
          transition: width 0.25s;
          flex-shrink: 0;
        }

        .ft-nav-link:hover {
          color: var(--coconut);
          gap: 0.8rem;
        }

        .ft-nav-link:hover::before { width: 12px; }

        /* Contact items */
        .ft-contact-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .ft-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
          text-decoration: none;
          group: true;
        }

        .ft-contact-icon {
          width: 34px; height: 34px;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.07);
          display: flex; align-items: center; justify-content: center;
          color: var(--coconut);
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }

        .ft-contact-item:hover .ft-contact-icon {
          background: rgba(200,169,122,0.12);
          border-color: rgba(200,169,122,0.3);
        }

        .ft-contact-label {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.22);
          margin-bottom: 0.2rem;
        }

        .ft-contact-value {
          font-size: 0.83rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.5;
          font-weight: 300;
          transition: color 0.2s;
        }

        .ft-contact-item:hover .ft-contact-value { color: rgba(255,255,255,0.8); }

        .ft-map-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--forest-light);
          text-decoration: none;
          margin-top: 0.3rem;
          transition: color 0.2s;
        }

        .ft-map-link:hover { color: var(--coconut); }

        /* ── Divider ────────────────────────────────────────────── */
        .ft-divider {
          max-width: 1280px;
          margin: 0 auto;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent);
          position: relative;
          z-index: 2;
        }

        /* ── Bottom bar ─────────────────────────────────────────── */
        .ft-bottom {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1.6rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }

        .ft-copy {
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
        }

        .ft-bottom-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .ft-dev-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .ft-dev-link:hover { opacity: 0.75; }

        .ft-dev-text {
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.2);
          text-transform: uppercase;
        }

        .ft-dev-text strong {
          color: rgba(255,255,255,0.4);
          font-weight: 500;
        }

        .ft-dev-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--forest-light);
          flex-shrink: 0;
        }

        /* Back to top */
        .ft-top-btn {
          width: 38px; height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: rgba(255,255,255,0.4);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.25s;
        }

        .ft-top-btn:hover {
          background: var(--forest);
          border-color: var(--forest);
          color: #fff;
          transform: translateY(-3px);
        }
      `}</style>

      <footer id="contato" className="ft-root">
        <div className="ft-blob ft-blob-1" />
        <div className="ft-blob ft-blob-2" />

        {/* ── CTA band ── */}
        <motion.div
          className="ft-cta-band"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="ft-cta-inner">
            <div className="ft-cta-text">
              <div className="ft-cta-eyebrow">
                <span className="ft-cta-eyebrow-line" />
                Vamos conversar
              </div>
              <h2 className="ft-cta-heading">
                Pronto para trazer a<br />
                <em>natureza</em> ao seu espaço?
              </h2>
            </div>

            <div className="ft-cta-actions">
              <a
                href="https://wa.me/553537141025"
                target="_blank"
                rel="noopener noreferrer"
                className="ft-btn-wa"
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
              <a
                href="mailto:agrofor@agrofor.com.br"
                className="ft-btn-email"
              >
                <Mail size={15} />
                agrofor@agrofor.com.br
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Main grid ── */}
        <motion.div
          className="ft-main"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* Brand */}
          <div className="ft-brand">
            <Link href="#inicio" className="ft-logo-wrap">
              <p className="ft-logo-text">Agro<span>for</span></p>
            </Link>
            <p className="ft-tagline">
              Transformamos fibra de coco em soluções<br />
              ecológicas para quem respeita o planeta.
            </p>
            <p className="ft-cnpj">CNPJ: 21.193.586/0001-28</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="ft-col-label">Navegação</p>
            <ul className="ft-nav-list">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="ft-nav-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <p className="ft-col-label">Onde Estamos</p>
            <div className="ft-contact-list">
              <div className="ft-contact-item">
                <div className="ft-contact-icon">
                  <MapPin size={15} />
                </div>
                <div>
                  <p className="ft-contact-label">Endereço</p>
                  <address className="ft-contact-value" style={{ fontStyle: "normal" }}>
                    Av. Padre Francis Cletus Cox, 301<br />
                    Jd. Country Club<br />
                    Poços de Caldas — MG
                  </address>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ft-map-link"
                  >
                    Ver no mapa →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="ft-col-label">Atendimento</p>
            <div className="ft-contact-list">
              <a href="tel:+553537141025" className="ft-contact-item">
                <div className="ft-contact-icon">
                  <Phone size={15} />
                </div>
                <div>
                  <p className="ft-contact-label">Telefone</p>
                  <p className="ft-contact-value">(35) 3714-1025</p>
                </div>
              </a>

              <a href="https://wa.me/553537141025" target="_blank" rel="noopener noreferrer" className="ft-contact-item">
                <div className="ft-contact-icon">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="ft-contact-label">WhatsApp</p>
                  <p className="ft-contact-value">(35) 3714-1025</p>
                </div>
              </a>

              <a href="mailto:agrofor@agrofor.com.br" className="ft-contact-item">
                <div className="ft-contact-icon">
                  <Mail size={15} />
                </div>
                <div>
                  <p className="ft-contact-label">E-mail</p>
                  <p className="ft-contact-value">agrofor@agrofor.com.br</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="ft-divider" />

        {/* Bottom bar */}
        <div className="ft-bottom">
          <p className="ft-copy">© {year} Agrofor. Todos os direitos reservados.</p>

          <div className="ft-bottom-right">
            <a
              href="https://www.instagram.com/obonvento/"
              target="_blank"
              rel="noopener noreferrer"
              className="ft-dev-link"
            >
              <span className="ft-dev-text">
                Desenvolvido por <strong>Matteo Bonvento</strong>
              </span>
              <span className="ft-dev-dot" />
            </a>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ft-top-btn"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}