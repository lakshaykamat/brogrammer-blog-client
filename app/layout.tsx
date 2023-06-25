import { usePathname } from 'next/navigation'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brogrammer Blog',
  description: 'Brogrammer blog page ',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-sky-100 dark:text-slate-200 dark:bg-sky-950 `}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

