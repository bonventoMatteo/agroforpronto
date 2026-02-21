"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Flower2, Droplets, Leaf, Ruler } from "lucide-react"

const TAMANHOS_CONICO = [
  {
    cod: "801",
    nome: "Vaso Nº 01",
    dimensoes: "18 × 15 × 14 cm",
    detalhes: { sup: "18 cm", inf: "15 cm", alt: "14 cm" },
  },
]

const ATRIBUTOS = [
  { icon: Flower2,  label: "Ideal p/ Orquídeas",  desc: "Geometria que favorece raízes aéreas" },
  { icon: Droplets, label: "Umidade Balanceada",   desc: "Drenagem e retenção em equilíbrio" },
  { icon: Leaf,     label: "100% Ecológico",       desc: "Fibra de coco natural certificada" },
  { icon: Ruler,    label: "Design Cônico",        desc: "Profundidade superior às formas retas" },
]

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function VasoConico() {
  const [selected] = useState(TAMANHOS_CONICO[0])

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

        /* ── Root ─────────────────────────────────────────────── */
        .vc-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          min-height: 100svh;
          padding-top: 6rem;
          padding-bottom: 6rem;
          position: relative;
          overflow: hidden;
        }

        .vc-root::before {
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

        @media (max-width: 1023px) { .vc-root::before { display: none; } }

        .vc-blob {
          position: absolute;
          top: 10%; right: 6%;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(45,90,39,0.09) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        .vc-blob-2 {
          position: absolute;
          bottom: 8%; left: -6%;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,169,122,0.08) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        .vc-inner {
          position: relative; z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* ── Breadcrumb ─────────────────────────────────────────── */
        .vc-breadcrumb {
          display: flex; align-items: center;
          gap: 0.75rem; margin-bottom: 3.5rem;
        }

        .vc-back {
          display: inline-flex; align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem; font-weight: 400;
          color: var(--text-light);
          text-decoration: none;
          transition: color 0.2s, gap 0.2s;
          letter-spacing: 0.02em;
        }

        .vc-back:hover { color: var(--text-dark); gap: 0.7rem; }
        .vc-back svg   { transition: transform 0.2s; }
        .vc-back:hover svg { transform: translateX(-3px); }

        .vc-sep     { color: rgba(200,169,122,0.4); font-size: 0.9rem; }
        .vc-current { font-size: 0.78rem; color: var(--text-mid); font-weight: 400; }

        /* ── Grid ─────────────────────────────────────────────── */
        .vc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem; align-items: start;
        }

        @media (max-width: 1023px) { .vc-grid { grid-template-columns: 1fr; gap: 3rem; } }

        /* ── LEFT ─────────────────────────────────────────────── */
        .vc-left { position: sticky; top: 7rem; }
        @media (max-width: 1023px) { .vc-left { position: relative; top: 0; } }

        .vc-img-frame {
          position: relative;
          aspect-ratio: 4 / 5;
          border-radius: 32px;
          overflow: hidden;
          background: var(--cream);
          border: 1px solid rgba(200,169,122,0.2);
          box-shadow: 0 40px 80px -20px rgba(26,26,24,0.1);
          cursor: zoom-in;
        }

        .vc-img-frame::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: 32px;
          background: linear-gradient(160deg, transparent 55%, rgba(45,90,39,0.05) 100%);
          pointer-events: none;
        }

        .vc-img-frame img { transition: transform 0.8s cubic-bezier(0.25,0.1,0.25,1); }
        .vc-img-frame:hover img { transform: scale(1.06); }

        .vc-img-chip {
          position: absolute;
          top: 1.2rem; left: 1.2rem;
          padding: 0.35rem 1rem;
          background: rgba(247,243,238,0.9);
          backdrop-filter: blur(12px);
          border-radius: 100px;
          border: 1px solid rgba(200,169,122,0.3);
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--text-mid); z-index: 2;
        }

        .vc-hd-badge {
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
        .vc-attrs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem; margin-top: 1.2rem;
        }

        @media (max-width: 480px) { .vc-attrs { grid-template-columns: repeat(2, 1fr); } }

        .vc-attr-card {
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          gap: 0.5rem; padding: 1.1rem 0.5rem;
          border-radius: 18px;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(200,169,122,0.2);
          backdrop-filter: blur(8px);
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }

        .vc-attr-card:hover {
          background: rgba(255,255,255,0.9);
          border-color: rgba(45,90,39,0.25);
          transform: translateY(-2px);
        }

        .vc-attr-icon {
          width: 32px; height: 32px;
          border-radius: 10px;
          background: rgba(45,90,39,0.08);
          display: flex; align-items: center; justify-content: center;
          color: var(--forest);
        }

        .vc-attr-label { font-size: 0.62rem; font-weight: 500; color: var(--text-dark); line-height: 1.2; }
        .vc-attr-desc  { font-size: 0.56rem; color: var(--text-light); line-height: 1.3; }

        /* ── RIGHT ────────────────────────────────────────────── */
        .vc-right { display: flex; flex-direction: column; }

        .vc-eyebrow {
          display: inline-flex; align-items: center; gap: 0.6rem;
          color: var(--forest-mid);
          font-size: 0.68rem; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .vc-eyebrow-line { width: 24px; height: 1px; background: var(--coconut); }

        .vc-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 300;
          color: var(--text-dark);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 1.5rem;
        }

        .vc-heading em { font-style: italic; color: var(--forest); font-weight: 400; }

        .vc-desc {
          font-size: 0.95rem; color: var(--text-mid);
          line-height: 1.8; font-weight: 300;
          margin-bottom: 2.5rem; max-width: 500px;
        }

        /* ── Single-size card ──────────────────────────────────── */
        .vc-size-label {
          display: flex; align-items: center; gap: 0.6rem;
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--text-mid);
          margin-bottom: 1rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(200,169,122,0.2);
        }

        .vc-size-card {
          border-radius: 22px;
          border: 1.5px solid var(--forest);
          background: rgba(45,90,39,0.04);
          padding: 1.6rem 1.8rem;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }

        /* Decorative ring in card */
        .vc-size-card::after {
          content: '';
          position: absolute;
          bottom: -30px; right: -30px;
          width: 120px; height: 120px;
          border-radius: 50%;
          border: 1px solid rgba(45,90,39,0.15);
          pointer-events: none;
        }

        .vc-size-cod {
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--forest); margin-bottom: 0.35rem;
        }

        .vc-size-nome {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem; font-weight: 500;
          color: var(--text-dark); line-height: 1.1;
        }

        .vc-size-dim {
          font-size: 0.78rem; color: var(--text-mid);
          font-weight: 300; margin-top: 0.2rem;
        }

        /* Dimension pills */
        .vc-dim-pills {
          display: flex; flex-direction: column; gap: 0.4rem;
          align-items: flex-end;
        }

        .vc-dim-pill {
          display: flex; align-items: center; gap: 0.5rem;
          padding: 0.3rem 0.8rem;
          border-radius: 100px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(200,169,122,0.2);
          font-size: 0.65rem;
        }

        .vc-dim-pill-label {
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 500;
          font-size: 0.58rem;
        }

        .vc-dim-pill-value {
          color: var(--text-dark);
          font-weight: 500;
        }

        /* Selected strip */
        .vc-selected-strip {
          display: flex; align-items: center; gap: 1rem;
          padding: 0.9rem 1.2rem;
          border-radius: 14px;
          background: rgba(45,90,39,0.05);
          border: 1px solid rgba(45,90,39,0.12);
          margin-bottom: 2rem;
          font-size: 0.82rem;
        }

        .vc-selected-dot {
          width: 8px; height: 8px;
          border-radius: 50%; background: var(--forest);
          flex-shrink: 0;
          animation: vcPulse 2s ease-in-out infinite;
        }

        @keyframes vcPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.65); }
        }

        .vc-selected-text       { color: var(--text-mid); font-weight: 300; font-size: 0.82rem; }
        .vc-selected-text strong { color: var(--forest); font-weight: 500; }

        /* ── CTAs ─────────────────────────────────────────────── */
        .vc-cta-wrap { display: flex; flex-direction: column; gap: 0.8rem; }

        .vc-btn-primary {
          display: flex; align-items: center;
          justify-content: center; gap: 0.7rem;
          padding: 1.1rem 2rem;
          background: var(--forest); color: #fff;
          border-radius: 100px;
          font-size: 0.85rem; font-weight: 500;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 10px 32px rgba(45,90,39,0.25);
          border: none; width: 100%;
          font-family: 'DM Sans', sans-serif; cursor: pointer;
        }

        .vc-btn-primary:hover {
          background: var(--forest-mid);
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(45,90,39,0.35);
        }

        .vc-btn-secondary {
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

        .vc-btn-secondary:hover { border-color: var(--coconut); color: var(--text-dark); }

        .vc-cta-note {
          text-align: center;
          font-size: 0.62rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--text-light); padding-top: 0.3rem;
        }

        /* ── Specs table ──────────────────────────────────────── */
        .vc-specs-section {
          margin-top: 4rem; padding-top: 3rem;
          border-top: 1px solid rgba(200,169,122,0.2);
        }

        .vc-specs-header {
          display: flex; align-items: center;
          gap: 0.8rem; margin-bottom: 1.5rem;
        }

        .vc-specs-title {
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--text-mid); white-space: nowrap;
        }

        .vc-specs-line {
          flex: 1; height: 1px;
          background: rgba(200,169,122,0.2);
        }

        .vc-table-wrap {
          border-radius: 20px; overflow: hidden;
          border: 1px solid rgba(200,169,122,0.2);
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(8px);
        }

        .vc-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }

        .vc-table thead { background: rgba(237,231,220,0.6); }

        .vc-table th {
          padding: 0.9rem 1.4rem;
          text-align: left;
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--text-light);
          border-bottom: 1px solid rgba(200,169,122,0.15);
        }

        .vc-table td {
          padding: 0.9rem 1.4rem;
          color: var(--text-mid); font-weight: 300;
        }

        .vc-table-cod {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem; font-weight: 500;
          color: var(--forest); letter-spacing: 0.04em;
        }

        .vc-table-val { font-weight: 400; color: var(--text-dark); }

        .vc-note {
          margin-top: 1rem;
          font-size: 0.72rem;
          color: var(--text-light);
          font-weight: 300;
          font-style: italic;
          line-height: 1.5;
        }
      `}</style>

      <main className="vc-root">
        <div className="vc-blob" />
        <div className="vc-blob-2" />

        <div className="vc-inner">

          {/* Breadcrumb */}
          <nav className="vc-breadcrumb">
            <Link href="/#produtos" className="vc-back">
              <ArrowLeft size={15} />
              Voltar ao catálogo
            </Link>
            <span className="vc-sep">·</span>
            <span className="vc-current">Vaso Cônico</span>
          </nav>

          <div className="vc-grid">

            {/* ── Left ── */}
            <motion.div
              className="vc-left"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="vc-img-frame">
                <Image
                  src="/VasoConico.png"
                  alt="Vaso Cônico de Fibra de Coco Agrofor"
                  fill
                  className="object-contain p-12"
                  priority
                />
                <span className="vc-img-chip">Design Cônico</span>
                <span className="vc-hd-badge">Visualização HD</span>
              </div>

              <div className="vc-attrs">
                {ATRIBUTOS.map((a, i) => (
                  <motion.div
                    key={i}
                    className="vc-attr-card"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  >
                    <div className="vc-attr-icon">
                      <a.icon size={16} strokeWidth={1.5} />
                    </div>
                    <p className="vc-attr-label">{a.label}</p>
                    <p className="vc-attr-desc">{a.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Right ── */}
            <motion.div
              className="vc-right"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="vc-eyebrow">
                <span className="vc-eyebrow-line" />
                Linha Profissional
              </div>

              <h1 className="vc-heading">
                Vaso<br />
                <em>Cônico</em>
              </h1>

              <p className="vc-desc">
                A geometria perfeita para plantas que exigem profundidade e drenagem superior. Elaborado com fibra de coco Agrofor, este modelo oferece equilíbrio térmico ideal para as raízes — favorito entre cultivadores de orquídeas e folhagens pendentes.
              </p>

              {/* Size label */}
              <div className="vc-size-label">
                <Ruler size={13} strokeWidth={1.5} />
                Dimensão Disponível
              </div>

              {/* Single size card — detailed */}
              <div className="vc-size-card">
                <div>
                  <p className="vc-size-cod">CÓD: {selected.cod}</p>
                  <p className="vc-size-nome">{selected.nome}</p>
                  <p className="vc-size-dim">{selected.dimensoes}</p>
                </div>
                <div className="vc-dim-pills">
                  <div className="vc-dim-pill">
                    <span className="vc-dim-pill-label">Ø Sup</span>
                    <span className="vc-dim-pill-value">{selected.detalhes.sup}</span>
                  </div>
                  <div className="vc-dim-pill">
                    <span className="vc-dim-pill-label">Ø Inf</span>
                    <span className="vc-dim-pill-value">{selected.detalhes.inf}</span>
                  </div>
                  <div className="vc-dim-pill">
                    <span className="vc-dim-pill-label">Alt</span>
                    <span className="vc-dim-pill-value">{selected.detalhes.alt}</span>
                  </div>
                </div>
              </div>

              {/* Selected strip */}
              <div className="vc-selected-strip">
                <span className="vc-selected-dot" />
                <span className="vc-selected-text">
                  <strong>{selected.nome}</strong> — Diâm. {selected.detalhes.sup} × Alt. {selected.detalhes.alt} — Cód. {selected.cod}
                </span>
              </div>

              {/* CTAs */}
              <div className="vc-cta-wrap">
                <Link
                  href={`https://wa.me/553537141025?text=Olá! Gostaria de solicitar uma cotação para o ${selected.nome} (${selected.dimensoes}). Código: ${selected.cod}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vc-btn-primary"
                >
                  <WhatsAppIcon />
                  Solicitar Cotação via WhatsApp
                </Link>

                <a href="mailto:agrofor@agrofor.com.br" className="vc-btn-secondary">
                  Enviar por E-mail
                </a>

                <p className="vc-cta-note">Excelência e Inovação em Jardinagem Natural</p>
              </div>

              {/* Specs table */}
              <div className="vc-specs-section">
                <div className="vc-specs-header">
                  <span className="vc-specs-title">Ficha Técnica</span>
                  <span className="vc-specs-line" />
                </div>

                <div className="vc-table-wrap">
                  <table className="vc-table">
                    <thead>
                      <tr>
                        <th>Código</th>
                        <th>Diâm. Superior</th>
                        <th>Diâm. Inferior</th>
                        <th>Altura</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TAMANHOS_CONICO.map((t) => (
                        <tr key={t.cod}>
                          <td className="vc-table-cod">{t.cod}</td>
                          <td className="vc-table-val">{t.detalhes.sup}</td>
                          <td className="vc-table-val">{t.detalhes.inf}</td>
                          <td className="vc-table-val">{t.detalhes.alt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="vc-note">
                  * Medidas aproximadas por se tratar de um produto artesanal em fibras naturais.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  )
}