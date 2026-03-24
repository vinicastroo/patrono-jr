'use client'

import { useRef, useEffect, useState } from 'react'
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
    title: 'Execução com excelência',
    desc: 'Nossos membros conduzem todo o processo com supervisão docente especializada, garantindo segurança jurídica em cada etapa.',
  },
  {
    n: '04',
    title: 'Acompanhamento e entrega',
    desc: 'Você é informado em cada etapa. No final, recebe toda a documentação e o resultado do serviço contratado.',
  },
]

// 4 steps + diferencial box + professors grid
const NUM = 6

export default function ComoFunciona() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const elRefs = useRef<(HTMLDivElement | null)[]>(Array(NUM).fill(null))
  const [active, setActive] = useState<boolean[]>(Array(NUM).fill(false))

  // IntersectionObserver por elemento — funciona corretamente em qualquer altura
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    elRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(prev => { const next = [...prev]; next[i] = true; return next })
            obs.disconnect()
          }
        },
        { threshold: 0.15 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  // Linha dourada desktop — scroll progress só para este elemento visual
  useEffect(() => {
    let rafId: number
    const compute = () => {
      const el = sectionRef.current
      if (!el || !lineRef.current) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const traveled = -rect.top + vh * 0.75
      const progress = Math.min(1, Math.max(0, traveled / (rect.height * 0.95)))
      lineRef.current.style.width = `${progress * 100}%`
    }
    const onScroll = () => { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(compute) }
    window.addEventListener('scroll', onScroll, { passive: true })
    compute()
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId) }
  }, [])

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
              <div key={i} ref={el => { elRefs.current[i] = el }} style={{
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

        {/* Diferencial box */}
        <div ref={el => { elRefs.current[4] = el }} className="mt-16 p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start"
          style={{
            background: 'var(--cream-dark)',
            borderLeft: '3px solid var(--gold)',
            opacity: active[4] ? 1 : 0,
            transform: active[4] ? 'translateY(0)' : 'translateY(16px)',
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
              Supervisão docente especialista
            </h3>
            <p className="text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
              Embora sejamos uma empresa comandada por empresários júniores, contamos com o apoio de três advogados especialistas e um juiz de direito enquanto professores orientadores, sempre disponíveis e atentos. Isso significa que você contrata um serviço de excelência e segurança jurídica por um valor mais acessível, contando com o apoio de profissionais experientes.
            </p>
          </div>
        </div>

        {/* Professores orientadores */}
        <Reveal variant="scale" delay={0.1} className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            { img: '/prof-cairo.png', name: 'Prof. Cairo Júnior', role: 'Juiz do Trabalho, Professor de Direito do Trabalho, Processo do Trabalho e Direito Empresarial' },
            { img: '/prof-catrine.png', name: 'Prof.ª Catrine da Mata', role: 'Advogada, Professora de Direito Empresarial e Direito do Trabalho' },
            { img: '/prof-otavio.png', name: 'Prof. Otávio Augustus', role: 'Advogado, Professor de Direito Empresarial' },
            { img: '/prof-geraldo.png', name: 'Prof. Geraldo Calasans', role: 'Advogado, Professor de Direito Administrativo e Direito Municipal' },
          ].map((p, i) => (
            <div key={i} className="flex flex-col overflow-hidden"
              style={{ border: '1px solid rgba(122,1,1,0.1)' }}>
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(74,0,0,0.55) 0%, transparent 50%)' }} />
              </div>
              <div className="p-4 flex flex-col flex-1" style={{ background: 'var(--cream-dark)' }}>
                <p className="text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--wine)', minHeight: '2.5rem' }}>
                  {p.name}
                </p>
                <p className="text-xs leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
                  {p.role}
                </p>
              </div>
            </div>
          ))}
        </Reveal>

      </div>
    </section>
  )
}
