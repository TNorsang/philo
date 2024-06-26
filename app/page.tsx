'use client'

import React, { useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const PhiloModel = dynamic(() => import('../components/ui/philoModel'), {
    ssr: false,
  })

  return (
    <main className="relative">
      <motion.div>
        <Image
          className="absolute top-[235px] sm:top-[264px] right-[32px] sm:right-[312px] sm:w-[313px] sm:h-[344px]"
          alt="Bay Max"
          src="/images/bmax.png"
          width={172}
          height={189}
        />
      </motion.div>
      <motion.div className="absolute top-[152px] left-[40px] sm:left-[368px] sm:top-[184px]">
        <h1 className="text-white text-[48px] font-semibold w-[252px] h-[177px] sm:text-[88px] sm:w-[464px] sm:h-[304px]">
          Meet Your Forever Friend
        </h1>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-gradient-to-b from-white to-gray-300 w-[200px] h-[80px] flex justify-center items-center absolute right-[16px] sm:right-[368px] top-[424px] sm:top-[608px] text-[24px] font-semibold text-customFontOrange"
      >
        <Link href="/chat">
          <button>Get Started</button>
        </Link>
      </motion.div>
      {/* <PhiloModel /> */}
    </main>
  )
}
