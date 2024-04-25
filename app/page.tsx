'use client'

import React, { useState, Suspense } from 'react'
import Link from 'next/link'
import { Loader } from '@react-three/drei'
import { ReactDOM } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [showChat, setShowChat] = useState(false)

  return (
    <main className="flex flex-col h-screen items-center justify-center bg-gradient-to-b from-customOrange to-white">
      <motion.div>
        <h1 className="text-white text-6xl">Find Your Forever Friend Soon!</h1>
      </motion.div>
    </main>
  )
}
