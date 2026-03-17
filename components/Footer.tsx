'use client'

import Image from 'next/image'
import { Instagram, Linkedin, Mail } from 'lucide-react'

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const navLinks = [
  { label: 'Quem Somos', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
]

const sociais = [
  { href: 'https://www.instagram.com/patronojr/', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/patrono-assessoria-e-consultoria\u00a0junior/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:patronojr@gmail.com', icon: Mail, label: 'E-mail' },
  { href: 'https://wa.me/557382344154', icon: WhatsAppIcon, label: 'WhatsApp' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#1a0000' }}>

      {/* Corpo principal */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Coluna 1 — Logo + descrição */}
          <div>
            <Image src="/logo-full.png" alt="Patrono Jr." width={250} height={80} className="mb-5" />
            <p className="text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.35)' }}>
              A primeira Empresa Júnior de Direito da UESC. Assessoria jurídica acessível,
              com supervisão docente especializada.
            </p>
            <div className="flex gap-3">
              {sociais.map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                  style={{
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--gold)'
                    e.currentTarget.style.color = 'var(--gold)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
                  }}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <span className="section-label block mb-5">Navegação</span>
            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href}
                  className="text-sm transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <span className="section-label block mb-5">Contato</span>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/557382344154" target="_blank" rel="noopener noreferrer"
                className="text-sm transition-colors duration-200"
                style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}>
                (73) 8234-4154
              </a>
              <a href="mailto:patronojr@gmail.com"
                className="text-sm transition-colors duration-200"
                style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}>
                patronojr@gmail.com
              </a>
              <span className="text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.2)' }}>
                Pavilhão Waldir Pires, Campus Soane Nazaré de Andrade<br />
                Rod. Jorge Amado, Km 16 — Salobrinho<br />
                Ilhéus - BA, 45662-900
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Rodapé inferior */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[11px]"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.2)' }}>
            © {year} Patrono Jr. · Todos os direitos reservados
          </p>
          <p className="text-[11px]"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.2)' }}>
            CNPJ 47.485.631/0001-01 · Serviços supervisionados por professores especialistas
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[11px]"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.2)' }}>
              Desenvolvido por
            </span>
            <a href="https://codelabz.com.br" target="_blank" rel="noopener noreferrer"
              className="transition-opacity duration-200"
              style={{ opacity: 0.35 }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '1' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '0.35' }}>
              <Image src="/codelabz.svg" alt="Codelabz" width={16} height={16}
                style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}
