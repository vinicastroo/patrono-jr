import Reveal from '@/components/Reveal'

export default function Sobre() {
  return (
    <section id="sobre" style={{ background: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Título grande */}
        <Reveal variant="slide-left" className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label">Quem Somos</span>
            <div className="w-8 h-px" style={{ background: 'var(--gold)' }} />
            <span className="text-[10px] tracking-widest uppercase"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              Desde 2021
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--wine)', fontWeight: 400 }}>
            A primeira EJ de<br />Direito da UESC.
          </h2>
        </Reveal>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Texto — 2 colunas */}
          <Reveal variant="slide-left" delay={0.1} className="lg:col-span-2">
            <p className="text-lg leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
              A <strong style={{ color: 'var(--wine)' }}>Patrono Assessoria e Consultoria Júnior</strong> nasceu
              com um propósito claro: democratizar o acesso à assessoria jurídica de qualidade para quem está
              construindo, formalizando ou protegendo algo.
            </p>
            <p className="text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
              Integramos o <strong style={{ color: 'var(--wine)' }}>Movimento Empresa Júnior (MEJ)</strong> e atuamos
              no âmbito do direito empresarial e cível, com supervisão docente especializada em cada projeto.
            </p>
          </Reveal>

          {/* Missão e Visão */}
          <Reveal variant="slide-right" delay={0.2} className="flex flex-col gap-px border-t lg:border-t-0 lg:border-l pt-8 lg:pt-0"
            style={{ borderColor: 'rgba(122,1,1,0.12)' }}>
            {[
              {
                n: '01',
                label: 'Missão',
                text: 'Ofertar serviços jurídicos acessíveis e de qualidade, promovendo a vivência prática do Direito e a formação empreendedora de nossos membros.',
              },
              {
                n: '02',
                label: 'Visão',
                text: 'Transformar a microrregião por meio do empreendedorismo e do fortalecimento de lideranças comprometidas com a inovação e a justiça.',
              },
            ].map((item) => (
              <div key={item.n} className="pl-8 py-2">
                <span className="text-[10px] font-bold tracking-widest mb-1 block"
                  style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
                  {item.n} — {item.label.toUpperCase()}
                </span>
                <p className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </Reveal>

        </div>

        {/* Foto do campus */}
        <Reveal variant="scale" delay={0.1} className="mt-16">
          <div className="w-full h-64 lg:h-96 relative overflow-hidden"
            style={{ background: 'var(--wine-deeper)' }}>
            <img
              src="/campus.jpg"
              alt="Campus UESC"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(20,0,0,0.97) 0%, rgba(20,0,0,0.7) 50%, rgba(20,0,0,0.2) 100%)' }} />
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
              <span className="section-label block mb-3" style={{ color: 'var(--gold)' }}>Nossa casa</span>
              <p className="text-sm md:text-base leading-relaxed max-w-2xl"
                style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.92)' }}>
                A <strong style={{ color: '#fff' }}>Faculdade de Direito de Ilhéus</strong> é uma das escolas
                originárias da UESC — estadualizada em 1991 e hoje uma das quatro IES mantidas pelo Governo
                da Bahia, fortemente vinculada ao desenvolvimento do sul da Bahia.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal variant="blur" delay={0.1} className="mt-20 pt-10"
          style={{ borderTop: '1px solid rgba(122,1,1,0.12)' }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {[
              { n: '2021', label: 'Ano de fundação' },
              { n: 'MEJ',  label: 'Movimento Empresa Júnior' },
              { n: 'UESC', label: 'Primeira EJ de Direito' },
            ].map((s, i) => (
              <div key={s.n}
                className={`py-5 sm:py-6 flex sm:block items-center gap-5 sm:gap-0
                  ${i > 0 ? 'border-t sm:border-t-0 sm:border-l sm:pl-10' : ''}`}
                style={{ borderColor: 'rgba(122,1,1,0.12)' }}>
                <div className="text-4xl sm:text-3xl md:text-4xl mb-0 sm:mb-1 w-20 sm:w-auto shrink-0"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--wine)', fontWeight: 400 }}>
                  {s.n}
                </div>
                <div className="text-sm sm:text-xs tracking-wide"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
