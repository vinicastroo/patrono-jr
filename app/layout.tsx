import type { Metadata } from 'next'
import { Cormorant_Garamond, Poppins } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://patronojr.com.br'),
  title: {
    default: 'Patrono Jr. | Assessoria Jurídica para Empreendedores',
    template: '%s | Patrono Jr.',
  },
  description: 'A primeira Empresa Júnior de Direito da UESC. Registro de marcas no INPI, abertura de empresas, contratos e assessoria jurídica acessível com supervisão docente em Ilhéus-BA.',
  keywords: [
    'empresa júnior direito', 'registro de marca INPI', 'assessoria jurídica Ilhéus',
    'abertura de empresa', 'LGPD', 'propriedade intelectual', 'consultoria jurídica',
    'UESC', 'MEJ', 'Patrono Jr.', 'direito empresarial Bahia',
  ],
  authors: [{ name: 'Patrono Jr.', url: 'https://patronojr.com.br' }],
  creator: 'Patrono Jr.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://patronojr.com.br',
    siteName: 'Patrono Jr.',
    title: 'Patrono Jr. | Assessoria Jurídica para Empreendedores',
    description: 'Registro de marcas, abertura de empresas e consultoria jurídica acessível. Supervisão docente especializada. Diagnóstico gratuito.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Patrono Jr. — Assessoria Jurídica' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patrono Jr. | Assessoria Jurídica para Empreendedores',
    description: 'Registro de marcas, abertura de empresas e consultoria jurídica acessível. Diagnóstico gratuito.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: 'https://patronojr.com.br',
  },
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
    <html lang="pt-BR" className={`${cormorant.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body><div style={{ overflowX: 'hidden' }}>{children}</div></body>
    </html>
  )
}
