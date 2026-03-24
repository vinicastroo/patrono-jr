'use client'

import Reveal from '@/components/Reveal'

const clientes = [
  { src: '/case-1.png', alt: 'Case 1' },
  { src: '/case-2.png', alt: 'Case 2' },
  { src: '/case-3.png', alt: 'Case 3' },
  { src: '/case-4.png', alt: 'Case 4' },
  { src: '/case-5.png', alt: 'Case 5' },
  { src: '/case-6.png', alt: 'Case 6' },
  { src: '/case-7.png', alt: 'Case 7' },
  { src: '/case-8.png', alt: 'Case 8' },
  { src: '/case-9.png', alt: 'Case 9' },
  { src: '/case-10.png', alt: 'Case 10' },
  { src: '/case-11.png', alt: 'Case 11' },
  { src: '/case-12.png', alt: 'Case 12' },
]

// 2 cópias idênticas — animar exatamente -50% move um set completo,
// voltando ao estado visual idêntico ao início → loop seamless
const track = [...clientes, ...clientes]

export default function Clientes() {
  return (
    <section id="clientes" className="py-24 overflow-hidden" style={{ background: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <Reveal variant="slide-left" className="mb-14">
          <span className="section-label block mb-4">Nossos Clientes</span>
          <span className="gold-bar mb-6 block" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--wine)', fontWeight: 400 }}>
            Mais de <strong style={{ fontWeight: 700 }}>30 clientes</strong><br />satisfeitos.
          </h2>
          <p className="mt-4 text-base max-w-xl"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
            Ao longo dos 5 anos de Empresa Júnior, entregamos resultados de excelência para empreendedores, startups e associações.
          </p>
        </Reveal>

      </div>

      {/* Marquee */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, var(--cream), transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, var(--cream), transparent)' }} />

          <div className="flex items-center" style={{ animation: 'marquee 12s linear infinite', willChange: 'transform', width: 'max-content' }}>
            {track.map((c, i) => (
              <div
                key={i}
                className="shrink-0 mx-4 flex items-center justify-center"
                style={{
                  width: 200,
                  height: 110,
                  // background: '#fff',
                  // border: '1px solid rgba(0,0,0,0.07)',/
                  borderRadius: 6,
                  // boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  padding: '20px 28px',
                }}>
                <img
                  src={c.src}
                  alt={c.alt}
                  className="w-full h-full object-contain"
                  style={{ filter: 'grayscale(100%)', opacity: 0.65, transition: 'filter 0.3s, opacity 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = '1' }}
                  onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.65' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </section>
  )
}
