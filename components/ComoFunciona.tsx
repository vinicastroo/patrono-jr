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

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-28" style={{ background: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-xl mb-16 reveal">
          <span className="section-label block mb-4">Como funciona</span>
          <span className="gold-bar mb-6" />
          <h2 className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--wine)' }}>
            Do primeiro contato à entrega — simples e transparente.
          </h2>
        </div>

        {/* Steps — linha horizontal */}
        <div className="relative reveal">

          {/* Linha conectora */}
          <div className="hidden md:block absolute top-5 left-0 right-0 h-px"
            style={{ background: 'rgba(122,1,1,0.12)' }} />

          <div className="grid md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((step, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`}>

                {/* Número + ponto na linha */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative z-10 w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--cream)', border: '1px solid rgba(122,1,1,0.2)' }}>
                    <span className="text-xs font-bold"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--wine)' }}>
                      {step.n}
                    </span>
                  </div>
                  <div className="h-px flex-1 md:hidden"
                    style={{ background: 'rgba(122,1,1,0.12)' }} />
                </div>

                <h3 className="text-base font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--wine)' }}>
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

        {/* Imagem de contexto — substituir src quando disponível */}
        <div className="mt-16 w-full h-56 md:h-72 flex items-center justify-center relative overflow-hidden reveal"
          style={{ background: 'var(--cream-dark)', border: '1px solid rgba(122,1,1,0.1)' }}>
          {/* Substituir por: <Image src="/ambiente.jpg" alt="Ambiente de trabalho" fill className="object-cover" /> */}
          <div className="text-center">
            <div className="w-12 h-px mx-auto mb-4" style={{ background: 'var(--gold)' }} />
            <span className="text-xs tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(122,1,1,0.3)' }}>
              Foto do ambiente / equipe em ação
            </span>
          </div>
        </div>

        {/* Diferencial box */}
        <div className="mt-16 p-8 flex flex-col md:flex-row gap-8 items-start reveal"
          style={{ background: 'var(--cream-dark)', borderLeft: '3px solid var(--gold)' }}>
          <div className="flex-shrink-0">
            <svg width="40" height="46" viewBox="0 0 40 46" fill="none">
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
