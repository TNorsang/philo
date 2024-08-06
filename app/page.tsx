'use client'

import React, { useState, useEffect } from 'react'
import Cursor from '@/components/ui/Cursor'
import MainContentSection from '@/components/ui/MainContentSection'
import HeroSectionV2 from '@/components/ui/HeroSectionV2'

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
      <div className="relative z-10 ">{showCursor && <Cursor />}</div>
      <HeroSectionV2 signedIn={signedIn} />

      {/* <div>
        <MainContentSection />
      </div> */}
    </main>
  )
}
