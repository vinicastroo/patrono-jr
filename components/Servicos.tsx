'use client'

import { Scale, FileText, Building2, ShieldCheck, Briefcase, Lock } from 'lucide-react'
import Reveal from '@/components/Reveal'

const servicos = [
  {
    icon: ShieldCheck,
    title: 'Registro de Marca no INPI',
    desc: 'Proteção completa da sua identidade visual e nominal — busca de anterioridade, protocolo e acompanhamento junto ao INPI.',
    tag: 'Propriedade Intelectual',
  },
  {
    icon: FileText,
    title: 'Contratos, Atas e Estatutos',
    desc: 'Redação técnica e revisão crítica de peças fundamentais: contratos comerciais, atas de reunião, estatutos sociais e societários.',
    tag: 'Assessoria',
  },
  {
    icon: Building2,
    title: 'Abertura de Empresa e EJ',
    desc: 'Suporte burocrático e legal completo para formalização de MEIs, empresas convencionais e novas Empresas Juniores.',
    tag: 'Constituição',
  },
  {
    icon: Briefcase,
    title: 'Consultoria Jurídica',
    desc: 'Orientação especializada em direito empresarial, cível, trabalhista e societário para os desafios do mercado moderno.',
    tag: 'Consultoria',
  },
  {
    icon: Lock,
    title: 'Adequação à LGPD',
    desc: 'Políticas de privacidade, termos de uso, contratos de adesão e adequação completa à Lei Geral de Proteção de Dados.',
    tag: 'Direito Digital',
  },
  {
    icon: Scale,
    title: 'Suporte Trabalhista',
    desc: 'Apoio em contratos de trabalho, fornecimento e processos trabalhistas — conformidade jurídica nas relações laborais.',
    tag: 'Direito do Trabalho',
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="py-28" style={{ background: 'var(--wine-deeper, #2a0000)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <Reveal variant="rotate" className="text-center mb-16">
          <span className="section-label block mb-4">O que fazemos</span>
          <span className="gold-bar mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl text-white leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}>
            Serviços que protegem e<br />estruturam o seu negócio.
          </h2>
        </Reveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.12)' }}>
          {servicos.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={i} variant="scale" delay={i * 0.07}>
                <div
                  className="p-8 group transition-colors duration-300 cursor-default h-full"
                  style={{ background: 'var(--wine-deeper, #2a0000)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--wine-dark)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--wine-deeper, #2a0000)' }}>

                  <span className="text-[10px] font-semibold tracking-widest uppercase mb-4 block"
                    style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
                    {s.tag}
                  </span>

                  <div className="w-10 h-10 flex items-center justify-center rounded-sm mb-5"
                    style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                    <Icon size={18} style={{ color: 'var(--gold)' }} />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* CTA */}
        <Reveal variant="slide-up" className="text-center mt-12">
          <a href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm text-sm font-semibold transition-all duration-200"
            style={{ background: 'var(--gold)', color: '#2a0000', fontFamily: 'var(--font-body)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)' }}>
            Agendar diagnóstico gratuito
          </a>
        </Reveal>

      </div>
    </section>
  )
}
