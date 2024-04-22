'use client'

import Chat from '@/components/chat'
import Robot from '@/components/ui/robot'
import React, { useState } from 'react'

export default function Home() {
  const [showChat, setShowChat] = useState(false)

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      {!showChat ? (
        <div onClick={() => setShowChat(true)}>
          <Robot />
        </div>
      ) : (
        <Chat />
      )}
    </main>
  )
}
