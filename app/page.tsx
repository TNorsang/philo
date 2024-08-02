'use client'

import React, { useState, useEffect } from 'react'
import Cursor from '@/components/ui/Cursor'
import CloudWeatherBackground from '@/components/ui/Cloud'
import MainContentSection from '@/components/ui/MainContentSection'
import HeroSection from '@/components/ui/HeroSection'

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
    <main className="relative">
      {/* <CloudWeatherBackground /> */}
      <div className="relative z-10 ">{showCursor && <Cursor />}</div>
      <HeroSection signedIn={signedIn} />

      {/* <div>
        <MainContentSection />
      </div> */}
    </main>
  )
}
