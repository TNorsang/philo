'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Cursor from '@/components/ui/Cursor'

export default function Home() {
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowCursor(true)
      } else {
        setShowCursor(false)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main className="relative h-screen overflow-hidden">
      <div className="relative z-10">{showCursor && <Cursor />}</div>
      <motion.div>
        <Image
          className="absolute top-[235px] sm:top-[264px] right-[32px] sm:right-[312px] sm:w-[313px] sm:h-[344px]"
          alt="Bay Max"
          src="/images/bmax.png"
          width={172}
          height={189}
        />
      </motion.div>
      <motion.div className="absolute top-[152px] left-[40px] sm:left-[368px] sm:top-[184px] z-20">
        <h1 className="text-white text-[48px] font-semibold w-[252px] h-[177px] sm:text-[88px] sm:w-[464px] sm:h-[304px]">
          Meet Your Forever Friend
        </h1>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-gradient-to-b from-white to-gray-300 w-[200px] h-[80px] flex justify-center items-center absolute right-[16px] sm:right-[368px] top-[424px] sm:top-[608px] text-[24px] font-semibold text-customFontOrange z-50"
      >
        <Link href="/chat">
          <button>Get Started</button>
        </Link>
      </motion.div>
      <h1 className="text-white text-[24px] font-semibold absolute w-full bottom-0 flex justify-center items-center underline">
        Site Under Development
      </h1>
      {/* <PhiloModel /> */}
    </main>
  )
}
