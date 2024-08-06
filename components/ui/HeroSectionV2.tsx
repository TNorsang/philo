'use client'

import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn } from 'next-auth/react'
import HeroBG from '../svgs/HeroBG'
import OneCloud from '../svgs/OneCloud'

export default function HeroSectionV2({ signedIn }: { signedIn: boolean }) {
  const { data: session } = useSession()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth) * 2 - 1
      const y = (clientY / innerHeight) * 2 - 1
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    mouseX.set(mousePosition.x * 50)
    mouseY.set(mousePosition.y * 50)
  }, [mousePosition, mouseX, mouseY])

  const titleY = useTransform(springY, [-50, 50], [-20, 20])
  const titleX = useTransform(springX, [-50, 50], [-20, 20])

  const subtitleY = useTransform(springY, [-50, 50], [-10, 10])
  const subtitleX = useTransform(springX, [-50, 50], [-10, 10])

  const buttonY = useTransform(springY, [-50, 50], [-5, 5])
  const buttonX = useTransform(springX, [-50, 50], [-5, 5])

  const cloudX = useTransform(springX, [-50, 50], [-10, 10])
  const cloudY = useTransform(springY, [-50, 50], [-5, 5])

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center perspective-1000">
      <div className="absolute inset-0 w-full h-full">
        <HeroBG className="w-full h-full object-cover" />
      </div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 5 }}
        style={{
          x: cloudX,
          y: cloudY,
        }}
      >
        <OneCloud className="w-[50%] relative left-[10%] top-[-20%] h-auto max-w-3xl opacity-70" />
        <OneCloud className="w-[50%] relative left-[10%] top-[20%] h-auto max-w-3xl opacity-70" />
        <OneCloud className="w-[90%] relative right-[10%] top-[10%] h-auto max-w-3xl opacity-85" />
        <OneCloud className="w-[90%] relative right-[10%] top-[50%] h-auto max-w-3xl opacity-85" />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 8 }}
        style={{
          x: cloudX,
          y: cloudY,
        }}
      >
        <OneCloud className="w-[90%] relative top-[-20%] h-auto max-w-3xl opacity-36" />
        <OneCloud className="w-[90%] relative left-[10%] top-[50%] h-auto max-w-3xl opacity-85" />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 11 }}
        style={{
          x: cloudX,
          y: cloudY,
        }}
      >
        <OneCloud className="w-[90%] relative right-[30%] top-[35%] h-auto max-w-3xl opacity-85" />
        <OneCloud className="w-[90%] relative left-[5%] top-[10%] h-auto max-w-3xl opacity-85" />
      </motion.div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          className="mb-8"
          style={{
            rotateX: useTransform(springY, [-50, 50], [5, -5]),
            rotateY: useTransform(springX, [-50, 50], [-5, 5]),
          }}
        >
          <motion.h1
            className="text-white font-semibold text-[54px] sm:text-[80px] lg:text-[88px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1 }}
            style={{
              y: titleY,
              x: titleX,
            }}
          >
            You Belong
          </motion.h1>
          <motion.h2
            className="text-white font-thin text-[34px] sm:text-[45px] lg:text-[48px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 3 }}
            style={{
              y: subtitleY,
              x: subtitleX,
            }}
          >
            Artificial Emotion Platform
          </motion.h2>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.4, delay: 6 }}
          style={{
            y: buttonY,
            x: buttonX,
            rotateX: useTransform(springY, [-50, 50], [2, -2]),
            rotateY: useTransform(springX, [-50, 50], [-2, 2]),
          }}
        >
          <Link className="mt-8" href={signedIn ? '/chat' : '/signup'}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-[20px] w-auto h-auto p-3 sm:text-[24px] sm:w-auto sm:h-auto sm:p-3 lg:w-auto lg:h-auto lg:p-3 border-2 border-white flex justify-center items-center font-semibold text-white"
            >
              {session ? (
                <Link href="/chat">Hi {session.user.name?.split(' ')[0]}!</Link>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    signIn('provider', { callbackUrl: '/' })
                  }}
                >
                  Imagine True Companion
                </button>
              )}
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
