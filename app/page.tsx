import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Servicos from '@/components/Servicos'
import ComoFunciona from '@/components/ComoFunciona'
import FAQ from '@/components/FAQ'
import CTAFinal from '@/components/CTAFinal'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <ComoFunciona />
        <FAQ />
        <CTAFinal />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

