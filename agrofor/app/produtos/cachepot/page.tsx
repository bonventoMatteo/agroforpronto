"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Home, Sparkles, ShieldCheck, Ruler } from "lucide-react"

const TAMANHOS = [
  { cod: "556", nome: "Cachepot Nº 01", dimensoes: "13 × 8 cm",  desc: "Mesa de centro e prateleiras" },
  { cod: "557", nome: "Cachepot Nº 02", dimensoes: "18 × 10 cm", desc: "Aparadores e bancadas" },
  { cod: "558", nome: "Cachepot Nº 03", dimensoes: "21 × 11 cm", desc: "Sala de estar e escritório" },
  { cod: "559", nome: "Cachepot Nº 04", dimensoes: "26 × 13 cm", desc: "Ambientes amplos e varandas" },
  { cod: "560", nome: "Cachepot Nº 05", dimensoes: "30 × 15 cm", desc: "Plantas exuberantes e destaque" },
]

const ATRIBUTOS = [
  { icon: Home,       label: "Interiores",        desc: "Design pensado para dentro de casa" },
  { icon: Sparkles,   label: "Rústico & Elegante", desc: "Textura natural única" },
  { icon: ShieldCheck,label: "Proteção Natural",   desc: "Isola raízes do calor externo" },
  { icon: Ruler,      label: "5 Tamanhos",         desc: "Escala certa para cada vaso" },
]

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function CachepotPage() {
  const [selectedSize, setSelectedSize] = useState(TAMANHOS[0])

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

        .cp-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          min-height: 100svh;
          padding-top: 6rem;
          padding-bottom: 6rem;
          position: relative;
          overflow: hidden;
        }

        /* Same diagonal split as hero */
        .cp-root::before {
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

        @media (max-width: 1023px) { .cp-root::before { display: none; } }

        /* Decorative blob — coconut toned for cachepot's interior/decor personality */
        .cp-blob {
          position: absolute;
          top: 15%; right: 8%;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,169,122,0.13) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .cp-blob-2 {
          position: absolute;
          bottom: 5%; left: -5%;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(45,90,39,0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .cp-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* ── Breadcrumb ─────────────────────────────────────────── */
        .cp-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 3.5rem;
        }

        .cp-back {
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

        .cp-back:hover { color: var(--text-dark); gap: 0.7rem; }
        .cp-back svg   { transition: transform 0.2s; }
        .cp-back:hover svg { transform: translateX(-3px); }

        .cp-breadcrumb-sep     { color: rgba(200,169,122,0.4); font-size: 0.9rem; }
        .cp-breadcrumb-current { font-size: 0.78rem; color: var(--text-mid); font-weight: 400; }

        /* ── Grid ───────────────────────────────────────────────── */
        .cp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        @media (max-width: 1023px) { .cp-grid { grid-template-columns: 1fr; gap: 3rem; } }

        /* ── LEFT ───────────────────────────────────────────────── */
        .cp-left {
          position: sticky;
          top: 7rem;
        }

        @media (max-width: 1023px) { .cp-left { position: relative; top: 0; } }

        .cp-img-frame {
          position: relative;
          aspect-ratio: 1 / 1;
          border-radius: 32px;
          overflow: hidden;
          background: var(--cream);
          border: 1px solid rgba(200,169,122,0.2);
          box-shadow: 0 40px 80px -20px rgba(26,26,24,0.1);
          cursor: zoom-in;
        }

        /* Soft warm gradient overlay — fits interior decor mood */
        .cp-img-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 32px;
          background: linear-gradient(160deg, rgba(200,169,122,0.04) 0%, transparent 50%);
          pointer-events: none;
        }

        .cp-img-frame img {
          transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        .cp-img-frame:hover img { transform: scale(1.06); }

        /* Category chip on image */
        .cp-img-chip {
          position: absolute;
          top: 1.2rem; left: 1.2rem;
          padding: 0.35rem 1rem;
          background: rgba(247,243,238,0.9);
          backdrop-filter: blur(12px);
          border-radius: 100px;
          border: 1px solid rgba(200,169,122,0.3);
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-mid);
          z-index: 2;
        }

        .cp-hd-badge {
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

        /* Attr cards */
        .cp-attrs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          margin-top: 1.2rem;
        }

        @media (max-width: 480px) { .cp-attrs { grid-template-columns: repeat(2, 1fr); } }

        .cp-attr-card {
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

        .cp-attr-card:hover {
          background: rgba(255,255,255,0.9);
          border-color: rgba(200,169,122,0.45);
          transform: translateY(-2px);
        }

        .cp-attr-icon {
          width: 32px; height: 32px;
          border-radius: 10px;
          background: rgba(200,169,122,0.12);
          display: flex; align-items: center; justify-content: center;
          color: var(--coconut);
        }

        .cp-attr-label {
          font-size: 0.62rem;
          font-weight: 500;
          color: var(--text-dark);
          line-height: 1.2;
        }

        .cp-attr-desc {
          font-size: 0.56rem;
          color: var(--text-light);
          line-height: 1.3;
        }

        /* ── RIGHT ──────────────────────────────────────────────── */
        .cp-right { display: flex; flex-direction: column; }

        .cp-eyebrow {
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

        .cp-eyebrow-line { width: 24px; height: 1px; background: var(--coconut); opacity: 0.6; }

        .cp-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 300;
          color: var(--text-dark);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 1.5rem;
        }

        .cp-heading em {
          font-style: italic;
          color: var(--coconut);
          font-weight: 400;
        }

        .cp-desc {
          font-size: 0.95rem;
          color: var(--text-mid);
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        /* ── Size selector ──────────────────────────────────────── */
        .cp-size-label {
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

        .cp-size-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 480px) { .cp-size-grid { grid-template-columns: repeat(2, 1fr); } }

        .cp-size-btn {
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

        .cp-size-btn:hover {
          border-color: var(--coconut);
          background: rgba(255,255,255,0.85);
          transform: translateY(-1px);
        }

        /* Cachepot active uses coconut, not forest — decor mood */
        .cp-size-btn.active {
          border-color: var(--coconut);
          background: rgba(200,169,122,0.07);
        }

        .cp-size-cod {
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-light);
          margin-bottom: 0.3rem;
          transition: color 0.2s;
        }

        .cp-size-btn.active .cp-size-cod { color: var(--coconut); }

        .cp-size-nome {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-dark);
          line-height: 1.1;
          margin-bottom: 0.3rem;
        }

        .cp-size-dim  { font-size: 0.72rem; color: var(--text-light); font-weight: 300; }

        .cp-size-desc-small {
          font-size: 0.62rem;
          color: var(--text-light);
          margin-top: 0.2rem;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .cp-size-btn:hover .cp-size-desc-small,
        .cp-size-btn.active .cp-size-desc-small { opacity: 1; }

        /* Check mark */
        .cp-size-check {
          position: absolute;
          top: 0.7rem; right: 0.7rem;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: var(--coconut);
          display: flex; align-items: center; justify-content: center;
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.2s, transform 0.2s;
        }

        .cp-size-btn.active .cp-size-check { opacity: 1; transform: scale(1); }

        /* Selected strip — coconut toned */
        .cp-selected-strip {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.2rem;
          border-radius: 14px;
          background: rgba(200,169,122,0.08);
          border: 1px solid rgba(200,169,122,0.25);
          margin-bottom: 2rem;
          font-size: 0.82rem;
        }

        .cp-selected-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--coconut);
          flex-shrink: 0;
          animation: cpPulse 2s ease-in-out infinite;
        }

        @keyframes cpPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.65); }
        }

        .cp-selected-text       { color: var(--text-mid); font-weight: 300; }
        .cp-selected-text strong { color: var(--coconut); font-weight: 500; }

        /* ── CTAs ───────────────────────────────────────────────── */
        .cp-cta-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .cp-btn-primary {
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
          border: none;
          width: 100%;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
        }

        .cp-btn-primary:hover {
          background: var(--forest-mid);
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(45,90,39,0.35);
        }

        .cp-btn-secondary {
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

        .cp-btn-secondary:hover { border-color: var(--coconut); color: var(--text-dark); }

        .cp-cta-note {
          text-align: center;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-light);
          padding-top: 0.3rem;
        }

        /* ── Specs table ────────────────────────────────────────── */
        .cp-specs-section {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(200,169,122,0.2);
        }

        .cp-specs-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .cp-specs-title {
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-mid);
          white-space: nowrap;
        }

        .cp-specs-line {
          flex: 1;
          height: 1px;
          background: rgba(200,169,122,0.2);
        }

        .cp-table-wrap {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(200,169,122,0.2);
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(8px);
        }

        .cp-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }

        .cp-table thead { background: rgba(237,231,220,0.6); }

        .cp-table th {
          padding: 0.9rem 1.4rem;
          text-align: left;
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-light);
          border-bottom: 1px solid rgba(200,169,122,0.15);
        }

        .cp-table td {
          padding: 0.9rem 1.4rem;
          border-bottom: 1px solid rgba(200,169,122,0.08);
          color: var(--text-mid);
          font-weight: 300;
        }

        .cp-table tr:last-child td { border-bottom: none; }

        .cp-table tbody tr {
          cursor: pointer;
          transition: background 0.15s;
        }

        .cp-table tbody tr:hover td { background: rgba(237,231,220,0.4); }

        .cp-table tbody tr.is-selected td { background: rgba(200,169,122,0.07); }

        .cp-table-cod {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 500;
          color: var(--coconut);
          letter-spacing: 0.04em;
        }

        .cp-table-nome { font-weight: 400; color: var(--text-dark); }
      `}</style>

      <main className="cp-root">
        <div className="cp-blob" />
        <div className="cp-blob-2" />

        <div className="cp-inner">

          {/* Breadcrumb */}
          <nav className="cp-breadcrumb">
            <Link href="/#produtos" className="cp-back">
              <ArrowLeft size={15} />
              Voltar ao catálogo
            </Link>
            <span className="cp-breadcrumb-sep">·</span>
            <span className="cp-breadcrumb-current">Cachepot</span>
          </nav>

          <div className="cp-grid">

            {/* ── Left ── */}
            <motion.div
              className="cp-left"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="cp-img-frame">
                <Image
                  src="/CACHEPOT.png"
                  alt="Cachepot de Fibra de Coco Agrofor"
                  fill
                  className="object-contain p-14"
                  priority
                />
                <span className="cp-img-chip">Linha Decor</span>
                <span className="cp-hd-badge">Visualização HD</span>
              </div>

              <div className="cp-attrs">
                {ATRIBUTOS.map((a, i) => (
                  <motion.div
                    key={i}
                    className="cp-attr-card"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  >
                    <div className="cp-attr-icon">
                      <a.icon size={16} strokeWidth={1.5} />
                    </div>
                    <p className="cp-attr-label">{a.label}</p>
                    <p className="cp-attr-desc">{a.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Right ── */}
            <motion.div
              className="cp-right"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="cp-eyebrow">
                <span className="cp-eyebrow-line" />
                Linha Decor · Interiores
              </div>

              <h1 className="cp-heading">
                Cache<em>pot</em>
              </h1>

              <p className="cp-desc">
                O equilíbrio perfeito entre sofisticação e natureza. Nossos cachepots em fibra de coco trazem textura rústica e acolhedora — ideais para valorizar ambientes internos e transformar vasos comuns em peças de design sustentável.
              </p>

              {/* Size selector */}
              <div className="cp-size-label">
                <Ruler size={13} strokeWidth={1.5} />
                Selecione o Tamanho
              </div>

              <div className="cp-size-grid">
                {TAMANHOS.map((t) => (
                  <button
                    key={t.cod}
                    className={`cp-size-btn ${selectedSize.cod === t.cod ? "active" : ""}`}
                    onClick={() => setSelectedSize(t)}
                  >
                    <span className="cp-size-check">
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <p className="cp-size-cod">CÓD: {t.cod}</p>
                    <p className="cp-size-nome">{t.nome}</p>
                    <p className="cp-size-dim">{t.dimensoes}</p>
                    <p className="cp-size-desc-small">{t.desc}</p>
                  </button>
                ))}
              </div>

              {/* Selected strip */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSize.cod}
                  className="cp-selected-strip"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="cp-selected-dot" />
                  <span className="cp-selected-text">
                    Selecionado: <strong>{selectedSize.nome}</strong> — {selectedSize.dimensoes} — {selectedSize.desc}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* CTAs */}
              <div className="cp-cta-wrap">
                <Link
                  href={`https://wa.me/553537141025?text=Olá! Gostaria de solicitar uma cotação para o ${selectedSize.nome} (${selectedSize.dimensoes}). Código: ${selectedSize.cod}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cp-btn-primary"
                >
                  <WhatsAppIcon />
                  Solicitar Cotação via WhatsApp
                </Link>

                <a href="mailto:agrofor@agrofor.com.br" className="cp-btn-secondary">
                  Enviar por E-mail
                </a>

                <p className="cp-cta-note">Qualidade Agrofor Garantida</p>
              </div>

              {/* Specs table */}
              <div className="cp-specs-section">
                <div className="cp-specs-header">
                  <span className="cp-specs-title">Especificações da Linha</span>
                  <span className="cp-specs-line" />
                </div>

                <div className="cp-table-wrap">
                  <table className="cp-table">
                    <thead>
                      <tr>
                        <th>Código</th>
                        <th>Modelo</th>
                        <th>Tamanho (Ø × Alt)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TAMANHOS.map((t) => (
                        <tr
                          key={t.cod}
                          className={selectedSize.cod === t.cod ? "is-selected" : ""}
                          onClick={() => setSelectedSize(t)}
                        >
                          <td className="cp-table-cod">{t.cod}</td>
                          <td className="cp-table-nome">{t.nome}</td>
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