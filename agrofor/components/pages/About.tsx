"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { Leaf, Eye, ShieldCheck, Zap, Star, Handshake } from "lucide-react"

const values = [
  { label: "Sustentabilidade", icon: Leaf,        desc: "Respeito ao ciclo natural" },
  { label: "Inovação",         icon: Zap,         desc: "Soluções que evoluem" },
  { label: "Qualidade",        icon: Star,        desc: "Excelência em cada peça" },
  { label: "Comprometimento",  icon: Handshake,   desc: "Palavra que vale" },
  { label: "Ética",            icon: ShieldCheck, desc: "Transparência total" },
]

const timeline = [
  { year: "1985", title: "A Fundação", body: "Início com fertilizantes modernos para folhagens e flores sob as marcas SUPERGREEN e FLOWEVER." },
  { year: "1990", title: "Transição Verde", body: "Fomos pioneiros ao substituir o xaxim nativo por fibra de coco, preservando a espécie Dicksonia Sellowiana." },
  { year: "2011", title: "100% Sustentável", body: "Abandonamos totalmente os fertilizantes químicos e concentramos nossa alma nos produtos orgânicos de fibra de coco." },
]

export default function InstitutionalGodTier() {
  const containerRef = useRef(null)
  
  // Track do scroll para animar a "raiz" da timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  // Suavização da linha com "mola" (física Apple)
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <section id="agrofor" className="relative w-full bg-[#F7F3EE] font-sans selection:bg-[#2D5A27] selection:text-white pb-32">
      
      {/* Ruído de fundo cinematográfico */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 relative z-10">
        
        {/* ======================= TIMELINE EDITORIAL ======================= */}
        <div ref={containerRef} className="flex flex-col lg:flex-row gap-20 lg:gap-32 min-h-screen">
          
          {/* COLUNA ESQUERDA (STICKY) - Fica parada enquanto rola o conteúdo */}
          <div className="lg:w-1/3 flex flex-col items-start lg:sticky lg:top-40 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#C8A97A]"></span>
                <span className="text-[#3D7A35] text-xs font-bold tracking-[0.2em] uppercase">
                  Nossa História
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-[#1A1A18] leading-[1.1] tracking-tight mb-6">
                Raízes no<br />
                <span className="font-serif italic text-[#2D5A27] font-medium">passado,</span><br />
                olhos no futuro.
              </h2>
              <p className="text-[#4A4840] text-lg font-light leading-relaxed">
                Mais de três décadas dedicadas a redefinir a relação entre design, plantio e respeito absoluto à natureza.
              </p>
            </motion.div>
          </div>

          {/* COLUNA DIREITA (OS EVENTOS DA TIMELINE) */}
          <div className="lg:w-2/3 relative pl-8 md:pl-16 py-10">
            {/* A Linha de Fundo (Estática) */}
            <div className="absolute top-0 bottom-0 left-[15px] md:left-[31px] w-[1px] bg-[#EDE7DC]"></div>
            
            {/* A Linha de Progresso (Mágica / Animada) */}
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }} 
              className="absolute top-0 bottom-0 left-[15px] md:left-[31px] w-[3px] bg-gradient-to-b from-[#C8A97A] to-[#2D5A27] rounded-full z-10"
            />

            <div className="flex flex-col gap-24">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Ponto na linha */}
                  <div className="absolute -left-[32px] md:-left-[48px] top-2 w-[34px] h-[34px] bg-[#F7F3EE] rounded-full flex items-center justify-center z-20 transition-transform duration-500 group-hover:scale-125">
                    <div className="w-3 h-3 bg-[#C8A97A] rounded-full group-hover:bg-[#2D5A27] transition-colors duration-500"></div>
                  </div>

                  <h3 className="font-serif text-5xl text-[#C8A97A] font-light mb-4 flex items-center gap-4">
                    {item.year}
                    <span className="w-12 h-[1px] bg-[#C8A97A]/30 block mt-2"></span>
                  </h3>
                  <h4 className="text-2xl text-[#1A1A18] font-medium tracking-tight mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[#4A4840] text-lg font-light leading-relaxed max-w-xl">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ======================= MISSÃO E VISÃO (CARDS IMMERSIVOS) ======================= */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden bg-[#EDE7DC] border border-[#C8A97A]/20 p-10 md:p-14 rounded-[2rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#C8A97A] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="w-14 h-14 bg-[#2D5A27]/10 text-[#2D5A27] rounded-2xl flex items-center justify-center mb-8">
              <Leaf size={28} strokeWidth={1.5} />
            </div>
            <p className="text-[#C8A97A] text-xs font-bold tracking-[0.2em] uppercase mb-4">A Missão</p>
            <h3 className="font-serif text-4xl text-[#1A1A18] mb-6 leading-tight">Mudar o mundo,<br/>um vaso por vez.</h3>
            <p className="text-[#4A4840] font-light leading-relaxed">
              Transformar a fibra natural em soluções ecológicas de altíssimo padrão, promovendo o bem-estar da natureza e elevando a sofisticação da jardinagem.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden bg-[#2D5A27] p-10 md:p-14 rounded-[2rem] hover:shadow-2xl hover:shadow-[#2D5A27]/30 hover:-translate-y-2 transition-all duration-500"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20">
              <Eye size={28} strokeWidth={1.5} />
            </div>
            <p className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-4">A Visão</p>
            <h3 className="font-serif text-4xl text-white mb-6 leading-tight">Liderança pelo<br/>exemplo verde.</h3>
            <p className="text-white/80 font-light leading-relaxed">
              Ser o padrão ouro internacional em artefatos orgânicos para plantio, provando que é possível unir durabilidade, design e impacto ambiental zero.
            </p>
          </motion.div>
        </div>

        {/* ======================= VALORES DA MARCA (GRID MINIMALISTA) ======================= */}
        <div className="mt-40">
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-[#4A4840] text-sm font-bold tracking-[0.2em] uppercase whitespace-nowrap">
              Nossos Pilares
            </h3>
            <span className="w-full h-[1px] bg-gradient-to-r from-[#C8A97A]/40 to-transparent"></span>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="group bg-white p-6 rounded-[1.5rem] border border-[#EDE7DC] hover:border-[#2D5A27]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-[#F7F3EE] text-[#2D5A27] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2D5A27] group-hover:text-white transition-colors duration-300">
                  <v.icon size={22} strokeWidth={1.5} />
                </div>
                <h4 className="text-[#1A1A18] font-medium mb-2 group-hover:text-[#2D5A27] transition-colors">{v.label}</h4>
                <p className="text-[#8A8680] text-xs font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}