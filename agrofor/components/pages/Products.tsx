"use client"

import { useState, useMemo, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Search, ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const PRODUTOS = [
  {
    id: 1,
    nome: "Vaso Clássico",
    categoria: "Vasos",
    descricao: "O clássico formato de xaxim, 100% ecológico.",
    href: "/produtos/vasocomum",
    imagem: "/XaximComum.png",
    accent: "#3D7A35",
  },
  {
    id: 2,
    nome: "Vaso Cônico",
    categoria: "Vasos",
    descricao: "Design elegante, ideal para orquídeas e pendentes.",
    href: "/produtos/vasoconico",
    imagem: "/VasoConico.png",
    accent: "#5A9E50",
  },
  {
    id: 3,
    nome: "Cachepot",
    categoria: "Decoração",
    descricao: "Acabamento rústico para valorizar ambientes internos.",
    href: "/produtos/cachepot",
    imagem: "/cachepot.png",
    accent: "#C8A97A",
  },
  {
    id: 4,
    nome: "Meio-Vaso (Parede)",
    categoria: "Vasos",
    descricao: "Perfeito para jardins verticais e muros.",
    href: "/produtos/meiovaso",
    imagem: "/meio-vaso1.png",
    accent: "#2D5A27",
  },
  {
    id: 5,
    nome: "Estaca de Fibra",
    categoria: "Suportes",
    descricao: "Apoio estruturado para o crescimento de trepadeiras.",
    href: "/produtos/estaca",
    imagem: "/estacaempe.png",
    accent: "#6B4A2A",
  },
  {
    id: 7,
    nome: "Placas Modulares",
    categoria: "Suportes",
    descricao: "Base versátil para fixação de orquídeas.",
    href: "/produtos/placasmodulares",
    imagem: "/meiovasocomplaca.png",
    accent: "#3D7A35",
  },
  {
    id: 8,
    nome: "Fibra",
    categoria: "Substratos",
    descricao: "Fibra de coco desidratada para jardinagem e indústria.",
    href: "/produtos/fibra",
    imagem: "/fibra.png",
    accent: "#A08050",
  },
]

const CATEGORIAS_META: Record<string, { label: string; num: string }> = {
  Todos:     { label: "Todos os produtos", num: "07" },
  Vasos:     { label: "Vasos",             num: "03" },
  Decoração: { label: "Decoração",         num: "01" },
  Suportes:  { label: "Suportes",          num: "02" },
  Substratos:{ label: "Substratos",        num: "01" },
}

export default function ProductsSection() {
  const [busca, setBusca]           = useState("")
  const [filtroAtivo, setFiltroAtivo] = useState("Todos")
  const [hoveredId, setHoveredId]   = useState<number | null>(null)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"])

  const categorias = useMemo(
    () => ["Todos", ...Array.from(new Set(PRODUTOS.map((p) => p.categoria)))],
    []
  )

  const produtosFiltrados = useMemo(() => {
    const t = busca.toLowerCase().trim()
    return PRODUTOS.filter(
      (p) =>
        p.nome.toLowerCase().includes(t) &&
        (filtroAtivo === "Todos" || p.categoria === filtroAtivo)
    )
  }, [busca, filtroAtivo])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

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

        .prod-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          overflow: hidden;
          position: relative;
        }

        .prod-root::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--coconut), transparent);
        }

        /* ── BG deco ──────────────────────────────────────────────── */
        .prod-bg-deco {
          position: absolute;
          top: 5%; right: -15%;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,169,122,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── HEADER ───────────────────────────────────────────────── */
        .prod-header {
          max-width: 1280px;
          margin: 0 auto;
          padding: 6rem 2rem 3rem;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 2rem;
        }

        @media (max-width: 767px) {
          .prod-header { grid-template-columns: 1fr; padding: 4rem 1.5rem 2rem; }
        }

        .prod-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--forest-mid);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }

        .prod-eyebrow-line {
          width: 28px; height: 1px;
          background: var(--coconut);
        }

        .prod-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          font-weight: 300;
          color: var(--text-dark);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .prod-heading em {
          font-style: italic;
          color: var(--forest);
          font-weight: 400;
        }

        .prod-count-badge {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.2rem;
          flex-shrink: 0;
        }

        .prod-count-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          font-weight: 300;
          color: var(--coconut);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .prod-count-label {
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-light);
        }

        /* ── FILTER / SEARCH BAR ────────────────────────────────── */
        .prod-controls {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Category pills row */
        .cat-row {
          display: flex;
          gap: 0.6rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
          scrollbar-width: none;
        }
        .cat-row::-webkit-scrollbar { display: none; }

        .cat-pill {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.3rem;
          border-radius: 100px;
          border: 1.5px solid rgba(200,169,122,0.3);
          background: transparent;
          font-size: 0.78rem;
          font-weight: 400;
          color: var(--text-mid);
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
          white-space: nowrap;
          font-family: 'DM Sans', sans-serif;
        }

        .cat-pill:hover { border-color: var(--coconut); color: var(--text-dark); }

        .cat-pill.active { color: #fff; border-color: transparent; }

        .cat-pill-bg {
          position: absolute;
          inset: 0;
          border-radius: 100px;
          background: var(--forest);
          z-index: -1;
        }

        .cat-pill-num {
          font-size: 0.62rem;
          opacity: 0.6;
        }

        /* Search */
        .search-wrap {
          position: relative;
          max-width: 340px;
        }

        .search-icon {
          position: absolute;
          left: 1rem; top: 50%;
          transform: translateY(-50%);
          color: var(--text-light);
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.8rem;
          border-radius: 100px;
          border: 1.5px solid rgba(200,169,122,0.3);
          background: var(--warm-beige);
          font-size: 0.82rem;
          color: var(--text-dark);
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .search-input::placeholder { color: var(--text-light); }

        .search-input:focus {
          border-color: var(--coconut);
          box-shadow: 0 0 0 3px rgba(200,169,122,0.15);
        }

        /* ── PRODUCT GRID ─────────────────────────────────────────── */
        .prod-grid-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem 6rem;
        }

        .prod-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) { .prod-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px)  { .prod-grid { grid-template-columns: 1fr; } }

        /* Featured first card — spans 2 cols on desktop */
        .prod-card-featured {
          grid-column: span 2;
        }
        @media (max-width: 1024px) { .prod-card-featured { grid-column: span 1; } }

        /* ── CARD ────────────────────────────────────────────────── */
        .prod-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          background: var(--warm-beige);
          border: 1px solid rgba(200,169,122,0.2);
          transition: box-shadow 0.4s, transform 0.4s;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .prod-card:hover {
          box-shadow:
            0 32px 64px -16px rgba(26,26,24,0.14),
            0 0 0 1px rgba(200,169,122,0.3);
          transform: translateY(-4px);
        }

        /* Image area */
        .prod-card-img {
          position: relative;
          overflow: hidden;
          background: var(--cream);
          flex-shrink: 0;
        }

        .prod-card-img img {
          transition: transform 0.7s cubic-bezier(0.25,0.1,0.25,1);
          object-fit: contain;
        }

        .prod-card:hover .prod-card-img img {
          transform: scale(1.07);
        }

        /* Gradient overlay */
        .prod-card-img::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(26,26,18,0.06) 0%, transparent 50%);
          pointer-events: none;
        }

        /* Category chip */
        .prod-chip {
          position: absolute;
          top: 1.2rem; left: 1.2rem;
          padding: 0.3rem 0.9rem;
          border-radius: 100px;
          background: rgba(247,243,238,0.9);
          backdrop-filter: blur(8px);
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-mid);
          border: 1px solid rgba(200,169,122,0.25);
          z-index: 2;
        }

        /* Card body */
        .prod-card-body {
          padding: 1.5rem 1.8rem 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }

        .prod-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .prod-card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 400;
          color: var(--text-dark);
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .prod-card-featured .prod-card-name {
          font-size: 1.7rem;
        }

        .prod-card-desc {
          font-size: 0.82rem;
          color: var(--text-mid);
          line-height: 1.65;
          font-weight: 300;
        }

        /* Arrow button */
        .prod-arrow-btn {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1.5px solid rgba(200,169,122,0.4);
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          color: var(--text-light);
          flex-shrink: 0;
          transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.25s;
          text-decoration: none;
        }

        .prod-card:hover .prod-arrow-btn {
          background: var(--forest);
          border-color: var(--forest);
          color: #fff;
          transform: rotate(-45deg);
        }

        /* Accent bar at bottom */
        .prod-accent-bar {
          height: 3px;
          width: 0%;
          background: var(--forest);
          transition: width 0.4s cubic-bezier(0.25,0.1,0.25,1);
          border-radius: 0 0 28px 28px;
        }

        .prod-card:hover .prod-accent-bar { width: 100%; }

        /* ── EMPTY STATE ─────────────────────────────────────────── */
        .empty-state {
          text-align: center;
          padding: 6rem 2rem;
        }

        .empty-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 300;
          color: var(--text-mid);
          margin-bottom: 0.8rem;
        }

        .empty-reset {
          font-size: 0.82rem;
          color: var(--forest-mid);
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .empty-reset:hover { color: var(--forest); }
      `}</style>

      <section id="produtos" className="prod-root" ref={sectionRef}>
        <motion.div className="prod-bg-deco" style={{ y: bgY }} />

        {/* ── Header ── */}
        <div className="prod-header">
          <div>
            <motion.div
              className="prod-eyebrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="prod-eyebrow-line" />
              Catálogo Completo
              <span className="prod-eyebrow-line" />
            </motion.div>

            <motion.h2
              className="prod-heading"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Escolha a <em>natureza</em> certa<br />
              para o seu espaço
            </motion.h2>
          </div>

          <motion.div
            className="prod-count-badge"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="prod-count-num">
              {String(produtosFiltrados.length).padStart(2, "0")}
            </span>
            <span className="prod-count-label">
              {filtroAtivo === "Todos" ? "produtos" : CATEGORIAS_META[filtroAtivo]?.label}
            </span>
          </motion.div>
        </div>

        {/* ── Controls ── */}
        <div className="prod-controls">
          <div className="cat-row">
            {categorias.map((cat) => (
              <button
                key={cat}
                className={`cat-pill ${filtroAtivo === cat ? "active" : ""}`}
                onClick={() => setFiltroAtivo(cat)}
              >
                {filtroAtivo === cat && (
                  <motion.span
                    layoutId="cat-pill-bg"
                    className="cat-pill-bg"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                {cat}
                <span className="cat-pill-num">{CATEGORIAS_META[cat]?.num}</span>
              </button>
            ))}
          </div>

          <div className="search-wrap">
            <Search className="search-icon" size={16} />
            <input
              type="text"
              className="search-input"
              placeholder="Buscar produto..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              aria-label="Buscar produto"
            />
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="prod-grid-wrap">
          <motion.div layout className="prod-grid">
            <AnimatePresence mode="popLayout">
              {produtosFiltrados.map((produto, i) => {
                const isFeatured = i === 0 && filtroAtivo === "Todos" && !busca

                return (
                  <motion.div
                    key={produto.id}
                    layout
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                    className={`prod-card ${isFeatured ? "prod-card-featured" : ""}`}
                    onMouseEnter={() => setHoveredId(produto.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Image */}
                    <div
                      className="prod-card-img"
                      style={{
                        aspectRatio: isFeatured ? "16/9" : "4/5",
                        background: `radial-gradient(ellipse at 60% 40%, ${produto.accent}14 0%, var(--cream) 70%)`,
                      }}
                    >
                      <Image
                        src={produto.imagem}
                        alt={produto.nome}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-8"
                        priority={i < 3}
                      />
                      <span className="prod-chip">{produto.categoria}</span>

                      {/* Hover overlay with CTA */}
                      <AnimatePresence>
                        {hoveredId === produto.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                              position: "absolute", inset: 0, zIndex: 3,
                              background: `linear-gradient(to top, ${produto.accent}22, transparent)`,
                              pointerEvents: "none",
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Body */}
                    <div className="prod-card-body">
                      <div className="prod-card-top">
                        <p className="prod-card-name">{produto.nome}</p>
                        <Link href={produto.href} className="prod-arrow-btn" aria-label={`Ver ${produto.nome}`}>
                          <ArrowUpRight size={15} />
                        </Link>
                      </div>
                      <p className="prod-card-desc">{produto.descricao}</p>
                    </div>

                    <div className="prod-accent-bar" style={{ background: produto.accent }} />
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {produtosFiltrados.length === 0 && (
            <motion.div
              className="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="empty-title">Nenhum produto encontrado</p>
              <button
                className="empty-reset"
                onClick={() => { setBusca(""); setFiltroAtivo("Todos") }}
              >
                Limpar filtros
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}