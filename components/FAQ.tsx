'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'O diagnóstico inicial é gratuito?',
    a: 'Sim. O primeiro contato e a análise preliminar do seu caso são totalmente gratuitos e sem compromisso. Entramos em contato, entendemos a sua demanda e só então apresentamos uma proposta.',
  },
  {
    q: 'Quanto tempo leva o registro de uma marca no INPI?',
    a: 'O processo pode levar entre 18 e 36 meses, a depender de exigências ou eventuais oposições. O número de protocolo gerado no ato do depósito já garante a data de prioridade — ou seja, você já está protegido desde o protocolo.',
  },
  {
    q: 'Preciso ter CNPJ para registrar uma marca?',
    a: 'Não. Pessoas físicas também podem registrar marcas no INPI. Um empreendedor individual pode proteger sua marca antes mesmo de abrir empresa.',
  },
  {
    q: 'O trabalho é supervisionado por professores?',
    a: 'Sim, sempre. Todos os projetos da Patrono Jr. são orientados por professores especialistas do curso de Direito da UESC, garantindo qualidade técnica e segurança jurídica em cada entrega.',
  },
  {
    q: 'Vocês atendem fora da região da UESC?',
    a: 'Sim. A maioria dos nossos serviços pode ser realizada de forma totalmente remota, atendendo clientes em qualquer estado do Brasil.',
  },
  {
    q: 'Por que contratar uma EJ e não um escritório comum?',
    a: 'Porque você tem acesso a serviço de qualidade, com supervisão de especialistas, por um custo muito abaixo do mercado. Além disso, você apoia diretamente a formação de novos profissionais do Direito comprometidos com resultados reais.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-28" style={{ background: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header — alinhado à esquerda, mesmo padrão das outras seções */}
        <div className="grid md:grid-cols-3 gap-16 items-start">

          {/* Coluna esquerda — título fixo */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-6">
              <span className="section-label">FAQ</span>
              <div className="w-8 h-px" style={{ background: 'var(--gold)' }} />
            </div>
            <h2 className="text-4xl md:text-5xl leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--wine)', fontWeight: 400 }}>
              Dúvidas frequentes
            </h2>
            <p className="text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
              Não encontrou o que procura? Entre em contato — o diagnóstico inicial é gratuito.
            </p>
            <a href="#contato"
              className="inline-block mt-6 text-sm font-semibold transition-colors duration-200"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-body)', borderBottom: '1px solid var(--gold)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--wine)'; e.currentTarget.style.borderColor = 'var(--wine)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)' }}>
              Falar com a equipe →
            </a>
          </div>

          {/* Coluna direita — acordeão */}
          <div className="md:col-span-2 flex flex-col reveal reveal-delay-1"
            style={{ borderTop: '1px solid rgba(122,1,1,0.1)' }}>
            {faqs.map((faq, i) => (
              <div key={i}
                style={{ borderBottom: '1px solid rgba(122,1,1,0.1)' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between py-6 text-left gap-6 group"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  <span className="text-sm font-semibold leading-snug transition-colors duration-200"
                    style={{ color: open === i ? 'var(--wine)' : 'var(--text-dark)' }}>
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 mt-0.5 transition-colors duration-200"
                    style={{ color: open === i ? 'var(--gold)' : 'rgba(122,1,1,0.35)' }}>
                    {open === i ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-48 pb-6' : 'max-h-0'}`}>
                  <p className="text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
