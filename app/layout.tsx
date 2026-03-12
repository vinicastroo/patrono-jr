import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Patrono Jr. | Assessoria e Consultoria Jurídica',
  description: 'A primeira Empresa Júnior de Direito da UESC. Registro de marcas, abertura de empresas, contratos e assessoria jurídica acessível.',
  keywords: ['empresa júnior direito', 'registro de marca INPI', 'assessoria jurídica', 'UESC', 'MEJ', 'LGPD', 'propriedade intelectual'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
