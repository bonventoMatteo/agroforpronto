"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import Link from "next/link" // Importado para navegação
import { Droplets, Gauge, Info, ArrowRight, ArrowLeft } from "lucide-react" // ArrowLeft adicionada

// Dados técnicos baseados no catálogo Agrofor
const VASOS = [
  { id: "v1", nome: "Vaso Nº 01", vol: 1.0, img: "/030.jpg" },
  { id: "v2", nome: "Vaso Nº 02", vol: 2.5, img: "/030.jpg" },
  { id: "v3", nome: "Vaso Nº 03", vol: 4.0, img: "/030.jpg" },
  { id: "v4", nome: "Vaso Nº 04", vol: 7.0, img: "/030.jpg" },
  { id: "v5", nome: "Vaso Nº 05", vol: 10.0, img: "/030.jpg" },
]

const PLANTAS = [
  { id: "orquidea", nome: "Orquídeas", densidade: 130, rega: "7-10 dias", icon: "🌸" },
  { id: "samambaia", nome: "Samambaias", densidade: 210, rega: "2-3 dias", icon: "🌿" },
  { id: "jiboia", nome: "Jiboias/Folhagens", densidade: 170, rega: "4-5 dias", icon: "🍃" },
]

export default function PlantConsultant() {
  const [selectedVaso, setSelectedVaso] = useState(VASOS[1])
  const [selectedPlanta, setSelectedPlanta] = useState(PLANTAS[0])
  const [qtdVasos, setQtdVasos] = useState(1)

  const resultado = useMemo(() => {
    const fibraNecessaria = (selectedVaso.vol * selectedPlanta.densidade * qtdVasos) / 1000
    const aguaExpansao = fibraNecessaria * 3 
    return { fibra: fibraNecessaria, agua: aguaExpansao }
  }, [selectedVaso, selectedPlanta, qtdVasos])

  return (
    <section className=" md:py-24 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Seta Voltar - Estilo conforme imagem anexada */}
        <div className="flex items-center gap-4 mb-12">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-600 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Voltar para o inicio</span>
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
            Cáculo
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Lado Esquerdo: Configuração */}
          <div className="w-full md:w-1/2 space-y-10">
            <div>
              <span className="text-green-600 uppercase tracking-[0.3em] text-[10px] font-extrabold">Guia de Cultivo</span>
              <h2 className="text-4xl font-light text-zinc-900 mt-2 italic">Consultor de <span className="font-medium not-italic">Plantio</span></h2>
            </div>

            <div className="space-y-8">
              {/* Seleção de Vaso */}
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">1. Escolha o Modelo do Vaso</label>
                <div className="grid grid-cols-5 gap-2">
                  {VASOS.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVaso(v)}
                      className={`py-3 rounded-xl border text-xs font-bold transition-all ${
                        selectedVaso.id === v.id ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-400 border-zinc-100 hover:border-zinc-300"
                      }`}
                    >
                      {v.id.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seleção de Planta */}
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">2. O que você vai plantar?</label>
                <div className="flex flex-wrap gap-3">
                  {PLANTAS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPlanta(p)}
                      className={`px-6 py-4 rounded-2xl border flex items-center gap-3 transition-all ${
                        selectedPlanta.id === p.id ? "border-green-600 bg-green-50/30 text-green-700 shadow-sm" : "border-zinc-100 bg-white text-zinc-500"
                      }`}
                    >
                      <span className="text-xl">{p.icon}</span>
                      <span className="text-sm font-bold uppercase tracking-tight">{p.nome}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantidade */}
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">3. Quantos vasos iguais a este?</label>
                <input 
                  type="number" 
                  min="1"
                  value={qtdVasos}
                  onChange={(e) => setQtdVasos(Math.max(1, Number(e.target.value)))}
                  className="w-full bg-white border border-zinc-200 p-5 rounded-2xl text-2xl focus:outline-none focus:border-green-600 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Lado Direito: Dashboard de Resultados */}
          <div className="w-full md:w-1/2 bg-white rounded-[3rem] p-10 border border-zinc-100 shadow-2xl shadow-zinc-200/50">
            <div className="space-y-12">
              
              <div className="text-center">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Fibra de Coco Necessária</p>
                <div className="inline-flex items-baseline gap-2">
                  <motion.span 
                    key={resultado.fibra}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-8xl font-medium text-zinc-900 tracking-tighter"
                  >
                    {resultado.fibra.toFixed(1)}
                  </motion.span>
                  <span className="text-2xl font-bold text-zinc-300">KG</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-[2rem] bg-[#FBFBF9] border border-zinc-100">
                  <Droplets className="text-blue-500 mb-3" size={20} />
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Frequência de Rega</p>
                  <p className="text-xl font-medium text-zinc-900">Cada {selectedPlanta.rega}</p>
                </div>
                <div className="p-6 rounded-[2rem] bg-[#FBFBF9] border border-zinc-100">
                  <Gauge className="text-orange-500 mb-3" size={20} />
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Água p/ Hidratar</p>
                  <p className="text-xl font-medium text-zinc-900">{resultado.agua.toFixed(1)} L</p>
                </div>
              </div>

              <div className="p-6 rounded-[2rem] bg-green-50 border border-green-100 flex gap-4">
                <Info className="text-green-600 shrink-0" size={20} />
                <p className="text-xs text-green-800 leading-relaxed font-medium">
                  A fibra de coco Agrofor retém umidade por mais tempo. No primeiro plantio, use <strong>{resultado.agua.toFixed(1)} litros</strong> de água para expandir a fibra desidratada.
                </p>
              </div>

              <button className="w-full py-6 bg-zinc-900 text-white rounded-full font-bold text-xs tracking-[0.2em] hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 group">
                ADICIONAR {resultado.fibra.toFixed(1)}KG AO ORÇAMENTO
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}