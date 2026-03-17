import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Patrono Jr. | Assessoria e Consultoria Jurídica',
  description: 'A primeira Empresa Júnior de Direito da UESC. Registro de marcas, abertura de empresas, contratos e assessoria jurídica acessível.',
  keywords: ['empresa júnior direito', 'registro de marca INPI', 'assessoria jurídica', 'UESC', 'MEJ', 'LGPD', 'propriedade intelectual'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': 'https://patronojr.com.br/#organization',
      name: 'Patrono Assessoria e Consultoria Júnior',
      alternateName: 'Patrono Jr.',
      description: 'A primeira Empresa Júnior de Direito da UESC. Assessoria jurídica acessível com supervisão docente especializada.',
      url: 'https://patronojr.com.br',
      logo: 'https://patronojr.com.br/logo.png',
      foundingDate: '2021',
      email: 'patronojr@gmail.com',
      telephone: '+55-73-8234-4154',
      vatID: '47.485.631/0001-01',
      sameAs: [
        'https://www.instagram.com/patronojr/',
        'https://www.linkedin.com/company/patrono-assessoria-e-consultoria-junior/',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Pavilhão Waldir Pires, Rod. Jorge Amado, Km 16 - Salobrinho',
        addressLocality: 'Ilhéus',
        addressRegion: 'BA',
        postalCode: '45662-900',
        addressCountry: 'BR',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Brasil',
      },
      memberOf: {
        '@type': 'Organization',
        name: 'Movimento Empresa Júnior',
        alternateName: 'MEJ',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços Jurídicos',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Registro de Marca no INPI' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contratos, Atas e Estatutos' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Abertura de Empresa e EJ' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consultoria Jurídica' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Adequação à LGPD' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Suporte Trabalhista' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://patronojr.com.br/#website',
      url: 'https://patronojr.com.br',
      name: 'Patrono Jr.',
      publisher: { '@id': 'https://patronojr.com.br/#organization' },
      inLanguage: 'pt-BR',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
