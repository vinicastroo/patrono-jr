'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden"
      style={{ background: 'var(--wine-dark)' }}>


      {/* Orbs animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full"
          style={{
            width: 'clamp(280px, 60vw, 600px)', height: 'clamp(280px, 60vw, 600px)',
            background: 'radial-gradient(circle, rgba(122,1,1,0.45) 0%, transparent 70%)',
            top: '-200px', left: '-100px',
            animation: 'orb-1 12s ease-in-out infinite',
          }} />
        <div className="absolute rounded-full"
          style={{
            width: 'clamp(240px, 50vw, 500px)', height: 'clamp(240px, 50vw, 500px)',
            background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
            bottom: '-150px', right: '-100px',
            animation: 'orb-2 15s ease-in-out infinite',
          }} />
        <div className="absolute rounded-full"
          style={{
            width: 'clamp(180px, 35vw, 350px)', height: 'clamp(180px, 35vw, 350px)',
            background: 'radial-gradient(circle, rgba(122,1,1,0.25) 0%, transparent 70%)',
            top: '40%', right: '25%',
            animation: 'orb-3 10s ease-in-out infinite',
          }} />
      </div>


      {/* Linha de acento dourada no topo */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, var(--gold), transparent 55%)' }} />

      <div className="relative w-full max-w-6xl mx-auto px-6 pt-24 pb-[340px] lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Coluna esquerda — texto */}
          <div>
            <span className="section-label block mb-8">
              Primeira EJ de Direito da UESC · Desde 2021
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.06] text-white mb-8"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>
              Assessoria jurídica para quem está{' '}
              <em className="not-italic" style={{ color: 'var(--gold)' }}>
                construindo algo real.
              </em>
            </h1>

            <div className="w-10 h-px mb-8" style={{ background: 'var(--gold)' }} />

            <p className="text-base md:text-lg leading-relaxed mb-12"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}>
              Do registro de marcas à abertura de empresas, entregamos inteligência jurídica acessível e de excelência para o seu negócio crescer com segurança.
            </p>

            <div className="flex gap-3 z-20">
              <a href="https://wa.me/557382344154" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-7 py-3.5 text-sm font-semibold transition-colors duration-200"
                style={{ background: 'var(--gold)', color: 'var(--wine-deeper)', fontFamily: 'var(--font-body)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)' }}>
                Falar com a equipe <ArrowRight size={15} />
              </a>
              <a href="#servicos"
                className="inline-flex items-center gap-2 px-4 sm:px-7 py-3.5 text-sm font-medium transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}>
                Ver serviços
              </a>
            </div>
          </div>

          {/* Imagem mobile */}
          <div className="lg:hidden">
            <Image
              src="/mulher-hero.png"
              alt="Ilustração"
              width={920}
              height={920}
              priority
              quality={90}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[360px] sm:h-[460px] w-auto object-contain object-bottom"
            />
          </div>

          {/* Coluna direita — imagem desktop */}
          <div className="hidden lg:flex items-end justify-center h-full min-h-[420px]">
            <Image
              src="/mulher-hero.png"
              alt="Ilustração"
              width={1360}
              height={1360}
              priority
              quality={90}
              className="absolute z-10 h-full max-h-[680px] w-auto object-contain object-bottom bottom-0 mt-2"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
