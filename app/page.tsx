'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Cursor from '@/components/ui/Cursor'
import FriendlyLandingPage from '@/components/ui/LandingPage'
import CloudWeatherBackground from '@/components/ui/Cloud'
import { Cloud } from 'lucide-react'

export default function Home() {
  const [showCursor, setShowCursor] = useState(false)
  const [signedIn, setSignedIn] = useState(false)

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
    <main className="relative flex justify-center items-center w-screen h-screen overflow-hidden">
      {/* <FriendlyLandingPage /> */}
      <CloudWeatherBackground />
      <div className="relative z-10">{showCursor && <Cursor />}</div>
      <motion.div className="flex">
        <motion.div className="top-[152px] left-[40px] sm:left-[368px] sm:top-[184px] z-20">
          <h1 className="text-white font-semibold text-[40px] w-[200px] sm:text-[60px] sm:w-[300px] md:text-[88px] md:w-[450px] md:left-4 relative left-8">
            Meet Your Forever Friend
          </h1>
        </motion.div>
        <motion.div className="flex flex-col items-center relative right-5 top-10 sm:top-14 md:top-20">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
          >
            <Image
              className="top-[235px] right-[32px] md:top-[264px] md:right-[312px] md:w-[313px] md:h-[344px] sm:w-[190px] sm:h-[212px]"
              alt="Bay Max"
              src="/images/bmax.png"
              width={172}
              height={189}
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-b from-white to-gray-300 w-[170px] h-[60px] flex justify-center items-center right-[16px] top-[424px] sm:right-[368px] sm:top-[608px] text-[20px] font-semibold text-customFontOrange z-50"
          >
            <Link href={signedIn ? '/chat' : '/signin'}>
              <button>Get Started</button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <h1 className="text-white text-[24px] font-semibold absolute w-full bottom-0 flex justify-center items-center underline">
        Site Under Development
      </h1>
      {/* <PhiloModel /> */}
    </main>
  )
}
