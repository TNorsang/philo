'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [showChat, setShowChat] = useState(false)

  return (
    <main className="flex flex-col h-screen items-center justify-center bg-customBlue">
      <h1>Hello</h1>
      <Link className="bg-blue-500" href="/chat">
        Go To Chat
      </Link>
    </main>
  )
}
