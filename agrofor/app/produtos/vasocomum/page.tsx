"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Leaf, Droplets, Box, Ruler } from "lucide-react"

const TAMANHOS = [
  { cod: "379", nome: "Vaso Nº 01", dimensoes: "13 × 8 cm",  desc: "Ideal para suculentas e cactos" },
  { cod: "380", nome: "Vaso Nº 02", dimensoes: "18 × 10 cm", desc: "Perfeito para ervas aromáticas" },
  { cod: "381", nome: "Vaso Nº 03", dimensoes: "21 × 11 cm", desc: "Ótimo para fetos e begônias" },
  { cod: "029", nome: "Vaso Nº 04", dimensoes: "26 × 13 cm", desc: "Ideal para plantas médias" },
  { cod: "030", nome: "Vaso Nº 05", dimensoes: "30 × 15 cm", desc: "Para espécies de maior porte" },
]

const ATRIBUTOS = [
  { icon: Leaf,     label: "100% Orgânico",      desc: "Fibra de coco natural" },
  { icon: Droplets, label: "Drenagem Natural",    desc: "Raízes sempre saudáveis" },
  { icon: Box,      label: "Alta Resistência",    desc: "Longa durabilidade" },
  { icon: Ruler,    label: "5 Tamanhos",          desc: "Para cada planta" },
]

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function VasoClassico() {
  const [selectedSize, setSelectedSize] = useState(TAMANHOS[0])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --cream:        #F7F3EE;
          --warm-beige:   #EDE7DC;
          --coconut:      #C8A97A;
          --coconut-pale: #F3EBD8;
          --forest:       #2D5A27;
          --forest-mid:   #3D7A35;
          --forest-light: #5A9E50;
          --text-dark:    #1A1A18;
          --text-mid:     #4A4840;
          --text-light:   #8A8680;
        }

        /* ── Root ───────────────────────────────────────────────── */
        .pd-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          min-height: 100svh;
          padding-top: 6rem;
          padding-bottom: 6rem;
          position: relative;
          overflow: hidden;
        }

        /* Deco background */
        .pd-root::before {
          content: '';
          position: absolute;
          top: 0; right: -10%;
          width: 55%;
          height: 100%;
          background: var(--warm-beige);
          clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
          z-index: 0;
          pointer-events: none;
        }

        @media (max-width: 1023px) { .pd-root::before { display: none; } }

        .pd-blob {
          position: absolute;
          top: 10%; right: 5%;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,169,122,0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .pd-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* ── Breadcrumb ─────────────────────────────────────────── */
        .pd-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 3.5rem;
        }

        .pd-back {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          font-weight: 400;
          color: var(--text-light);
          text-decoration: none;
          transition: color 0.2s, gap 0.2s;
          letter-spacing: 0.02em;
        }

        .pd-back:hover { color: var(--text-dark); gap: 0.7rem; }

        .pd-back svg { transition: transform 0.2s; }
        .pd-back:hover svg { transform: translateX(-3px); }

        .pd-breadcrumb-sep {
          color: rgba(200,169,122,0.4);
          font-size: 0.9rem;
        }

        .pd-breadcrumb-current {
          font-size: 0.78rem;
          color: var(--text-mid);
          font-weight: 400;
        }

        /* ── Grid ───────────────────────────────────────────────── */
        .pd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        @media (max-width: 1023px) {
          .pd-grid { grid-template-columns: 1fr; gap: 3rem; }
        }

        /* ── LEFT: Image column ─────────────────────────────────── */
        .pd-left {
          position: sticky;
          top: 7rem;
        }

        @media (max-width: 1023px) { .pd-left { position: relative; top: 0; } }

        .pd-img-frame {
          position: relative;
          aspect-ratio: 1 / 1;
          border-radius: 32px;
          overflow: hidden;
          background: var(--cream);
          border: 1px solid rgba(200,169,122,0.2);
          box-shadow: 0 40px 80px -20px rgba(26,26,24,0.1);
          cursor: zoom-in;
        }

        .pd-img-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 32px;
          background: linear-gradient(160deg, transparent 50%, rgba(45,90,39,0.05) 100%);
          pointer-events: none;
        }

        .pd-img-frame img {
          transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        .pd-img-frame:hover img { transform: scale(1.06); }

        /* HD badge */
        .pd-hd-badge {
          position: absolute;
          bottom: 1.2rem;
          left: 50%;
          transform: translateX(-50%);
          padding: 0.4rem 1rem;
          background: rgba(247,243,238,0.85);
          backdrop-filter: blur(12px);
          border-radius: 100px;
          border: 1px solid rgba(200,169,122,0.25);
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-light);
          white-space: nowrap;
          z-index: 2;
        }

        /* Attributes row */
        .pd-attrs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          margin-top: 1.2rem;
        }

        @media (max-width: 480px) { .pd-attrs { grid-template-columns: repeat(2, 1fr); } }

        .pd-attr-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
          padding: 1.1rem 0.5rem;
          border-radius: 18px;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(200,169,122,0.2);
          backdrop-filter: blur(8px);
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }

        .pd-attr-card:hover {
          background: rgba(255,255,255,0.9);
          border-color: rgba(200,169,122,0.4);
          transform: translateY(-2px);
        }

        .pd-attr-icon {
          width: 32px; height: 32px;
          border-radius: 10px;
          background: rgba(45,90,39,0.08);
          display: flex; align-items: center; justify-content: center;
          color: var(--forest);
        }

        .pd-attr-label {
          font-size: 0.65rem;
          font-weight: 500;
          color: var(--text-dark);
          line-height: 1.2;
        }

        .pd-attr-desc {
          font-size: 0.58rem;
          color: var(--text-light);
          line-height: 1.3;
        }

        /* ── RIGHT: Info column ─────────────────────────────────── */
        .pd-right {
          display: flex;
          flex-direction: column;
        }

        .pd-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--forest-mid);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .pd-eyebrow-line {
          width: 24px; height: 1px;
          background: var(--coconut);
        }

        .pd-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5vw, 4rem);
          font-weight: 300;
          color: var(--text-dark);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 1.5rem;
        }

        .pd-heading em {
          font-style: italic;
          color: var(--forest);
          font-weight: 400;
        }

        .pd-desc {
          font-size: 0.95rem;
          color: var(--text-mid);
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        /* ── Size selector ──────────────────────────────────────── */
        .pd-size-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-mid);
          margin-bottom: 1rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(200,169,122,0.2);
        }

        .pd-size-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        @media (max-width: 480px) { .pd-size-grid { grid-template-columns: repeat(2, 1fr); } }

        .pd-size-btn {
          position: relative;
          padding: 1rem 0.8rem;
          border-radius: 18px;
          border: 1.5px solid rgba(200,169,122,0.25);
          background: rgba(255,255,255,0.5);
          text-align: left;
          cursor: pointer;
          transition: border-color 0.25s, background 0.25s, transform 0.2s;
          font-family: 'DM Sans', sans-serif;
        }

        .pd-size-btn:hover {
          border-color: var(--coconut);
          background: rgba(255,255,255,0.8);
          transform: translateY(-1px);
        }

        .pd-size-btn.active {
          border-color: var(--forest);
          background: rgba(45,90,39,0.04);
        }

        .pd-size-cod {
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-light);
          margin-bottom: 0.3rem;
          transition: color 0.2s;
        }

        .pd-size-btn.active .pd-size-cod { color: var(--forest); }

        .pd-size-nome {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-dark);
          line-height: 1.1;
          margin-bottom: 0.3rem;
        }

        .pd-size-dim {
          font-size: 0.72rem;
          color: var(--text-light);
          font-weight: 300;
        }

        .pd-size-desc-small {
          font-size: 0.62rem;
          color: var(--text-light);
          margin-top: 0.2rem;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .pd-size-btn:hover .pd-size-desc-small,
        .pd-size-btn.active .pd-size-desc-small { opacity: 1; }

        /* Active check */
        .pd-size-check {
          position: absolute;
          top: 0.7rem; right: 0.7rem;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: var(--forest);
          display: flex; align-items: center; justify-content: center;
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.2s, transform 0.2s;
        }

        .pd-size-btn.active .pd-size-check {
          opacity: 1;
          transform: scale(1);
        }

        /* Selected info strip */
        .pd-selected-strip {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.2rem;
          border-radius: 14px;
          background: rgba(45,90,39,0.06);
          border: 1px solid rgba(45,90,39,0.12);
          margin-bottom: 2rem;
          font-size: 0.82rem;
        }

        .pd-selected-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--forest);
          flex-shrink: 0;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        .pd-selected-text {
          color: var(--text-mid);
          font-weight: 300;
        }

        .pd-selected-text strong {
          color: var(--forest);
          font-weight: 500;
        }

        /* ── CTA ────────────────────────────────────────────────── */
        .pd-cta-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .pd-btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          padding: 1.1rem 2rem;
          background: var(--forest);
          color: #fff;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 10px 32px rgba(45,90,39,0.25);
          cursor: pointer;
          border: none;
          width: 100%;
          font-family: 'DM Sans', sans-serif;
        }

        .pd-btn-primary:hover {
          background: var(--forest-mid);
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(45,90,39,0.35);
        }

        .pd-btn-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.9rem 2rem;
          background: transparent;
          color: var(--text-mid);
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 400;
          letter-spacing: 0.04em;
          text-decoration: none;
          border: 1.5px solid rgba(200,169,122,0.35);
          transition: border-color 0.25s, color 0.25s;
          width: 100%;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
        }

        .pd-btn-secondary:hover {
          border-color: var(--coconut);
          color: var(--text-dark);
        }

        .pd-cta-note {
          text-align: center;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-light);
          padding-top: 0.3rem;
        }

        /* ── Specs table ────────────────────────────────────────── */
        .pd-specs-section {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(200,169,122,0.2);
        }

        .pd-specs-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .pd-specs-title {
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-mid);
        }

        .pd-specs-line {
          flex: 1;
          height: 1px;
          background: rgba(200,169,122,0.2);
        }

        .pd-table-wrap {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(200,169,122,0.2);
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(8px);
        }

        .pd-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.82rem;
        }

        .pd-table thead {
          background: rgba(237,231,220,0.6);
        }

        .pd-table th {
          padding: 0.9rem 1.4rem;
          text-align: left;
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-light);
          border-bottom: 1px solid rgba(200,169,122,0.15);
        }

        .pd-table td {
          padding: 0.9rem 1.4rem;
          border-bottom: 1px solid rgba(200,169,122,0.08);
          color: var(--text-mid);
          font-weight: 300;
          transition: background 0.15s;
        }

        .pd-table tr:last-child td { border-bottom: none; }

        .pd-table tbody tr { transition: background 0.15s; }

        .pd-table tbody tr:hover td {
          background: rgba(237,231,220,0.35);
        }

        .pd-table tbody tr.is-selected td {
          background: rgba(45,90,39,0.04);
        }

        .pd-table-cod {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 500;
          color: var(--forest);
          letter-spacing: 0.04em;
        }

        .pd-table-nome {
          font-weight: 400;
          color: var(--text-dark);
        }
      `}</style>

      <main className="pd-root">
        <div className="pd-blob" />

        <div className="pd-inner">

          {/* Breadcrumb */}
          <nav className="pd-breadcrumb">
            <Link href="/#produtos" className="pd-back">
              <ArrowLeft size={15} />
              Voltar ao catálogo
            </Link>
            <span className="pd-breadcrumb-sep">·</span>
            <span className="pd-breadcrumb-current">Vaso Clássico</span>
          </nav>

          <div className="pd-grid">

            {/* ── Left: Image ── */}
            <motion.div
              className="pd-left"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="pd-img-frame">
                <Image
                  src="/XaximComum.png"
                  alt="Vaso Clássico de Fibra de Coco"
                  fill
                  className="object-contain p-12"
                  priority
                />
                <span className="pd-hd-badge">Visualização HD</span>
              </div>

              <div className="pd-attrs">
                {ATRIBUTOS.map((a, i) => (
                  <motion.div
                    key={i}
                    className="pd-attr-card"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  >
                    <div className="pd-attr-icon">
                      <a.icon size={16} strokeWidth={1.5} />
                    </div>
                    <p className="pd-attr-label">{a.label}</p>
                    <p className="pd-attr-desc">{a.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Right: Info ── */}
            <motion.div
              className="pd-right"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="pd-eyebrow">
                <span className="pd-eyebrow-line" />
                Categoria: Vasos
              </div>

              <h1 className="pd-heading">
                Vaso<br />
                <em>Clássico</em>
              </h1>

              <p className="pd-desc">
                Experimente a diferença com nossos produtos ecológicos, elaborados a partir da versátil fibra de coco. O design clássico que se adapta ao seu espaço, promovendo crescimento saudável para suas plantas com estética única e materialmente honesta.
              </p>

              {/* Size selector */}
              <div className="pd-size-label">
                <Ruler size={13} strokeWidth={1.5} />
                Guia de Tamanhos
              </div>

              <div className="pd-size-grid">
                {TAMANHOS.map((t) => (
                  <button
                    key={t.cod}
                    className={`pd-size-btn ${selectedSize.cod === t.cod ? "active" : ""}`}
                    onClick={() => setSelectedSize(t)}
                  >
                    <span className="pd-size-check">
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <p className="pd-size-cod">COD: {t.cod}</p>
                    <p className="pd-size-nome">{t.nome}</p>
                    <p className="pd-size-dim">{t.dimensoes}</p>
                    <p className="pd-size-desc-small">{t.desc}</p>
                  </button>
                ))}
              </div>

              {/* Selected strip */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSize.cod}
                  className="pd-selected-strip"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="pd-selected-dot" />
                  <span className="pd-selected-text">
                    Selecionado: <strong>{selectedSize.nome}</strong> — {selectedSize.dimensoes} — {selectedSize.desc}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* CTAs */}
              <div className="pd-cta-wrap">
                <Link
                  href={`https://wa.me/553537141025?text=Olá! Gostaria de solicitar uma cotação para o ${selectedSize.nome} (${selectedSize.dimensoes}). Código: ${selectedSize.cod}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pd-btn-primary"
                >
                  <WhatsAppIcon />
                  Solicitar Cotação via WhatsApp
                </Link>

                <a href="mailto:agrofor@agrofor.com.br" className="pd-btn-secondary">
                  Enviar por E-mail
                </a>

                <p className="pd-cta-note">Qualidade e Sustentabilidade Agrofor</p>
              </div>

              {/* Specs table */}
              <div className="pd-specs-section">
                <div className="pd-specs-header">
                  <span className="pd-specs-title">Especificações Técnicas</span>
                  <span className="pd-specs-line" />
                </div>

                <div className="pd-table-wrap">
                  <table className="pd-table">
                    <thead>
                      <tr>
                        <th>Código</th>
                        <th>Modelo</th>
                        <th>Dimensões (Ø × Alt)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TAMANHOS.map((t) => (
                        <tr
                          key={t.cod}
                          className={selectedSize.cod === t.cod ? "is-selected" : ""}
                          onClick={() => setSelectedSize(t)}
                          style={{ cursor: "pointer" }}
                        >
                          <td className="pd-table-cod">{t.cod}</td>
                          <td className="pd-table-nome">{t.nome}</td>
                          <td>{t.dimensoes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  )
} 