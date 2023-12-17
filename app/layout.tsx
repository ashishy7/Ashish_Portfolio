import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StarsCanvas from '@/components/main/Starbackground'
import './globals.css'
import Home from './page'
import Navbar from '@/components/main/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
      <Navbar/>   
      <StarsCanvas/>
      {children}
       
        </body>
    </html>
  )
}
