"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Layers, Droplets, ShieldCheck, Ruler } from "lucide-react"

const TAMANHOS = [
  { cod: "556", nome: "Meio-Vaso Nº 01", dimensoes: "13 × 8 cm",  desc: "Muros e painéis pequenos" },
  { cod: "557", nome: "Meio-Vaso Nº 02", dimensoes: "18 × 10 cm", desc: "Paredes de corredor" },
  { cod: "558", nome: "Meio-Vaso Nº 03", dimensoes: "21 × 11 cm", desc: "Jardins verticais internos" },
  { cod: "559", nome: "Meio-Vaso Nº 04", dimensoes: "26 × 13 cm", desc: "Fachadas e áreas externas" },
  { cod: "560", nome: "Meio-Vaso Nº 05", dimensoes: "30 × 15 cm", desc: "Grandes painéis verdes" },
]

const ATRIBUTOS = [
  { icon: Layers,      label: "Ideal p/ Paredes",     desc: "Face plana para fixação direta" },
  { icon: Droplets,    label: "Retenção de Umidade",  desc: "Fibra regula a água naturalmente" },
  { icon: ShieldCheck, label: "Durabilidade Extra",   desc: "Resiste às intempéries" },
  { icon: Ruler,       label: "5 Tamanhos",           desc: "Do muro ao painel monumental" },
]

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function MeioVaso() {
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

        .mv-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          min-height: 100svh;
          padding-top: 6rem;
          padding-bottom: 6rem;
          position: relative;
          overflow: hidden;
        }

        .mv-root::before {
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

        @media (max-width: 1023px) { .mv-root::before { display: none; } }

        /* Green-dominant blobs — vertical garden mood */
        .mv-blob {
          position: absolute;
          top: 8%; right: 5%;
          width: 450px; height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(45,90,39,0.11) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        .mv-blob-2 {
          position: absolute;
          bottom: 5%; left: -8%;
          width: 350px; height: 350px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(90,158,80,0.07) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        .mv-inner {
          position: relative; z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* ── Breadcrumb ─────────────────────────────────────────── */
        .mv-breadcrumb {
          display: flex; align-items: center;
          gap: 0.75rem; margin-bottom: 3.5rem;
        }

        .mv-back {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.78rem; font-weight: 400;
          color: var(--text-light); text-decoration: none;
          transition: color 0.2s, gap 0.2s; letter-spacing: 0.02em;
        }

        .mv-back:hover { color: var(--text-dark); gap: 0.7rem; }
        .mv-back svg   { transition: transform 0.2s; }
        .mv-back:hover svg { transform: translateX(-3px); }

        .mv-sep     { color: rgba(200,169,122,0.4); font-size: 0.9rem; }
        .mv-current { font-size: 0.78rem; color: var(--text-mid); font-weight: 400; }

        /* ── Grid ─────────────────────────────────────────────── */
        .mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem; align-items: start;
        }

        @media (max-width: 1023px) { .mv-grid { grid-template-columns: 1fr; gap: 3rem; } }

        /* ── LEFT ─────────────────────────────────────────────── */
        .mv-left { position: sticky; top: 7rem; }
        @media (max-width: 1023px) { .mv-left { position: relative; top: 0; } }

        .mv-img-frame {
          position: relative;
          aspect-ratio: 1 / 1;
          border-radius: 32px; overflow: hidden;
          background: var(--cream);
          border: 1px solid rgba(200,169,122,0.2);
          box-shadow: 0 40px 80px -20px rgba(26,26,24,0.1);
          cursor: zoom-in;
        }

        .mv-img-frame::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: 32px;
          background: linear-gradient(200deg, rgba(90,158,80,0.06) 0%, transparent 55%);
          pointer-events: none;
        }

        .mv-img-frame img { transition: transform 0.8s cubic-bezier(0.25,0.1,0.25,1); }
        .mv-img-frame:hover img { transform: scale(1.06); }

        /* Jardim Vertical badge — bottom right corner */
        .mv-img-chip {
          position: absolute;
          bottom: 1.2rem; right: 1.2rem;
          padding: 0.35rem 1rem;
          background: rgba(247,243,238,0.9);
          backdrop-filter: blur(12px);
          border-radius: 100px;
          border: 1px solid rgba(90,158,80,0.3);
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--forest); z-index: 2;
        }

        .mv-hd-badge {
          position: absolute;
          bottom: 1.2rem; left: 50%;
          transform: translateX(-50%);
          padding: 0.4rem 1rem;
          background: rgba(247,243,238,0.85);
          backdrop-filter: blur(12px);
          border-radius: 100px;
          border: 1px solid rgba(200,169,122,0.25);
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--text-light); white-space: nowrap; z-index: 2;
        }

        /* Attrs */
        .mv-attrs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem; margin-top: 1.2rem;
        }

        @media (max-width: 480px) { .mv-attrs { grid-template-columns: repeat(2, 1fr); } }

        .mv-attr-card {
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          gap: 0.5rem; padding: 1.1rem 0.5rem;
          border-radius: 18px;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(200,169,122,0.2);
          backdrop-filter: blur(8px);
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }

        .mv-attr-card:hover {
          background: rgba(255,255,255,0.9);
          border-color: rgba(45,90,39,0.25);
          transform: translateY(-2px);
        }

        .mv-attr-icon {
          width: 32px; height: 32px;
          border-radius: 10px;
          background: rgba(45,90,39,0.08);
          display: flex; align-items: center; justify-content: center;
          color: var(--forest);
        }

        .mv-attr-label { font-size: 0.62rem; font-weight: 500; color: var(--text-dark); line-height: 1.2; }
        .mv-attr-desc  { font-size: 0.56rem; color: var(--text-light); line-height: 1.3; }

        /* ── RIGHT ────────────────────────────────────────────── */
        .mv-right { display: flex; flex-direction: column; }

        .mv-eyebrow {
          display: inline-flex; align-items: center; gap: 0.6rem;
          color: var(--forest-mid);
          font-size: 0.68rem; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .mv-eyebrow-line { width: 24px; height: 1px; background: var(--coconut); }

        .mv-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 300;
          color: var(--text-dark);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 1.5rem;
        }

        .mv-heading em { font-style: italic; color: var(--forest); font-weight: 400; }

        .mv-desc {
          font-size: 0.95rem; color: var(--text-mid);
          line-height: 1.8; font-weight: 300;
          margin-bottom: 2.5rem; max-width: 500px;
        }

        /* ── Size selector ──────────────────────────────────────── */
        .mv-size-label {
          display: flex; align-items: center; gap: 0.6rem;
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--text-mid);
          margin-bottom: 1rem; padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(200,169,122,0.2);
        }

        .mv-size-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem; margin-bottom: 2rem;
        }

        @media (max-width: 480px) { .mv-size-grid { grid-template-columns: repeat(2, 1fr); } }

        .mv-size-btn {
          position: relative;
          padding: 1rem 0.8rem;
          border-radius: 18px;
          border: 1.5px solid rgba(200,169,122,0.25);
          background: rgba(255,255,255,0.5);
          text-align: left; cursor: pointer;
          transition: border-color 0.25s, background 0.25s, transform 0.2s;
          font-family: 'DM Sans', sans-serif;
        }

        .mv-size-btn:hover {
          border-color: var(--coconut);
          background: rgba(255,255,255,0.85);
          transform: translateY(-1px);
        }

        .mv-size-btn.active {
          border-color: var(--forest);
          background: rgba(45,90,39,0.04);
        }

        .mv-size-cod {
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--text-light); margin-bottom: 0.3rem;
          transition: color 0.2s;
        }

        .mv-size-btn.active .mv-size-cod { color: var(--forest); }

        .mv-size-nome {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem; font-weight: 500;
          color: var(--text-dark); line-height: 1.1; margin-bottom: 0.3rem;
        }

        .mv-size-dim  { font-size: 0.72rem; color: var(--text-light); font-weight: 300; }

        .mv-size-desc-small {
          font-size: 0.62rem; color: var(--text-light);
          margin-top: 0.2rem; opacity: 0;
          transition: opacity 0.2s;
        }

        .mv-size-btn:hover .mv-size-desc-small,
        .mv-size-btn.active .mv-size-desc-small { opacity: 1; }

        .mv-size-check {
          position: absolute;
          top: 0.7rem; right: 0.7rem;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: var(--forest);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transform: scale(0.5);
          transition: opacity 0.2s, transform 0.2s;
        }

        .mv-size-btn.active .mv-size-check { opacity: 1; transform: scale(1); }

        /* Selected strip */
        .mv-selected-strip {
          display: flex; align-items: center; gap: 1rem;
          padding: 1rem 1.2rem;
          border-radius: 14px;
          background: rgba(45,90,39,0.05);
          border: 1px solid rgba(45,90,39,0.12);
          margin-bottom: 2rem; font-size: 0.82rem;
        }

        .mv-selected-dot {
          width: 8px; height: 8px;
          border-radius: 50%; background: var(--forest);
          flex-shrink: 0;
          animation: mvPulse 2s ease-in-out infinite;
        }

        @keyframes mvPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.65); }
        }

        .mv-selected-text       { color: var(--text-mid); font-weight: 300; font-size: 0.82rem; }
        .mv-selected-text strong { color: var(--forest); font-weight: 500; }

        /* ── CTAs ─────────────────────────────────────────────── */
        .mv-cta-wrap { display: flex; flex-direction: column; gap: 0.8rem; }

        .mv-btn-primary {
          display: flex; align-items: center;
          justify-content: center; gap: 0.7rem;
          padding: 1.1rem 2rem;
          background: var(--forest); color: #fff;
          border-radius: 100px;
          font-size: 0.85rem; font-weight: 500;
          letter-spacing: 0.04em; text-decoration: none;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 10px 32px rgba(45,90,39,0.25);
          border: none; width: 100%;
          font-family: 'DM Sans', sans-serif; cursor: pointer;
        }

        .mv-btn-primary:hover {
          background: var(--forest-mid);
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(45,90,39,0.35);
        }

        .mv-btn-secondary {
          display: flex; align-items: center;
          justify-content: center; gap: 0.6rem;
          padding: 0.9rem 2rem;
          background: transparent; color: var(--text-mid);
          border-radius: 100px;
          font-size: 0.78rem; font-weight: 400;
          letter-spacing: 0.04em; text-decoration: none;
          border: 1.5px solid rgba(200,169,122,0.35);
          transition: border-color 0.25s, color 0.25s;
          width: 100%;
          font-family: 'DM Sans', sans-serif; cursor: pointer;
        }

        .mv-btn-secondary:hover { border-color: var(--coconut); color: var(--text-dark); }

        .mv-cta-note {
          text-align: center;
          font-size: 0.62rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--text-light); padding-top: 0.3rem;
        }

        /* ── Specs table ──────────────────────────────────────── */
        .mv-specs-section {
          margin-top: 4rem; padding-top: 3rem;
          border-top: 1px solid rgba(200,169,122,0.2);
        }

        .mv-specs-header {
          display: flex; align-items: center;
          gap: 0.8rem; margin-bottom: 1.5rem;
        }

        .mv-specs-title {
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--text-mid); white-space: nowrap;
        }

        .mv-specs-line {
          flex: 1; height: 1px;
          background: rgba(200,169,122,0.2);
        }

        .mv-table-wrap {
          border-radius: 20px; overflow: hidden;
          border: 1px solid rgba(200,169,122,0.2);
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(8px);
        }

        .mv-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }

        .mv-table thead { background: rgba(237,231,220,0.6); }

        .mv-table th {
          padding: 0.9rem 1.4rem; text-align: left;
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--text-light);
          border-bottom: 1px solid rgba(200,169,122,0.15);
        }

        .mv-table td {
          padding: 0.9rem 1.4rem;
          border-bottom: 1px solid rgba(200,169,122,0.08);
          color: var(--text-mid); font-weight: 300;
        }

        .mv-table tr:last-child td { border-bottom: none; }
        .mv-table tbody tr { cursor: pointer; transition: background 0.15s; }
        .mv-table tbody tr:hover td { background: rgba(237,231,220,0.4); }
        .mv-table tbody tr.is-selected td { background: rgba(45,90,39,0.04); }

        .mv-table-cod {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem; font-weight: 500;
          color: var(--forest); letter-spacing: 0.04em;
        }

        .mv-table-nome { font-weight: 400; color: var(--text-dark); }
      `}</style>

      <main className="mv-root">
        <div className="mv-blob" />
        <div className="mv-blob-2" />

        <div className="mv-inner">

          {/* Breadcrumb */}
          <nav className="mv-breadcrumb">
            <Link href="/#produtos" className="mv-back">
              <ArrowLeft size={15} />
              Voltar ao catálogo
            </Link>
            <span className="mv-sep">·</span>
            <span className="mv-current">Meio-Vaso</span>
          </nav>

          <div className="mv-grid">

            {/* ── Left ── */}
            <motion.div
              className="mv-left"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="mv-img-frame">
                <Image
                  src="/Meio-Vaso1.png"
                  alt="Meio-Vaso de Fibra de Coco Agrofor"
                  fill
                  className="object-contain p-14"
                  priority
                />
                <span className="mv-img-chip">Jardim Vertical</span>
                <span className="mv-hd-badge">Visualização HD</span>
              </div>

              <div className="mv-attrs">
                {ATRIBUTOS.map((a, i) => (
                  <motion.div
                    key={i}
                    className="mv-attr-card"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  >
                    <div className="mv-attr-icon">
                      <a.icon size={16} strokeWidth={1.5} />
                    </div>
                    <p className="mv-attr-label">{a.label}</p>
                    <p className="mv-attr-desc">{a.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Right ── */}
            <motion.div
              className="mv-right"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="mv-eyebrow">
                <span className="mv-eyebrow-line" />
                Soluções Verticais
              </div>

              <h1 className="mv-heading">
                Meio-<em>Vaso</em>
              </h1>

              <p className="mv-desc">
                A solução definitiva para jardins verticais e muros decorativos. Desenvolvido para fixação direta em superfícies planas, o Meio-Vaso Agrofor oferece a leveza e porosidade da fibra de coco — garantindo que suas plantas prosperem mesmo em espaços compactos.
              </p>

              {/* Size selector */}
              <div className="mv-size-label">
                <Ruler size={13} strokeWidth={1.5} />
                Escolha o Tamanho
              </div>

              <div className="mv-size-grid">
                {TAMANHOS.map((t) => (
                  <button
                    key={t.cod}
                    className={`mv-size-btn ${selectedSize.cod === t.cod ? "active" : ""}`}
                    onClick={() => setSelectedSize(t)}
                  >
                    <span className="mv-size-check">
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <p className="mv-size-cod">CÓD: {t.cod}</p>
                    <p className="mv-size-nome">{t.nome}</p>
                    <p className="mv-size-dim">{t.dimensoes}</p>
                    <p className="mv-size-desc-small">{t.desc}</p>
                  </button>
                ))}
              </div>

              {/* Selected strip */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSize.cod}
                  className="mv-selected-strip"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="mv-selected-dot" />
                  <span className="mv-selected-text">
                    Selecionado: <strong>{selectedSize.nome}</strong> — {selectedSize.dimensoes} — {selectedSize.desc}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* CTAs */}
              <div className="mv-cta-wrap">
                <Link
                  href={`https://wa.me/553537141025?text=Olá! Gostaria de solicitar uma cotação para o ${selectedSize.nome} (${selectedSize.dimensoes}). Código: ${selectedSize.cod}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mv-btn-primary"
                >
                  <WhatsAppIcon />
                  Solicitar Cotação via WhatsApp
                </Link>

                <a href="mailto:agrofor@agrofor.com.br" className="mv-btn-secondary">
                  Enviar por E-mail
                </a>

                <p className="mv-cta-note">Enviamos para todo o Brasil</p>
              </div>

              {/* Specs table */}
              <div className="mv-specs-section">
                <div className="mv-specs-header">
                  <span className="mv-specs-title">Informações de Produção</span>
                  <span className="mv-specs-line" />
                </div>

                <div className="mv-table-wrap">
                  <table className="mv-table">
                    <thead>
                      <tr>
                        <th>Código</th>
                        <th>Identificação</th>
                        <th>Medidas (Ø × Alt)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TAMANHOS.map((t) => (
                        <tr
                          key={t.cod}
                          className={selectedSize.cod === t.cod ? "is-selected" : ""}
                          onClick={() => setSelectedSize(t)}
                        >
                          <td className="mv-table-cod">{t.cod}</td>
                          <td className="mv-table-nome">{t.nome}</td>
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