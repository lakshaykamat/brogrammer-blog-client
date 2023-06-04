import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brogrammer Blog',
  description: 'Brogrammer blog Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-[#4e6199]`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
