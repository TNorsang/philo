'use client'

import React, { useState, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PhiloModel from '@/components/ui/philoModel'

export default function Home() {
  const [showChat, setShowChat] = useState(false)

  return (
    <main className="flex flex-col h-screen items-center justify-center bg-gradient-to-b from-customOrange to-customLightOrange">
      <PhiloModel />
      <motion.div>
        <h1 className="text-white text-6xl">Meet Your Forever Friend</h1>
      </motion.div>
    </main>
  )
}
