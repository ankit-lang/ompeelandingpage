import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { About } from '@/components/about'
import { Programs } from '@/components/programs'
import { Journey } from '@/components/journey'
import { Wellbeing } from '@/components/wellbeing'
import { Stats } from '@/components/stats'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-white">
        <Hero />
      <Features />
      <About />
      <Programs />
      <Journey />
      <Wellbeing />
      <Stats />
      <Footer />
      </main>
    </>
  )
}
