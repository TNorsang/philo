'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Cursor from '@/components/ui/Cursor'
import CloudWeatherBackground from '@/components/ui/Cloud'

export default function Home() {
  const [showCursor, setShowCursor] = useState(false)
  const [signedIn, setSignedIn] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
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
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3.5 }}
          >
            <Image
              className=" md:w-[313px] md:h-[344px] sm:w-[190px] sm:h-[212px]"
              alt="Bay Max"
              src="/images/bmax.png"
              width={172}
              height={189}
            />
          </motion.div>
          <Link className="z-50" href={signedIn ? '/chat' : '/signup'}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.02 }}
              className="bg-gradient-to-b from-white to-gray-300 w-[170px] h-[60px] flex justify-center items-center right-[16px] top-[424px] sm:right-[368px] sm:top-[608px] text-[20px] font-semibold text-customFontOrange "
            >
              <button>Get Started</button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
      <h1 className="text-white text-[24px] font-semibold absolute w-full bottom-0 flex justify-center items-center underline">
        Site Under Development
      </h1>
      {/* <PhiloModel /> */}
    </main>
  )
}
