'use client'

import React, { useState, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PhiloModel from '@/components/ui/philoModel'
import dynamic from 'next/dynamic'

export default function Home() {
  const My3DModel = dynamic(() => import('../components/ui/philoModel'), {
    ssr: false,
  }) // Client-side rendering

  const [showChat, setShowChat] = useState(false)

  return (
    <main className="flex flex-col h-screen items-center justify-center bg-gradient-to-b from-customOrange to-customLightOrange">
      <motion.div className=" mt-28 sm:mt-24">
        <h1 className="text-white text-3xl sm:text-6xl">
          Meet Your Forever Friend
        </h1>
      </motion.div>

      <PhiloModel />
    </main>
  )
}
