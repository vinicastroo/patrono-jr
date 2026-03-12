'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const links = [
  { label: 'Quem Somos', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(42,0,0,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.18)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <Image src="/logo.png" alt="Patrono Jr." width={120} height={40} priority />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-[13px] text-white/75 hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}>
              {l.label}
            </a>
          ))}
          <a href="#contato"
            className="text-[13px] font-semibold px-5 py-2 rounded-sm transition-all duration-200"
            style={{ background: 'var(--gold)', color: 'var(--wine-darker, #2a0000)', fontFamily: 'var(--font-body)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)' }}>
            Falar com a equipe
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-3 flex flex-col gap-3"
          style={{ background: 'rgba(42,0,0,0.98)', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-white/80 text-sm py-2.5 border-b"
              style={{ borderColor: 'rgba(201,168,76,0.12)', fontFamily: 'var(--font-body)' }}>
              {l.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)}
            className="text-sm font-semibold px-5 py-3 text-center rounded-sm mt-1"
            style={{ background: 'var(--gold)', color: '#2a0000', fontFamily: 'var(--font-body)' }}>
            Falar com a equipe
          </a>
        </div>
      )}
    </header>
  )
}
