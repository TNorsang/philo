import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/ui/NavBar'

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
        <div className="relative z-50">
          <NavBar />
        </div>
        <div>{children}</div>
        <div>
          <h1 className="text-white text-[18px] font-semibold absolute w-full bottom-0 flex justify-center items-center underline">
            Site Under Maintenance: Some features are currently unavailable.
          </h1>
        </div>
      </body>
    </html>
  )
}
