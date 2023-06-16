'use client'
import { getLayout } from '@/lib/getLayout'
import { usePathname } from 'next/navigation'
import './globals.css'

export const metadata = {
  title: 'Brogrammer Blog',
  description: 'Brogrammer blog Page',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname()
  const Layout = getLayout(path, children)
  return (
    <html lang="en">
      <body className={`${!path.startsWith('/admin') ? 'bg-sky-100 dark:text-slate-200 dark:bg-sky-950'  : 'bg-gray-300'} `}>
        {Layout}
      </body>
    </html>
  )
}

