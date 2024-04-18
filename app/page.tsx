'use client'

import Chat from '@/components/chat'
import Image from 'next/image'
import Robot from '@/components/ui/robot'
import React, { useState } from 'react'

export default function Home() {
  const [showChat, setShowChat] = useState(false)
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <div>
        <Robot />
      </div>
      <Chat />
    </main>
  )
}
