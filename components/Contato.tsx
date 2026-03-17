'use client'

import { Mail, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import Reveal from '@/components/Reveal'

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const canais = [
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    desc: '(73) 8234-4154',
    href: 'https://wa.me/557382344154',
  },
  {
    icon: Mail,
    label: 'E-mail',
    desc: 'patronojr@gmail.com',
    href: 'mailto:patronojr@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    desc: '@patronojr',
    href: 'https://www.instagram.com/patronojr/',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    desc: 'Patrono Jr.',
    href: 'https://www.linkedin.com/company/patrono-assessoria-e-consultoria\u00a0junior/',
  },
]

export default function Contato() {
  return (
    <section id="contato" className="py-28"
      style={{ background: 'var(--wine-deeper, #2a0000)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <Reveal variant="blur" className="grid md:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="section-label">Contato</span>
              <div className="w-8 h-px" style={{ background: 'var(--gold)' }} />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>
              Seu negócio merece uma{' '}
              <em className="not-italic" style={{ color: 'var(--gold)' }}>
                base jurídica sólida.
              </em>
            </h2>
          </div>
          <p className="text-base leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.45)' }}>
            Não espere um problema para buscar orientação jurídica. O diagnóstico inicial
            é gratuito e sem compromisso. Escolha o canal que preferir.
          </p>
        </Reveal>

        {/* Canais */}
        <Reveal variant="slide-up" delay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: 'rgba(201,168,76,0.1)' }}>
          {canais.map(({ icon: Icon, label, desc, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="group flex flex-col justify-between p-8 transition-all duration-300"
              style={{ background: 'var(--wine-deeper)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--wine-dark)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--wine-deeper)' }}>
              <div>
                <div className="w-10 h-10 flex items-center justify-center mb-6"
                  style={{ border: '1px solid rgba(201,168,76,0.25)', color: 'var(--gold)' }}>
                  <Icon size={18} />
                </div>
                <span className="block text-base font-semibold text-white mb-1"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {label}
                </span>
                <span className="block text-sm"
                  style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.35)' }}>
                  {desc}
                </span>
              </div>
              <ArrowRight size={14} className="mt-8 transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: 'var(--gold)' }} />
            </a>
          ))}
        </Reveal>

      </div>
    </section>
  )
}
