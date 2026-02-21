"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Sprout, Anchor, Leaf, Ruler } from "lucide-react"

const TAMANHOS = [
  { cod: "403", nome: "Estaca Nº 01", dimensoes: "30 × 4 × 1,5 cm", desc: "Mudas e plantas pequenas" },
  { cod: "051", nome: "Estaca Nº 02", dimensoes: "50 × 6 × 6 cm",   desc: "Plantas médias em vaso" },
  { cod: "052", nome: "Estaca Nº 03", dimensoes: "60 × 6 × 6 cm",   desc: "Filodendros e pothos" },
  { cod: "053", nome: "Estaca Nº 04", dimensoes: "80 × 8 × 8 cm",   desc: "Monsteras e trepadeiras" },
  { cod: "054", nome: "Estaca Nº 05", dimensoes: "100 × 8 × 8 cm",  desc: "Espécies de grande porte" },
]

const ATRIBUTOS = [
  { icon: Sprout, label: "Trepadeiras",      desc: "Superfície ideal para raízes aéreas" },
  { icon: Anchor, label: "Fixação Segura",   desc: "Estrutura firme e estável" },
  { icon: Leaf,   label: "Material Orgânico",desc: "Fibra de coco natural" },
  { icon: Ruler,  label: "5 Alturas",        desc: "Do vaso ao jardim vertical" },
]

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function EstacaPage() {
  const [selectedSize, setSelectedSize] = useState(TAMANHOS[0])

  // Compute visual height percentage for the size indicator bar
  const heights = [30, 50, 60, 80, 100]
  const selectedHeight = heights[TAMANHOS.findIndex(t => t.cod === selectedSize.cod)]
  const maxHeight = 100
  const heightPct = Math.round((selectedHeight / maxHeight) * 100)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

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

        .es-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          min-height: 100svh;
          padding-top: 6rem;
          padding-bottom: 6rem;
          position: relative;
          overflow: hidden;
        }

        .es-root::before {
          content: '';
          position: absolute;
          top: 0; right: -10%;
          width: 55%; height: 100%;
          background: var(--warm-beige);
          clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
          z-index: 0; pointer-events: none;
        }

        @media (max-width: 1023px) { .es-root::before { display: none; } }

        .es-blob {
          position: absolute;
          top: 8%; right: 4%;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(45,90,39,0.08) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        .es-blob-2 {
          position: absolute;
          bottom: 10%; left: -8%;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,169,122,0.09) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        .es-inner {
          position: relative; z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* ── Breadcrumb ─────────────────────────────────────────── */
        .es-breadcrumb { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 3.5rem; }

        .es-back {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.78rem; font-weight: 400;
          color: var(--text-light); text-decoration: none;
          transition: color 0.2s, gap 0.2s; letter-spacing: 0.02em;
        }
        .es-back:hover { color: var(--text-dark); gap: 0.7rem; }
        .es-back svg   { transition: transform 0.2s; }
        .es-back:hover svg { transform: translateX(-3px); }
        .es-sep     { color: rgba(200,169,122,0.4); font-size: 0.9rem; }
        .es-current { font-size: 0.78rem; color: var(--text-mid); font-weight: 400; }

        /* ── Grid ─────────────────────────────────────────────── */
        .es-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem; align-items: start;
        }
        @media (max-width: 1023px) { .es-grid { grid-template-columns: 1fr; gap: 3rem; } }

        /* ── LEFT ─────────────────────────────────────────────── */
        .es-left { position: sticky; top: 7rem; }
        @media (max-width: 1023px) { .es-left { position: relative; top: 0; } }

        /* Tall aspect ratio — suits a vertical stake */
        .es-img-frame {
          position: relative;
          aspect-ratio: 3 / 4;
          border-radius: 32px; overflow: hidden;
          background: var(--cream);
          border: 1px solid rgba(200,169,122,0.2);
          box-shadow: 0 40px 80px -20px rgba(26,26,24,0.1);
          cursor: zoom-in;
        }

        .es-img-frame::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: 32px;
          background: linear-gradient(180deg, transparent 55%, rgba(45,90,39,0.06) 100%);
          pointer-events: none;
        }

        .es-img-frame img { transition: transform 0.8s cubic-bezier(0.25,0.1,0.25,1); }
        .es-img-frame:hover img { transform: scale(1.05); }

        .es-img-chip {
          position: absolute; top: 1.2rem; left: 1.2rem;
          padding: 0.35rem 1rem;
          background: rgba(247,243,238,0.9); backdrop-filter: blur(12px);
          border-radius: 100px; border: 1px solid rgba(200,169,122,0.3);
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--text-mid); z-index: 2;
        }

        /* Height indicator — unique to stakes */
        .es-height-indicator {
          position: absolute;
          bottom: 1.5rem; right: 1.5rem;
          display: flex; flex-direction: column; align-items: center;
          gap: 0.4rem; z-index: 2;
        }

        .es-height-track {
          width: 4px; height: 80px;
          background: rgba(247,243,238,0.5);
          border-radius: 4px; overflow: hidden;
          position: relative;
        }

        .es-height-fill {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: var(--forest-light);
          border-radius: 4px;
          transition: height 0.6s cubic-bezier(0.34,1.56,0.64,1);
        }

        .es-height-label {
          font-size: 0.58rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(247,243,238,0.8);
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        .es-hd-badge {
          position: absolute; bottom: 1.2rem; left: 50%;
          transform: translateX(-50%);
          padding: 0.4rem 1rem;
          background: rgba(247,243,238,0.85); backdrop-filter: blur(12px);
          border-radius: 100px; border: 1px solid rgba(200,169,122,0.25);
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--text-light); white-space: nowrap; z-index: 2;
        }

        /* Attrs */
        .es-attrs {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem; margin-top: 1.2rem;
        }
        @media (max-width: 480px) { .es-attrs { grid-template-columns: repeat(2, 1fr); } }

        .es-attr-card {
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          gap: 0.5rem; padding: 1.1rem 0.5rem;
          border-radius: 18px;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(200,169,122,0.2);
          backdrop-filter: blur(8px);
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }
        .es-attr-card:hover {
          background: rgba(255,255,255,0.9);
          border-color: rgba(45,90,39,0.25);
          transform: translateY(-2px);
        }
        .es-attr-icon {
          width: 32px; height: 32px; border-radius: 10px;
          background: rgba(45,90,39,0.08);
          display: flex; align-items: center; justify-content: center;
          color: var(--forest);
        }
        .es-attr-label { font-size: 0.62rem; font-weight: 500; color: var(--text-dark); line-height: 1.2; }
        .es-attr-desc  { font-size: 0.56rem; color: var(--text-light); line-height: 1.3; }

        /* ── RIGHT ────────────────────────────────────────────── */
        .es-right { display: flex; flex-direction: column; }

        .es-eyebrow {
          display: inline-flex; align-items: center; gap: 0.6rem;
          color: var(--forest-mid);
          font-size: 0.68rem; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .es-eyebrow-line { width: 24px; height: 1px; background: var(--coconut); }

        .es-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 300; color: var(--text-dark);
          line-height: 1.05; letter-spacing: -0.02em;
          margin: 0 0 1.5rem;
        }
        .es-heading em { font-style: italic; color: var(--forest); font-weight: 400; }

        .es-desc {
          font-size: 0.95rem; color: var(--text-mid);
          line-height: 1.8; font-weight: 300;
          margin-bottom: 2.5rem; max-width: 500px;
        }

        /* ── Size selector ──────────────────────────────────────── */
        .es-size-label {
          display: flex; align-items: center; gap: 0.6rem;
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--text-mid);
          margin-bottom: 1rem; padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(200,169,122,0.2);
        }

        .es-size-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem; margin-bottom: 2rem;
        }
        @media (max-width: 480px) { .es-size-grid { grid-template-columns: 1fr; } }

        .es-size-btn {
          position: relative;
          padding: 1rem 0.9rem;
          border-radius: 18px;
          border: 1.5px solid rgba(200,169,122,0.25);
          background: rgba(255,255,255,0.5);
          text-align: left; cursor: pointer;
          transition: border-color 0.25s, background 0.25s, transform 0.2s;
          font-family: 'DM Sans', sans-serif;
          display: flex; align-items: center; gap: 0.8rem;
        }
        .es-size-btn:hover {
          border-color: var(--coconut);
          background: rgba(255,255,255,0.85);
          transform: translateY(-1px);
        }
        .es-size-btn.active {
          border-color: var(--forest);
          background: rgba(45,90,39,0.04);
        }

        /* Mini height bar inside each button */
        .es-size-bar-wrap {
          width: 3px;
          background: rgba(200,169,122,0.2);
          border-radius: 3px;
          flex-shrink: 0;
          align-self: stretch;
          min-height: 48px;
          position: relative;
          overflow: hidden;
        }

        .es-size-bar-fill {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: var(--forest-light);
          border-radius: 3px;
          transition: height 0.4s ease;
        }

        .es-size-btn.active .es-size-bar-fill { background: var(--forest); }

        .es-size-info { flex: 1; }

        .es-size-cod {
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--text-light); margin-bottom: 0.3rem;
          transition: color 0.2s;
        }
        .es-size-btn.active .es-size-cod { color: var(--forest); }

        .es-size-nome {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem; font-weight: 500;
          color: var(--text-dark); line-height: 1.1; margin-bottom: 0.25rem;
        }
        .es-size-dim { font-size: 0.72rem; color: var(--text-light); font-weight: 300; }
        .es-size-desc-small {
          font-size: 0.62rem; color: var(--text-light);
          margin-top: 0.2rem; opacity: 0; transition: opacity 0.2s;
        }
        .es-size-btn:hover .es-size-desc-small,
        .es-size-btn.active .es-size-desc-small { opacity: 1; }

        .es-size-check {
          position: absolute; top: 0.65rem; right: 0.65rem;
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--forest);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transform: scale(0.5);
          transition: opacity 0.2s, transform 0.2s;
        }
        .es-size-btn.active .es-size-check { opacity: 1; transform: scale(1); }

        /* Selected strip */
        .es-selected-strip {
          display: flex; align-items: center; gap: 1rem;
          padding: 1rem 1.2rem; border-radius: 14px;
          background: rgba(45,90,39,0.05);
          border: 1px solid rgba(45,90,39,0.12);
          margin-bottom: 2rem; font-size: 0.82rem;
        }
        .es-selected-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--forest); flex-shrink: 0;
          animation: esPulse 2s ease-in-out infinite;
        }
        @keyframes esPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(0.65); }
        }
        .es-selected-text       { color: var(--text-mid); font-weight: 300; }
        .es-selected-text strong { color: var(--forest); font-weight: 500; }

        /* ── CTAs ─────────────────────────────────────────────── */
        .es-cta-wrap { display: flex; flex-direction: column; gap: 0.8rem; }

        .es-btn-primary {
          display: flex; align-items: center; justify-content: center;
          gap: 0.7rem; padding: 1.1rem 2rem;
          background: var(--forest); color: #fff;
          border-radius: 100px;
          font-size: 0.85rem; font-weight: 500; letter-spacing: 0.04em;
          text-decoration: none;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 10px 32px rgba(45,90,39,0.25);
          border: none; width: 100%;
          font-family: 'DM Sans', sans-serif; cursor: pointer;
        }
        .es-btn-primary:hover {
          background: var(--forest-mid);
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(45,90,39,0.35);
        }

        .es-btn-secondary {
          display: flex; align-items: center; justify-content: center;
          gap: 0.6rem; padding: 0.9rem 2rem;
          background: transparent; color: var(--text-mid);
          border-radius: 100px;
          font-size: 0.78rem; font-weight: 400; letter-spacing: 0.04em;
          text-decoration: none;
          border: 1.5px solid rgba(200,169,122,0.35);
          transition: border-color 0.25s, color 0.25s;
          width: 100%; font-family: 'DM Sans', sans-serif; cursor: pointer;
        }
        .es-btn-secondary:hover { border-color: var(--coconut); color: var(--text-dark); }

        .es-cta-note {
          text-align: center; font-size: 0.62rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--text-light); padding-top: 0.3rem;
        }

        /* ── Specs table ──────────────────────────────────────── */
        .es-specs-section {
          margin-top: 4rem; padding-top: 3rem;
          border-top: 1px solid rgba(200,169,122,0.2);
        }
        .es-specs-header {
          display: flex; align-items: center;
          gap: 0.8rem; margin-bottom: 1.5rem;
        }
        .es-specs-title {
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--text-mid); white-space: nowrap;
        }
        .es-specs-line { flex: 1; height: 1px; background: rgba(200,169,122,0.2); }

        .es-table-wrap {
          border-radius: 20px; overflow: hidden;
          border: 1px solid rgba(200,169,122,0.2);
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(8px);
        }
        .es-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
        .es-table thead { background: rgba(237,231,220,0.6); }
        .es-table th {
          padding: 0.9rem 1.4rem; text-align: left;
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--text-light);
          border-bottom: 1px solid rgba(200,169,122,0.15);
        }
        .es-table td {
          padding: 0.9rem 1.4rem;
          border-bottom: 1px solid rgba(200,169,122,0.08);
          color: var(--text-mid); font-weight: 300;
        }
        .es-table tr:last-child td { border-bottom: none; }
        .es-table tbody tr { cursor: pointer; transition: background 0.15s; }
        .es-table tbody tr:hover td { background: rgba(237,231,220,0.4); }
        .es-table tbody tr.is-selected td { background: rgba(45,90,39,0.04); }
        .es-table-cod {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem; font-weight: 500;
          color: var(--forest); letter-spacing: 0.04em;
        }
        .es-table-nome { font-weight: 400; color: var(--text-dark); }
      `}</style>

      <main className="es-root">
        <div className="es-blob" />
        <div className="es-blob-2" />

        <div className="es-inner">

          {/* Breadcrumb */}
          <nav className="es-breadcrumb">
            <Link href="/#produtos" className="es-back">
              <ArrowLeft size={15} />
              Voltar ao catálogo
            </Link>
            <span className="es-sep">·</span>
            <span className="es-current">Estaca de Fibra</span>
          </nav>

          <div className="es-grid">

            {/* ── Left ── */}
            <motion.div
              className="es-left"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="es-img-frame">
                <Image
                  src="/estacaempe.png"
                  alt="Estaca de Fibra de Coco Agrofor"
                  fill
                  className="object-contain p-10"
                  priority
                />
                <span className="es-img-chip">Suporte Estrutural</span>

                {/* Height indicator — unique to this product */}
                <div className="es-height-indicator">
                  <div className="es-height-track">
                    <motion.div
                      className="es-height-fill"
                      animate={{ height: `${heightPct}%` }}
                      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                    />
                  </div>
                  <span className="es-height-label">{selectedHeight}cm</span>
                </div>

                <span className="es-hd-badge">Visualização HD</span>
              </div>

              <div className="es-attrs">
                {ATRIBUTOS.map((a, i) => (
                  <motion.div
                    key={i}
                    className="es-attr-card"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  >
                    <div className="es-attr-icon">
                      <a.icon size={16} strokeWidth={1.5} />
                    </div>
                    <p className="es-attr-label">{a.label}</p>
                    <p className="es-attr-desc">{a.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Right ── */}
            <motion.div
              className="es-right"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="es-eyebrow">
                <span className="es-eyebrow-line" />
                Linha de Suporte
              </div>

              <h1 className="es-heading">
                Estaca de<br />
                <em>Fibra</em>
              </h1>

              <p className="es-desc">
                A solução ideal para conduzir o crescimento de plantas trepadeiras e ornamentais. Superfície porosa que facilita a fixação das raízes aéreas, mantendo a umidade e fornecendo sustentação para um desenvolvimento saudável e vigoroso.
              </p>

              {/* Size selector */}
              <div className="es-size-label">
                <Ruler size={13} strokeWidth={1.5} />
                Dimensões Disponíveis
              </div>

              <div className="es-size-grid">
                {TAMANHOS.map((t, i) => {
                  const pct = Math.round((heights[i] / maxHeight) * 100)
                  return (
                    <button
                      key={t.cod}
                      className={`es-size-btn ${selectedSize.cod === t.cod ? "active" : ""}`}
                      onClick={() => setSelectedSize(t)}
                    >
                      <span className="es-size-check">
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                          <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {/* Mini height bar */}
                      <div className="es-size-bar-wrap">
                        <div className="es-size-bar-fill" style={{ height: `${pct}%` }} />
                      </div>
                      <div className="es-size-info">
                        <p className="es-size-cod">CÓD: {t.cod}</p>
                        <p className="es-size-nome">{t.nome}</p>
                        <p className="es-size-dim">{t.dimensoes}</p>
                        <p className="es-size-desc-small">{t.desc}</p>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Selected strip */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSize.cod}
                  className="es-selected-strip"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="es-selected-dot" />
                  <span className="es-selected-text">
                    <strong>{selectedSize.nome}</strong> — {selectedSize.dimensoes} — {selectedSize.desc}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* CTAs */}
              <div className="es-cta-wrap">
                <Link
                  href={`https://wa.me/553537141025?text=Olá! Gostaria de solicitar uma cotação para a ${selectedSize.nome} (${selectedSize.dimensoes}). Código: ${selectedSize.cod}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="es-btn-primary"
                >
                  <WhatsAppIcon />
                  Solicitar Cotação via WhatsApp
                </Link>

                <a href="mailto:agrofor@agrofor.com.br" className="es-btn-secondary">
                  Enviar por E-mail
                </a>

                <p className="es-cta-note">Sustentabilidade em cada centímetro</p>
              </div>

              {/* Specs table */}
              <div className="es-specs-section">
                <div className="es-specs-header">
                  <span className="es-specs-title">Informações Técnicas</span>
                  <span className="es-specs-line" />
                </div>

                <div className="es-table-wrap">
                  <table className="es-table">
                    <thead>
                      <tr>
                        <th>Código</th>
                        <th>Referência</th>
                        <th>Medidas (Comp. × Larg. × Esp.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TAMANHOS.map((t) => (
                        <tr
                          key={t.cod}
                          className={selectedSize.cod === t.cod ? "is-selected" : ""}
                          onClick={() => setSelectedSize(t)}
                        >
                          <td className="es-table-cod">{t.cod}</td>
                          <td className="es-table-nome">{t.nome}</td>
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