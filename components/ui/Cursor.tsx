import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [currentGreeting, setCurrentGreeting] = useState('')

  const greetings = [
    "Hi Friend! I'm Philo :)",
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
    const intervalId = setInterval(changeGreeting, 7000) // Change greeting every 7 seconds

    changeGreeting() // Set initial greeting

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      clearInterval(intervalId)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-50"
      style={{ cursor: 'none' }}
    >
      <motion.div
        className="absolute"
        style={{
          left: position.x,
          top: position.y,
          x: '1%',
          y: '1%',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <motion.div
          className="cursor relative px-4 py-3 text-sm whitespace-nowrap"
          style={{
            opacity: currentGreeting ? 1 : 0,
            background: `linear-gradient(135deg, #FFD580, #98FB98)`,
            clipPath:
              'polygon(0 0, 100% 0, 100% 100%, 15px 100%, 0 calc(100% - 15px))',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: currentGreeting ? 1 : 0, scale: 1 }}
          transition={{ duration: 0.3 }}
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
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Cursor
