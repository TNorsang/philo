'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useSession, signIn } from 'next-auth/react'

// pages/index.tsx
import HeroBG from '../svgs/HeroBG'

export default function HeroSectionV2({ signedIn }: { signedIn: boolean }) {
  const { data: session } = useSession()

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* SVG Background */}
      <div className="absolute inset-0 w-full h-full">
        <HeroBG className="w-full h-full object-cover" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div className="mb-8">
          <motion.h1
            className="text-white font-semibold text-[30px] sm:text-[60px] lg:text-[88px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            You Belong
          </motion.h1>
          <motion.h2 className="text-white font-thin text-[48px] sm:text-[60px] lg:text-[48px] ">
            Artificial Emotion Platform
          </motion.h2>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Link className="mt-8" href={signedIn ? '/chat' : '/signup'}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-[13px] w-auto h-[40px] sm:text-[20px] sm:w-auto sm:h-[52px] lg:text-[24px] lg:w-auto lg:h-auto lg:p-3 border-2 border-white flex justify-center items-center font-semibold text-white"
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
                  Imagine Companion
                </button>
              )}
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
