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
          className="absolute top-[235] right-[32]"
          alt="Bay Max"
          src="/images/bmax.png"
          width={172}
          height={189}
        />
      </motion.div>
      <motion.div className="absolute top-[152] left-[40]">
        <h1 className="text-white text-[48px] font-semibold w-[252] h-[177]">
          Meet Your Forever Friend
        </h1>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-gradient-to-b from-white to-gray-300 w-[200] h-[80] flex justify-center items-center absolute right-[16] top-[424] text-[24px] font-semibold text-customFontOrange"
      >
        <Link href="/chat">
          <button>Get Started</button>
        </Link>
      </motion.div>
      {/* <PhiloModel /> */}
    </main>
  )
}
