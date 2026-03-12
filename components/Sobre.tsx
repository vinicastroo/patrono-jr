export default function Sobre() {
  return (
    <section id="sobre" style={{ background: 'var(--cream)' }}>

      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Título grande */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label">Quem Somos</span>
            <div className="w-8 h-px" style={{ background: 'var(--gold)' }} />
            <span className="text-[10px] tracking-widest uppercase"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              Desde 2021
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--wine)', fontWeight: 400 }}>
            A primeira EJ de<br />Direito da UESC.
          </h2>
        </div>

        {/* Grid principal */}
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Texto — 2 colunas de largura */}
          <div className="md:col-span-2 reveal reveal-delay-1">
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
          </div>

          {/* Coluna lateral — Missão e Visão empilhados */}
          <div className="flex flex-col gap-px reveal reveal-delay-2"
            style={{ borderLeft: '1px solid rgba(122,1,1,0.12)' }}>
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
          </div>

        </div>

        {/* Foto da equipe — substituir src quando disponível */}
        <div className="mt-16 reveal reveal-delay-3">
          <div className="w-full h-72 md:h-96 flex items-center justify-center relative overflow-hidden"
            style={{ background: 'var(--cream-dark)', border: '1px solid rgba(122,1,1,0.1)' }}>
            {/* Substituir por: <Image src="/equipe.jpg" alt="Equipe Patrono Jr." fill className="object-cover" /> */}
            <div className="text-center">
              <div className="w-12 h-px mx-auto mb-4" style={{ background: 'var(--gold)' }} />
              <span className="text-xs tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-body)', color: 'rgba(122,1,1,0.3)' }}>
                Foto da equipe
              </span>
            </div>
          </div>
        </div>

        {/* Linha divisória + stats */}
        <div className="mt-20 pt-10 reveal reveal-delay-3"
          style={{ borderTop: '1px solid rgba(122,1,1,0.12)' }}>
          <div className="grid grid-cols-3 gap-0">
            {[
              { n: '2021', label: 'Ano de fundação' },
              { n: 'MEJ', label: 'Movimento Empresa Júnior' },
              { n: 'UESC', label: 'Primeira EJ de Direito' },
            ].map((s, i) => (
              <div key={s.n} className={`py-6 ${i > 0 ? 'pl-10 border-l' : ''}`}
                style={{ borderColor: 'rgba(122,1,1,0.12)' }}>
                <div className="text-3xl md:text-4xl mb-1"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--wine)', fontWeight: 400 }}>
                  {s.n}
                </div>
                <div className="text-xs tracking-wide"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
