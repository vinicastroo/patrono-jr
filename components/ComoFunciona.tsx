'use client'

import { useRef, useEffect, useReducer } from 'react'
import Reveal from '@/components/Reveal'

const steps = [
  {
    n: '01',
    title: 'Entre em contato',
    desc: 'Nos conte sobre o seu negócio ou o que você precisa proteger. O diagnóstico inicial é gratuito e sem compromisso.',
  },
  {
    n: '02',
    title: 'Análise e proposta',
    desc: 'Nossa equipe avalia o seu caso e apresenta uma proposta clara com escopo, prazo e investimento. Sem surpresas.',
  },
  {
    n: '03',
    title: 'Execução com rigor',
    desc: 'Nossos membros conduzem todo o processo com supervisão docente especializada, garantindo segurança jurídica em cada etapa.',
  },
  {
    n: '04',
    title: 'Acompanhamento e entrega',
    desc: 'Você é informado em cada etapa. No final, recebe toda a documentação e o resultado do serviço contratado.',
  },
]

const THRESHOLDS = [0.05, 0.30, 0.52, 0.72, 0.85, 0.94]

export default function ComoFunciona() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const lineRef     = useRef<HTMLDivElement>(null)

  // Refs para estado ativo — atualizados sem re-render no scroll
  const activeRef   = useRef(THRESHOLDS.map(() => false))

  // Re-render só ocorre quando um threshold é cruzado (máx. 6 vezes)
  const [, notify] = useReducer(x => x + 1, 0)

  useEffect(() => {
    let rafId: number

    const compute = () => {
      const el = sectionRef.current
      if (!el) return

      const rect   = el.getBoundingClientRect()
      const vh     = window.innerHeight
      const start  = vh * 0.75
      const traveled = -rect.top + start
      const progress = Math.min(1, Math.max(0, traveled / (rect.height * 0.95)))

      // Atualiza a linha dourada via DOM direto — zero re-renders
      if (lineRef.current) {
        lineRef.current.style.width = `${progress * 100}%`
      }

      // Verifica cruzamentos de threshold — re-render só se algo mudou
      const newActive = THRESHOLDS.map(t => progress >= t)
      const changed   = newActive.some((v, i) => v !== activeRef.current[i])
      if (changed) {
        activeRef.current = newActive
        notify()
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(compute)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    compute()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const active = activeRef.current

  return (
    <section id="como-funciona" className="py-28" style={{ background: 'var(--cream)' }}>
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">

        <Reveal variant="slide-left" className="max-w-xl mb-20">
          <span className="section-label block mb-4">Como funciona</span>
          <span className="gold-bar mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--wine)' }}>
            Do primeiro contato à entrega, simples e transparente.
          </h2>
        </Reveal>

        {/* Steps */}
        <div className="relative">

          {/* Linha conectora desktop */}
          <div className="hidden lg:block absolute top-5 left-0 right-0 h-px"
            style={{ background: 'rgba(122,1,1,0.1)' }}>
            <div ref={lineRef} className="h-full origin-left"
              style={{ background: 'var(--gold)', width: '0%', transition: 'width 0.1s linear' }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <div key={i} style={{
                opacity: active[i] ? 1 : 0.3,
                transform: active[i] ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative z-10 w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: active[i] ? 'var(--gold)' : 'var(--cream)',
                      border: `1px solid ${active[i] ? 'var(--gold)' : 'rgba(122,1,1,0.2)'}`,
                      transition: 'background 0.4s ease, border-color 0.4s ease',
                    }}>
                    <span className="text-xs font-bold"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: active[i] ? 'var(--wine-deeper)' : 'var(--wine)',
                        transition: 'color 0.4s ease',
                      }}>
                      {step.n}
                    </span>
                  </div>
                  <div className="h-px flex-1 lg:hidden"
                    style={{ background: active[i] ? 'var(--gold)' : 'rgba(122,1,1,0.12)', transition: 'background 0.4s ease' }} />
                </div>

                <h3 className="text-base font-semibold mb-2"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: active[i] ? 'var(--wine)' : 'var(--text-muted)',
                    transition: 'color 0.4s ease',
                  }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Imagem */}
        <div className="mt-16 w-full h-56 md:h-72 relative overflow-hidden"
          style={{
            border: '1px solid rgba(122,1,1,0.1)',
            opacity: active[4] ? 1 : 0,
            transform: active[4] ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}>
          <img
            src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1400&q=80"
            alt="Ambiente de trabalho da equipe Patrono Jr."
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0"
            style={{ background: 'rgba(74,0,0,0.45)', mixBlendMode: 'multiply' }} />
          <div className="absolute inset-x-0 bottom-0 h-px"
            style={{ background: 'var(--gold)', opacity: 0.4 }} />
        </div>

        {/* Diferencial box */}
        <div className="mt-16 p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start"
          style={{
            background: 'var(--cream-dark)',
            borderLeft: '3px solid var(--gold)',
            opacity: active[5] ? 1 : 0,
            transform: active[5] ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}>
          <div className="flex-shrink-0">
            <svg width="40" height="46" viewBox="0 0 40 46" fill="none" aria-hidden="true">
              <path d="M20 2L38 10V24C38 34 29 42 20 44C11 42 2 34 2 24V10L20 2Z"
                stroke="#C9A84C" strokeWidth="1.5" fill="none" />
              <line x1="14" y1="13" x2="14" y2="31" stroke="#C9A84C" strokeWidth="1.4" />
              <line x1="18" y1="13" x2="18" y2="31" stroke="#C9A84C" strokeWidth="1.4" />
              <line x1="22" y1="13" x2="22" y2="31" stroke="#C9A84C" strokeWidth="1.4" />
              <line x1="26" y1="13" x2="26" y2="31" stroke="#C9A84C" strokeWidth="1.4" />
              <line x1="12" y1="13" x2="28" y2="13" stroke="#C9A84C" strokeWidth="1.4" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--wine)' }}>
              Supervisão docente em todos os projetos
            </h3>
            <p className="text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
              Todo e qualquer trabalho da Patrono Jr. é orientado por professores especialistas do curso de Direito da UESC.
              Isso significa que você tem acesso a um serviço de qualidade técnica e segurança jurídica real — não apenas
              o comprometimento de estudantes, mas a experiência de quem ensina o Direito todos os dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
