import React, { useState, useEffect } from 'react'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [currentGreeting, setCurrentGreeting] = useState('')

  const greetings = [
    "Hi Friend! I'm Philo :)",
    'My Nephew Padma is sooo CUTE! <3',
    'Philo = Friendship :)',
    'Hello there!',
    'Greetings!',
    'Welcome!',
    'Nice to meet you!',
    'Philo says hi!',
    'Friendship awaits!',
  ]

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const changeGreeting = () => {
      const newGreeting =
        greetings[Math.floor(Math.random() * greetings.length)]
      setCurrentGreeting(newGreeting)
    }

    window.addEventListener('mousemove', updatePosition)
    const intervalId = setInterval(changeGreeting, 7000) // Change greeting every 3 seconds

    changeGreeting() // Set initial greeting

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div
      className="cursorbg relative w-full h-screen overflow-hidden"
      style={{ cursor: 'none' }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-2px, -2px)',
        }}
      >
        <div
          className="cursor relative px-4 py-3 text-sm whitespace-nowrap"
          style={{
            transition: 'all 0.3s ease-in-out',
            opacity: currentGreeting ? 1 : 0,
            background: `linear-gradient(135deg, #FFD580, #98FB98)`,
            clipPath:
              'polygon(0 0, 100% 0, 100% 100%, 15px 100%, 0 calc(100% - 15px))',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span
            style={{
              fontWeight: 'bold',
              color: 'white',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}
          >
            {currentGreeting}
          </span>
          <svg
            className="absolute"
            style={{ top: '-2px', left: '-2px', width: '16px', height: '16px' }}
            viewBox="0 0 16 16"
          >
            <path d="M0 0 L16 0 L0 16 Z" fill="url(#cursorGradient)" />
            <defs>
              <linearGradient
                id="cursorGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f56b13" />
                <stop offset="100%" stopColor="#f56b13" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Cursor
