"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Grid, Flower, Leaf, Settings } from "lucide-react"

const PRODUTOS_PLACAS = [
  { cod: "1035", nome: "Placa c/ 1 Vaso",        dimensoes: "15 × 32 cm", tipo: "Conjunto" },
  { cod: "1036", nome: "Placa c/ 2 Vasos",       dimensoes: "30 × 32 cm", tipo: "Conjunto" },
  { cod: "1037", nome: "Placa c/ 3 Vasos",       dimensoes: "30 × 32 cm", tipo: "Conjunto" },
  { cod: "055",  nome: "Placa c/ Meio Vaso Nº 1", dimensoes: "15 × 32 cm", tipo: "Vertical" },
  { cod: "056",  nome: "Placa c/ Meio Vaso Nº 2", dimensoes: "30 × 32 cm", tipo: "Vertical" },
  { cod: "057",  nome: "Placa c/ Meio Vaso Nº 3", dimensoes: "30 × 32 cm", tipo: "Vertical" },
  { cod: "058",  nome: "Placa c/ Meio Vaso Nº 4", dimensoes: "30 × 32 cm", tipo: "Vertical" },
  { cod: "059",  nome: "Placa c/ Meio Vaso Nº 5", dimensoes: "30 × 32 cm", tipo: "Vertical" },
  { cod: "1031", nome: "Placa Lisa Nº 1",         dimensoes: "15 × 32 cm", tipo: "Base" },
  { cod: "1032", nome: "Placa Lisa Nº 2",         dimensoes: "30 × 32 cm", tipo: "Base" },
]

const TIPO_COLORS: Record<string, string> = {
  Conjunto: "rgba(45,90,39,0.1)",
  Vertical: "rgba(200,169,122,0.15)",
  Base:     "rgba(107,74,42,0.08)",
}

const TIPO_TEXT: Record<string, string> = {
  Conjunto: "#2D5A27",
  Vertical: "#A08050",
  Base:     "#6B4A2A",
}

const ATRIBUTOS = [
  { icon: Grid,   label: "Fácil Instalação",   desc: "Sistema de encaixe intuitivo" },
  { icon: Flower, label: "Ideal p/ Orquídeas",  desc: "Aeração perfeita para raízes" },
  { icon: Leaf,   label: "Fibra Natural",       desc: "100% fibra de coco orgânica" },
  { icon: Settings, label: "10 Configurações",  desc: "Conjunto, vertical e base" },
]

const TIPOS = ["Todos", "Conjunto", "Vertical", "Base"]

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function PlacasPage() {
  const [selectedItem, setSelectedItem] = useState(PRODUTOS_PLACAS[0])
  const [tipoFiltro, setTipoFiltro]     = useState("Todos")

  const filtrados = useMemo(
    () => tipoFiltro === "Todos" ? PRODUTOS_PLACAS : PRODUTOS_PLACAS.filter(p => p.tipo === tipoFiltro),
    [tipoFiltro]
  )

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
          --soil:         #6B4A2A;
          --text-dark:    #1A1A18;
          --text-mid:     #4A4840;
          --text-light:   #8A8680;
        }

        /* ── Root ─────────────────────────────────────────────── */
        .pl-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          min-height: 100svh;
          padding-top: 6rem; padding-bottom: 6rem;
          position: relative; overflow: hidden;
        }

        .pl-root::before {
          content: '';
          position: absolute; top: 0; right: -10%;
          width: 55%; height: 100%;
          background: var(--warm-beige);
          clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
          z-index: 0; pointer-events: none;
        }

        @media (max-width: 1023px) { .pl-root::before { display: none; } }

        .pl-blob {
          position: absolute; top: 8%; right: 5%;
          width: 420px; height: 420px; border-radius: 50%;
          background: radial-gradient(circle, rgba(45,90,39,0.07) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        .pl-blob-2 {
          position: absolute; bottom: 5%; left: -8%;
          width: 360px; height: 360px; border-radius: 50%;
          background: radial-gradient(circle, rgba(200,169,122,0.08) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        .pl-inner {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto; padding: 0 2rem;
        }

        /* ── Breadcrumb ─────────────────────────────────────────── */
        .pl-breadcrumb { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 3.5rem; }

        .pl-back {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.78rem; font-weight: 400; color: var(--text-light);
          text-decoration: none; transition: color 0.2s, gap 0.2s; letter-spacing: 0.02em;
        }

        .pl-back:hover { color: var(--text-dark); gap: 0.7rem; }
        .pl-back svg   { transition: transform 0.2s; }
        .pl-back:hover svg { transform: translateX(-3px); }

        .pl-sep     { color: rgba(200,169,122,0.4); font-size: 0.9rem; }
        .pl-current { font-size: 0.78rem; color: var(--text-mid); font-weight: 400; }

        /* ── Grid ─────────────────────────────────────────────── */
        .pl-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        @media (max-width: 1023px) { .pl-grid { grid-template-columns: 1fr; gap: 3rem; } }

        /* ── LEFT ─────────────────────────────────────────────── */
        .pl-left { position: sticky; top: 7rem; }
        @media (max-width: 1023px) { .pl-left { position: relative; top: 0; } }

        .pl-img-frame {
          position: relative; aspect-ratio: 1 / 1; border-radius: 32px; overflow: hidden;
          background: var(--cream); border: 1px solid rgba(200,169,122,0.2);
          box-shadow: 0 40px 80px -20px rgba(26,26,24,0.1); cursor: zoom-in;
        }

        .pl-img-frame::after {
          content: ''; position: absolute; inset: 0; border-radius: 32px;
          background: linear-gradient(160deg, transparent 55%, rgba(45,90,39,0.05) 100%);
          pointer-events: none;
        }

        .pl-img-frame img { transition: transform 0.8s cubic-bezier(0.25,0.1,0.25,1); }
        .pl-img-frame:hover img { transform: scale(1.05); }

        .pl-img-chip {
          position: absolute; top: 1.2rem; left: 1.2rem;
          padding: 0.35rem 1rem; background: rgba(247,243,238,0.9);
          backdrop-filter: blur(12px); border-radius: 100px;
          border: 1px solid rgba(200,169,122,0.3);
          font-size: 0.6rem; font-weight: 500; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--text-mid); z-index: 2;
        }

        .pl-hd-badge {
          position: absolute; bottom: 1.2rem; left: 50%; transform: translateX(-50%);
          padding: 0.4rem 1rem; background: rgba(247,243,238,0.85);
          backdrop-filter: blur(12px); border-radius: 100px;
          border: 1px solid rgba(200,169,122,0.25);
          font-size: 0.6rem; font-weight: 500; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--text-light); white-space: nowrap; z-index: 2;
        }

        /* Attrs */
        .pl-attrs { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-top: 1.2rem; }
        @media (max-width: 480px) { .pl-attrs { grid-template-columns: repeat(2, 1fr); } }

        .pl-attr-card {
          display: flex; flex-direction: column; align-items: center; text-align: center;
          gap: 0.5rem; padding: 1.1rem 0.5rem; border-radius: 18px;
          background: rgba(255,255,255,0.6); border: 1px solid rgba(200,169,122,0.2);
          backdrop-filter: blur(8px); transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }

        .pl-attr-card:hover { background: rgba(255,255,255,0.9); border-color: rgba(45,90,39,0.25); transform: translateY(-2px); }

        .pl-attr-icon {
          width: 32px; height: 32px; border-radius: 10px;
          background: rgba(45,90,39,0.08);
          display: flex; align-items: center; justify-content: center; color: var(--forest);
        }

        .pl-attr-label { font-size: 0.62rem; font-weight: 500; color: var(--text-dark); line-height: 1.2; }
        .pl-attr-desc  { font-size: 0.56rem; color: var(--text-light); line-height: 1.3; }

        /* ── RIGHT ────────────────────────────────────────────── */
        .pl-right { display: flex; flex-direction: column; }

        .pl-eyebrow {
          display: inline-flex; align-items: center; gap: 0.6rem;
          color: var(--forest-mid); font-size: 0.68rem; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 1rem;
        }

        .pl-eyebrow-line { width: 24px; height: 1px; background: var(--coconut); }

        .pl-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem); font-weight: 300;
          color: var(--text-dark); line-height: 1.05; letter-spacing: -0.02em; margin: 0 0 1.5rem;
        }

        .pl-heading em { font-style: italic; color: var(--forest); font-weight: 400; }

        .pl-desc {
          font-size: 0.95rem; color: var(--text-mid);
          line-height: 1.8; font-weight: 300; margin-bottom: 2.5rem; max-width: 500px;
        }

        /* ── Tipo filter pills ──────────────────────────────────── */
        .pl-tipo-row {
          display: flex; align-items: center; gap: 0.5rem;
          margin-bottom: 1.2rem; flex-wrap: wrap;
        }

        .pl-tipo-pill {
          position: relative;
          display: inline-flex; align-items: center;
          padding: 0.4rem 1rem; border-radius: 100px;
          border: 1.5px solid rgba(200,169,122,0.25);
          background: transparent;
          font-size: 0.72rem; font-weight: 400;
          color: var(--text-mid); cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }

        .pl-tipo-pill:hover { border-color: var(--coconut); color: var(--text-dark); }
        .pl-tipo-pill.active { color: #fff; border-color: transparent; }

        .pl-tipo-pill-bg {
          position: absolute; inset: 0; border-radius: 100px;
          background: var(--forest); z-index: -1;
        }

        /* ── Selector label ─────────────────────────────────────── */
        .pl-sel-label {
          display: flex; align-items: center; gap: 0.6rem;
          font-size: 0.65rem; font-weight: 500; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--text-mid);
          margin-bottom: 1rem; padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(200,169,122,0.2);
        }

        /* ── Items grid ─────────────────────────────────────────── */
        .pl-items-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 0.75rem; margin-bottom: 2rem;
          max-height: 380px; overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(200,169,122,0.3) transparent;
          padding-right: 4px;
        }

        .pl-items-grid::-webkit-scrollbar { width: 4px; }
        .pl-items-grid::-webkit-scrollbar-track { background: transparent; }
        .pl-items-grid::-webkit-scrollbar-thumb { background: rgba(200,169,122,0.3); border-radius: 2px; }

        .pl-item-btn {
          position: relative; padding: 1rem; border-radius: 18px;
          border: 1.5px solid rgba(200,169,122,0.22);
          background: rgba(255,255,255,0.5);
          text-align: left; cursor: pointer;
          transition: border-color 0.25s, background 0.25s, transform 0.2s;
          font-family: 'DM Sans', sans-serif;
        }

        .pl-item-btn:hover {
          border-color: var(--coconut); background: rgba(255,255,255,0.85); transform: translateY(-1px);
        }

        .pl-item-btn.active { border-color: var(--forest); background: rgba(45,90,39,0.04); }

        .pl-item-tipo {
          display: inline-flex; align-items: center;
          padding: 0.15rem 0.6rem; border-radius: 100px;
          font-size: 0.55rem; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 0.4rem;
        }

        .pl-item-cod {
          font-size: 0.6rem; font-weight: 500; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--text-light); margin-bottom: 0.3rem;
          transition: color 0.2s;
        }

        .pl-item-btn.active .pl-item-cod { color: var(--forest); }

        .pl-item-nome {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.92rem; font-weight: 500;
          color: var(--text-dark); line-height: 1.2; margin-bottom: 0.25rem;
        }

        .pl-item-dim { font-size: 0.7rem; color: var(--text-light); font-weight: 300; }

        /* Check */
        .pl-item-check {
          position: absolute; top: 0.7rem; right: 0.7rem;
          width: 18px; height: 18px; border-radius: 50%; background: var(--forest);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transform: scale(0.5); transition: opacity 0.2s, transform 0.2s;
        }

        .pl-item-btn.active .pl-item-check { opacity: 1; transform: scale(1); }

        /* ── Selected strip ─────────────────────────────────────── */
        .pl-selected-strip {
          display: flex; align-items: center; gap: 1rem;
          padding: 1rem 1.2rem; border-radius: 14px;
          background: rgba(45,90,39,0.05); border: 1px solid rgba(45,90,39,0.12);
          margin-bottom: 2rem; font-size: 0.82rem;
        }

        .pl-selected-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--forest); flex-shrink: 0;
          animation: plPulse 2s ease-in-out infinite;
        }

        @keyframes plPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.65); }
        }

        .pl-selected-text        { color: var(--text-mid); font-weight: 300; font-size: 0.82rem; }
        .pl-selected-text strong  { color: var(--forest); font-weight: 500; }

        /* ── CTAs ─────────────────────────────────────────────── */
        .pl-cta-wrap { display: flex; flex-direction: column; gap: 0.8rem; }

        .pl-btn-primary {
          display: flex; align-items: center; justify-content: center; gap: 0.7rem;
          padding: 1.1rem 2rem; background: var(--forest); color: #fff;
          border-radius: 100px; font-size: 0.85rem; font-weight: 500;
          letter-spacing: 0.04em; text-decoration: none;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 10px 32px rgba(45,90,39,0.25); border: none; width: 100%;
          font-family: 'DM Sans', sans-serif; cursor: pointer;
        }

        .pl-btn-primary:hover { background: var(--forest-mid); transform: translateY(-2px); box-shadow: 0 16px 40px rgba(45,90,39,0.35); }

        .pl-btn-secondary {
          display: flex; align-items: center; justify-content: center; gap: 0.6rem;
          padding: 0.9rem 2rem; background: transparent; color: var(--text-mid);
          border-radius: 100px; font-size: 0.78rem; font-weight: 400;
          letter-spacing: 0.04em; text-decoration: none;
          border: 1.5px solid rgba(200,169,122,0.35);
          transition: border-color 0.25s, color 0.25s; width: 100%;
          font-family: 'DM Sans', sans-serif; cursor: pointer;
        }

        .pl-btn-secondary:hover { border-color: var(--coconut); color: var(--text-dark); }

        .pl-cta-note {
          text-align: center; font-size: 0.62rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--text-light); padding-top: 0.3rem;
        }

        /* ── Specs table ──────────────────────────────────────── */
        .pl-specs-section { margin-top: 4rem; padding-top: 3rem; border-top: 1px solid rgba(200,169,122,0.2); }

        .pl-specs-header { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1.5rem; }

        .pl-specs-title {
          font-size: 0.65rem; font-weight: 500; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--text-mid); white-space: nowrap;
        }

        .pl-specs-line { flex: 1; height: 1px; background: rgba(200,169,122,0.2); }

        .pl-table-wrap {
          border-radius: 20px; overflow: hidden; overflow-x: auto;
          border: 1px solid rgba(200,169,122,0.2);
          background: rgba(255,255,255,0.5); backdrop-filter: blur(8px);
        }

        .pl-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }

        .pl-table thead { background: rgba(237,231,220,0.6); }

        .pl-table th {
          padding: 0.9rem 1.4rem; text-align: left;
          font-size: 0.6rem; font-weight: 500; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--text-light);
          border-bottom: 1px solid rgba(200,169,122,0.15); white-space: nowrap;
        }

        .pl-table td {
          padding: 0.9rem 1.4rem; border-bottom: 1px solid rgba(200,169,122,0.08);
          color: var(--text-mid); font-weight: 300;
        }

        .pl-table tr:last-child td { border-bottom: none; }
        .pl-table tbody tr { cursor: pointer; transition: background 0.15s; }
        .pl-table tbody tr:hover td { background: rgba(237,231,220,0.4); }
        .pl-table tbody tr.is-selected td { background: rgba(45,90,39,0.04); }

        .pl-table-cod {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem; font-weight: 500; color: var(--forest); letter-spacing: 0.04em;
        }

        .pl-table-nome { font-weight: 400; color: var(--text-dark); }

        .pl-table-tipo {
          display: inline-flex; padding: 0.2rem 0.7rem;
          border-radius: 100px; font-size: 0.58rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
        }
      `}</style>

      <main className="pl-root">
        <div className="pl-blob" />
        <div className="pl-blob-2" />

        <div className="pl-inner">

          {/* Breadcrumb */}
          <nav className="pl-breadcrumb">
            <Link href="/#produtos" className="pl-back">
              <ArrowLeft size={15} />
              Voltar ao catálogo
            </Link>
            <span className="pl-sep">·</span>
            <span className="pl-current">Placas Modulares</span>
          </nav>

          <div className="pl-grid">

            {/* ── Left ── */}
            <motion.div
              className="pl-left"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="pl-img-frame">
                <Image
                  src="/meiovasocomplaca.png"
                  alt="Placas Modulares de Fibra de Coco Agrofor"
                  fill
                  className="object-contain p-12"
                  priority
                />
                <span className="pl-img-chip">Sistema Modular</span>
                <span className="pl-hd-badge">Visualização HD</span>
              </div>

              <div className="pl-attrs">
                {ATRIBUTOS.map((a, i) => (
                  <motion.div
                    key={i}
                    className="pl-attr-card"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  >
                    <div className="pl-attr-icon">
                      <a.icon size={16} strokeWidth={1.5} />
                    </div>
                    <p className="pl-attr-label">{a.label}</p>
                    <p className="pl-attr-desc">{a.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Right ── */}
            <motion.div
              className="pl-right"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="pl-eyebrow">
                <span className="pl-eyebrow-line" />
                Jardins Suspensos
              </div>

              <h1 className="pl-heading">
                Placas<br />
                <em>Modulares</em>
              </h1>

              <p className="pl-desc">
                A base perfeita para o seu orquidário ou jardim vertical. Versatilidade total: desde superfícies lisas para fixação manual até painéis completos com vasos integrados — aeração e umidade que suas plantas exigem.
              </p>

              {/* Tipo filter */}
              <div className="pl-sel-label">
                <Settings size={13} strokeWidth={1.5} />
                Configurações Disponíveis
              </div>

              <div className="pl-tipo-row">
                {TIPOS.map((t) => (
                  <button
                    key={t}
                    className={`pl-tipo-pill ${tipoFiltro === t ? "active" : ""}`}
                    onClick={() => setTipoFiltro(t)}
                  >
                    {tipoFiltro === t && (
                      <motion.span
                        layoutId="tipo-pill-bg"
                        className="pl-tipo-pill-bg"
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                    {t}
                  </button>
                ))}
              </div>

              {/* Items grid */}
              <div className="pl-items-grid">
                <AnimatePresence mode="popLayout">
                  {filtrados.map((item) => (
                    <motion.button
                      key={item.cod}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className={`pl-item-btn ${selectedItem.cod === item.cod ? "active" : ""}`}
                      onClick={() => setSelectedItem(item)}
                    >
                      <span className="pl-item-check">
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                          <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span
                        className="pl-item-tipo"
                        style={{
                          background: TIPO_COLORS[item.tipo],
                          color: TIPO_TEXT[item.tipo],
                        }}
                      >
                        {item.tipo}
                      </span>
                      <p className="pl-item-cod">CÓD: {item.cod}</p>
                      <p className="pl-item-nome">{item.nome}</p>
                      <p className="pl-item-dim">{item.dimensoes}</p>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>

              {/* Selected strip */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedItem.cod}
                  className="pl-selected-strip"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="pl-selected-dot" />
                  <span className="pl-selected-text">
                    <strong>{selectedItem.nome}</strong> — {selectedItem.dimensoes} — Tipo: {selectedItem.tipo}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* CTAs */}
              <div className="pl-cta-wrap">
                <Link
                  href={`https://wa.me/553537141025?text=Olá! Gostaria de solicitar uma cotação para a ${selectedItem.nome} (${selectedItem.dimensoes}). Código: ${selectedItem.cod}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-btn-primary"
                >
                  <WhatsAppIcon />
                  Solicitar Cotação via WhatsApp
                </Link>

                <a href="mailto:agrofor@agrofor.com.br" className="pl-btn-secondary">
                  Enviar por E-mail
                </a>

                <p className="pl-cta-note">Versatilidade Agrofor · Jardins Suspensos</p>
              </div>

              {/* Specs table */}
              <div className="pl-specs-section">
                <div className="pl-specs-header">
                  <span className="pl-specs-title">Catálogo Técnico</span>
                  <span className="pl-specs-line" />
                </div>

                <div className="pl-table-wrap">
                  <table className="pl-table">
                    <thead>
                      <tr>
                        <th>Cód.</th>
                        <th>Especificação</th>
                        <th>Tipo</th>
                        <th>Dimensões</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PRODUTOS_PLACAS.map((item) => (
                        <tr
                          key={item.cod}
                          className={selectedItem.cod === item.cod ? "is-selected" : ""}
                          onClick={() => setSelectedItem(item)}
                        >
                          <td className="pl-table-cod">{item.cod}</td>
                          <td className="pl-table-nome">{item.nome}</td>
                          <td>
                            <span
                              className="pl-table-tipo"
                              style={{
                                background: TIPO_COLORS[item.tipo],
                                color: TIPO_TEXT[item.tipo],
                              }}
                            >
                              {item.tipo}
                            </span>
                          </td>
                          <td>{item.dimensoes}</td>
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