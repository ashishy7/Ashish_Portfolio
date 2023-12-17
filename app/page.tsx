import Image from 'next/image'
import Hero from '../components/main/Hero'
import Skills from '@/components/main/Skills'
import Encryption from '@/components/main/Encryption'
import Projects from '@/components/main/Projects'
import Footer from '@/components/main/Footer'

export default function Home() {
  console.log("I am in the Home")
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20"></div>
     <Hero/>
     <Skills/>
     <Encryption/>
     <Projects/>
     <Footer/>
    </main>
  )
}
