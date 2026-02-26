"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Thermometer, Volume2, Droplets, Leaf, Weight } from "lucide-react"

const PRODUTO = { cod: "379", nome: "Fibra de Coco Desidratada", peso: "200g" }

const ATRIBUTOS = [
  { icon: Thermometer, label: "Isolamento Térmico",  desc: "Reduz troca de calor no solo" },
  { icon: Volume2,     label: "Absorção Acústica",   desc: "Aplicações industriais" },
  { icon: Droplets,    label: "Retenção de Água",    desc: "Umidade ideal para raízes" },
  { icon: Leaf,        label: "Biodegradável",       desc: "Retorna 100% à natureza" },
]

const USOS = [
  { label: "Jardinagem",    desc: "Substrato de alta performance para vasos e canteiros" },
  { label: "Agricultura",   desc: "Cobertura de solo e enriquecimento de terra" },
  { label: "Isolamento",    desc: "Térmico e acústico em construção civil" },
  { label: "Artesanato",    desc: "Base para peças decorativas e finos trabalhos manuais" },
]

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function FibraPage() {
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
        .fb-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          min-height: 100svh;
          padding-top: 6rem; padding-bottom: 6rem;
          position: relative; overflow: hidden;
        }

        /* Fibra is earthy / raw — warm diagonal split */
        .fb-root::before {
          content: '';
          position: absolute; top: 0; right: -10%;
          width: 55%; height: 100%;
          background: var(--warm-beige);
          clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
          z-index: 0; pointer-events: none;
        }

        @media (max-width: 1023px) { .fb-root::before { display: none; } }

        /* Warmer blob tones for raw material feel */
        .fb-blob {
          position: absolute; top: 6%; right: 4%;
          width: 460px; height: 460px; border-radius: 50%;
          background: radial-gradient(circle, rgba(200,169,122,0.12) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        .fb-blob-2 {
          position: absolute; bottom: 5%; left: -8%;
          width: 380px; height: 380px; border-radius: 50%;
          background: radial-gradient(circle, rgba(107,74,42,0.07) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        .fb-inner {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto; padding: 0 2rem;
        }

        /* ── Breadcrumb ─────────────────────────────────────────── */
        .fb-breadcrumb { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 3.5rem; }

        .fb-back {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.78rem; font-weight: 400; color: var(--text-light);
          text-decoration: none; transition: color 0.2s, gap 0.2s; letter-spacing: 0.02em;
        }

        .fb-back:hover { color: var(--text-dark); gap: 0.7rem; }
        .fb-back svg   { transition: transform 0.2s; }
        .fb-back:hover svg { transform: translateX(-3px); }

        .fb-sep     { color: rgba(200,169,122,0.4); font-size: 0.9rem; }
        .fb-current { font-size: 0.78rem; color: var(--text-mid); font-weight: 400; }

        /* ── Grid ─────────────────────────────────────────────── */
        .fb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        @media (max-width: 1023px) { .fb-grid { grid-template-columns: 1fr; gap: 3rem; } }

        /* ── LEFT ─────────────────────────────────────────────── */
        .fb-left { position: sticky; top: 7rem; }
        @media (max-width: 1023px) { .fb-left { position: relative; top: 0; } }

        .fb-img-frame {
          position: relative; aspect-ratio: 1 / 1; border-radius: 32px; overflow: hidden;
          background: var(--cream); border: 1px solid rgba(200,169,122,0.25);
          box-shadow: 0 40px 80px -20px rgba(26,26,24,0.1); cursor: zoom-in;
        }

        /* Warmer gradient — suits raw coconut fiber */
        .fb-img-frame::after {
          content: ''; position: absolute; inset: 0; border-radius: 32px;
          background: linear-gradient(150deg, rgba(200,169,122,0.06) 0%, transparent 50%);
          pointer-events: none;
        }

        .fb-img-frame img { transition: transform 0.8s cubic-bezier(0.25,0.1,0.25,1); }
        .fb-img-frame:hover img { transform: scale(1.06); }

        .fb-img-chip {
          position: absolute; top: 1.2rem; left: 1.2rem;
          padding: 0.35rem 1rem; background: rgba(247,243,238,0.9);
          backdrop-filter: blur(12px); border-radius: 100px;
          border: 1px solid rgba(200,169,122,0.3);
          font-size: 0.6rem; font-weight: 500; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--text-mid); z-index: 2;
        }

        /* Weight badge — unique to Fibra */
        .fb-weight-badge {
          position: absolute; bottom: 1.2rem; right: 1.2rem;
          display: flex; flex-direction: column; align-items: center;
          padding: 0.6rem 1rem;
          background: rgba(247,243,238,0.92);
          backdrop-filter: blur(12px); border-radius: 14px;
          border: 1px solid rgba(200,169,122,0.3);
          z-index: 2;
        }

        .fb-weight-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem; font-weight: 400;
          color: var(--soil); line-height: 1;
        }

        .fb-weight-label {
          font-size: 0.55rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--text-light); margin-top: 0.1rem;
        }

        /* Attrs */
        .fb-attrs { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-top: 1.2rem; }
        @media (max-width: 480px) { .fb-attrs { grid-template-columns: repeat(2, 1fr); } }

        .fb-attr-card {
          display: flex; flex-direction: column; align-items: center; text-align: center;
          gap: 0.5rem; padding: 1.1rem 0.5rem; border-radius: 18px;
          background: rgba(255,255,255,0.6); border: 1px solid rgba(200,169,122,0.2);
          backdrop-filter: blur(8px);
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }

        .fb-attr-card:hover {
          background: rgba(255,255,255,0.9);
          border-color: rgba(200,169,122,0.4); transform: translateY(-2px);
        }

        /* Warm icon bg for fibra */
        .fb-attr-icon {
          width: 32px; height: 32px; border-radius: 10px;
          background: rgba(200,169,122,0.12);
          display: flex; align-items: center; justify-content: center;
          color: var(--soil);
        }

        .fb-attr-label { font-size: 0.62rem; font-weight: 500; color: var(--text-dark); line-height: 1.2; }
        .fb-attr-desc  { font-size: 0.56rem; color: var(--text-light); line-height: 1.3; }

        /* ── RIGHT ────────────────────────────────────────────── */
        .fb-right { display: flex; flex-direction: column; }

        /* Eyebrow — soil toned for raw material */
        .fb-eyebrow {
          display: inline-flex; align-items: center; gap: 0.6rem;
          color: var(--soil); font-size: 0.68rem; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 1rem;
        }

        .fb-eyebrow-line { width: 24px; height: 1px; background: var(--coconut); }

        .fb-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem); font-weight: 300;
          color: var(--text-dark); line-height: 1.05; letter-spacing: -0.02em; margin: 0 0 1.5rem;
        }

        .fb-heading em { font-style: italic; color: var(--coconut); font-weight: 400; }

        .fb-desc {
          font-size: 0.95rem; color: var(--text-mid);
          line-height: 1.8; font-weight: 300; margin-bottom: 2.5rem; max-width: 500px;
        }

        /* ── Presentation card ──────────────────────────────────── */
        .fb-pres-label {
          display: flex; align-items: center; gap: 0.6rem;
          font-size: 0.65rem; font-weight: 500; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--text-mid);
          margin-bottom: 1rem; padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(200,169,122,0.2);
        }

        .fb-pres-card {
          border-radius: 22px; padding: 1.6rem 1.8rem;
          background: rgba(255,255,255,0.55);
          border: 1.5px solid rgba(200,169,122,0.3);
          display: flex; align-items: center; justify-content: space-between;
          gap: 2rem; margin-bottom: 2rem;
          position: relative; overflow: hidden;
        }

        /* Decorative coconut circle in card corner */
        .fb-pres-card::after {
          content: '';
          position: absolute; bottom: -30px; right: -30px;
          width: 120px; height: 120px; border-radius: 50%;
          border: 1px solid rgba(200,169,122,0.15);
          pointer-events: none;
        }

        .fb-pres-cod {
          font-size: 0.6rem; font-weight: 500; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--coconut); margin-bottom: 0.35rem;
        }

        .fb-pres-nome {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem; font-weight: 500; color: var(--text-dark); line-height: 1.1;
        }

        .fb-pres-right { text-align: right; flex-shrink: 0; }

        .fb-pres-peso-label {
          font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.12em;
          color: var(--text-light); margin-bottom: 0.25rem;
        }

        .fb-pres-peso-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.4rem; font-weight: 300; color: var(--soil);
          line-height: 1; letter-spacing: -0.03em;
        }

        /* Active pulse dot */
        .fb-active-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--coconut); flex-shrink: 0;
          animation: fbPulse 2s ease-in-out infinite;
          display: inline-block; margin-right: 0.5rem;
        }

        @keyframes fbPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.35; transform: scale(0.6); }
        }

        /* ── Usos grid ──────────────────────────────────────────── */
        .fb-usos-label {
          display: flex; align-items: center; gap: 0.6rem;
          font-size: 0.65rem; font-weight: 500; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--text-mid);
          margin-bottom: 1rem; padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(200,169,122,0.2);
        }

        .fb-usos-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 0.75rem; margin-bottom: 2.5rem;
        }

        .fb-uso-card {
          padding: 1rem 1.1rem; border-radius: 18px;
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(200,169,122,0.18);
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }

        .fb-uso-card:hover {
          background: rgba(255,255,255,0.85);
          border-color: rgba(200,169,122,0.35); transform: translateY(-2px);
        }

        .fb-uso-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem; font-weight: 500; color: var(--text-dark);
          margin-bottom: 0.3rem;
        }

        .fb-uso-desc { font-size: 0.72rem; color: var(--text-light); line-height: 1.5; font-weight: 300; }

        /* ── CTAs ─────────────────────────────────────────────── */
        .fb-cta-wrap { display: flex; flex-direction: column; gap: 0.8rem; }

        .fb-btn-primary {
          display: flex; align-items: center; justify-content: center; gap: 0.7rem;
          padding: 1.1rem 2rem; background: var(--forest); color: #fff;
          border-radius: 100px; font-size: 0.85rem; font-weight: 500;
          letter-spacing: 0.04em; text-decoration: none;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 10px 32px rgba(45,90,39,0.25); border: none; width: 100%;
          font-family: 'DM Sans', sans-serif; cursor: pointer;
        }

        .fb-btn-primary:hover { background: var(--forest-mid); transform: translateY(-2px); box-shadow: 0 16px 40px rgba(45,90,39,0.35); }

        .fb-btn-secondary {
          display: flex; align-items: center; justify-content: center; gap: 0.6rem;
          padding: 0.9rem 2rem; background: transparent; color: var(--text-mid);
          border-radius: 100px; font-size: 0.78rem; font-weight: 400;
          letter-spacing: 0.04em; text-decoration: none;
          border: 1.5px solid rgba(200,169,122,0.35);
          transition: border-color 0.25s, color 0.25s; width: 100%;
          font-family: 'DM Sans', sans-serif; cursor: pointer;
        }

        .fb-btn-secondary:hover { border-color: var(--coconut); color: var(--text-dark); }

        .fb-cta-note {
          text-align: center; font-size: 0.62rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--text-light); padding-top: 0.3rem;
        }

        /* ── Specs table ──────────────────────────────────────── */
        .fb-specs-section { margin-top: 4rem; padding-top: 3rem; border-top: 1px solid rgba(200,169,122,0.2); }

        .fb-specs-header { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1.5rem; }

        .fb-specs-title {
          font-size: 0.65rem; font-weight: 500; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--text-mid); white-space: nowrap;
        }

        .fb-specs-line { flex: 1; height: 1px; background: rgba(200,169,122,0.2); }

        .fb-table-wrap {
          border-radius: 20px; overflow: hidden;
          border: 1px solid rgba(200,169,122,0.2);
          background: rgba(255,255,255,0.5); backdrop-filter: blur(8px);
        }

        .fb-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }

        .fb-table thead { background: rgba(237,231,220,0.6); }

        .fb-table th {
          padding: 0.9rem 1.4rem; text-align: left;
          font-size: 0.6rem; font-weight: 500; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--text-light);
          border-bottom: 1px solid rgba(200,169,122,0.15);
        }

        .fb-table th:last-child { text-align: right; }

        .fb-table td {
          padding: 0.9rem 1.4rem;
          border-bottom: 1px solid rgba(200,169,122,0.08);
          color: var(--text-mid); font-weight: 300;
        }

        .fb-table tr:last-child td { border-bottom: none; }

        .fb-table-cod {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem; font-weight: 500; color: var(--coconut); letter-spacing: 0.04em;
        }

        .fb-table-nome { font-weight: 400; color: var(--text-dark); }

        .fb-table-peso {
          text-align: right;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem; font-weight: 500; color: var(--soil);
        }

        /* ── Note ─────────────────────────────────────────────── */
        .fb-note {
          margin-top: 1rem; font-size: 0.72rem;
          color: var(--text-light); font-weight: 300;
          font-style: italic; line-height: 1.5;
        }
      `}</style>

      <main className="fb-root">
        <div className="fb-blob" />
        <div className="fb-blob-2" />

        <div className="fb-inner">

          {/* Breadcrumb */}
          <nav className="fb-breadcrumb">
            <Link href="/#produtos" className="fb-back">
              <ArrowLeft size={15} />
              Voltar ao catálogo
            </Link>
            <span className="fb-sep">·</span>
            <span className="fb-current">Fibra de Coco</span>
          </nav>

          <div className="fb-grid">

            {/* ── Left ── */}
            <motion.div
              className="fb-left"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="fb-img-frame">
                <Image
                  src="/fibra.png"
                  alt="Fibra de Coco Desidratada Agrofor"
                  fill
                  className="object-contain p-14"
                  priority
                />
                <span className="fb-img-chip">Matéria-Prima Natural</span>

                {/* Weight badge — unique to this page */}
                <div className="fb-weight-badge">
                  <span className="fb-weight-val">200g</span>
                  <span className="fb-weight-label">Peso Líq.</span>
                </div>
              </div>

              <div className="fb-attrs">
                {ATRIBUTOS.map((a, i) => (
                  <motion.div
                    key={i}
                    className="fb-attr-card"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  >
                    <div className="fb-attr-icon">
                      <a.icon size={16} strokeWidth={1.5} />
                    </div>
                    <p className="fb-attr-label">{a.label}</p>
                    <p className="fb-attr-desc">{a.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Right ── */}
            <motion.div
              className="fb-right"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="fb-eyebrow">
                <span className="fb-eyebrow-line" />
                Substratos &amp; Indústria
              </div>

              <h1 className="fb-heading">
                Fibra de<br />
                <em>Coco</em>
              </h1>

              <p className="fb-desc">
                A fibra de coco desidratada Agrofor é um material natural, sustentável e biodegradável. Sua versatilidade permite o uso tanto na agricultura como substrato de alta performance, quanto em indústrias para isolamento térmico, acústico e artesanatos finos.
              </p>

              {/* Presentation card */}
              <div className="fb-pres-label">
                <Weight size={13} strokeWidth={1.5} />
                Apresentação
              </div>

              <div className="fb-pres-card">
                <div>
                  <p className="fb-pres-cod">
                    <span className="fb-active-dot" />
                    CÓD: {PRODUTO.cod}
                  </p>
                  <p className="fb-pres-nome">{PRODUTO.nome}</p>
                </div>
                <div className="fb-pres-right">
                  <p className="fb-pres-peso-label">Peso Líquido</p>
                  <p className="fb-pres-peso-val">{PRODUTO.peso}</p>
                </div>
              </div>

              {/* Usos */}
              <div className="fb-usos-label">
                <Leaf size={13} strokeWidth={1.5} />
                Aplicações
              </div>

              <div className="fb-usos-grid">
                {USOS.map((u, i) => (
                  <motion.div
                    key={i}
                    className="fb-uso-card"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.07, duration: 0.45 }}
                  >
                    <p className="fb-uso-label">{u.label}</p>
                    <p className="fb-uso-desc">{u.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="fb-cta-wrap">
                <Link
                  href={`https://wa.me/553537141025?text=Olá! Gostaria de solicitar uma cotação para a ${PRODUTO.nome} (${PRODUTO.peso}). Código: ${PRODUTO.cod}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fb-btn-primary"
                >
                  <WhatsAppIcon />
                  Solicitar Cotação via WhatsApp
                </Link>

                <a href="mailto:agrofor@agrofor.com.br" className="fb-btn-secondary">
                  Enviar por E-mail
                </a>

                <p className="fb-cta-note">Material sustentável · Agrofor desde 1985</p>
              </div>

              {/* Specs table */}
              <div className="fb-specs-section">
                <div className="fb-specs-header">
                  <span className="fb-specs-title">Especificações Técnicas</span>
                  <span className="fb-specs-line" />
                </div>

                <div className="fb-table-wrap">
                  <table className="fb-table">
                    <thead>
                      <tr>
                        <th>Cód. Produto</th>
                        <th>Descrição</th>
                        <th>Peso</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fb-table-cod">{PRODUTO.cod}</td>
                        <td className="fb-table-nome">{PRODUTO.nome}</td>
                        <td className="fb-table-peso">{PRODUTO.peso}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="fb-note">
                  * Produto natural — variações de textura e tonalidade são características da fibra de coco.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  )
}W