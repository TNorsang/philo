import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/ui/NavBar'
import UnderMaintenance from '@/components/ui/UnderMaintenance'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Philo',
  description: 'Your AI Friend',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 z-50 ">
          <NavBar />
        </div>
        <div className="overflow-y-hidden">{children}</div>
        <UnderMaintenance />
      </body>
    </html>
  )
}
