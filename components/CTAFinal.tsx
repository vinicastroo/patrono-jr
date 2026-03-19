'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function CTAFinal() {
  return (
    <section className="py-16" style={{ background: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <Reveal variant="scale">
          {/* Card */}
          <div className="relative h-full"
            style={{ background: 'var(--wine-deeper)' }}>

            <div className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{
                backgroundImage: `repeating-linear-gradient(
                45deg,
                rgba(255,255,255,0.025) 0px,
                rgba(255,255,255,0.025) 1px,
                transparent 1px,
                transparent 18px
              )`,
              }}>
              {/* Orb dourado */}
              <div className="absolute pointer-events-none"
                style={{
                  width: '600px', height: '600px',
                  background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)',
                  top: '50%', right: '-100px',
                  transform: 'translateY(-50%)',
                }} />
            </div>

            {/* Linha dourada no topo */}
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(to right, var(--gold), transparent 55%)' }} />

            <div className="relative z-10 grid lg:grid-cols-2 min-h-[380px]">

              {/* Coluna esquerda — texto + botões */}
              <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
                <div className="flex items-center gap-4 mb-6">
                  <span className="section-label">Diagnóstico gratuito</span>
                  <div className="w-8 h-px" style={{ background: 'var(--gold)' }} />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.06] text-white mb-6"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>
                  Pronto para proteger<br />
                  o que você{' '}
                  <em className="not-italic" style={{ color: 'var(--gold)' }}>
                    construiu?
                  </em>
                </h2>
                <p className="text-sm leading-relaxed mb-8"
                  style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.45)' }}>
                  Uma conversa sem compromisso pode ser o primeiro passo para o seu
                  negócio operar com a segurança jurídica que merece.
                </p>
                <div className="flex gap-3">
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

              {/* Imagem desktop */}
              <div className="hidden lg:flex items-end justify-center relative"
                style={{ borderLeft: '1px solid rgba(201,168,76,0.1)' }}>
                <Image
                  src="/homem-cta.png"
                  alt=""
                  width={520}
                  height={520}
                  className="absolute bottom-0 h-[580px] w-auto max-h-[580px] object-contain object-bottom"
                />
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
