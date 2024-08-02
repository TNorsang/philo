'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection({ signedIn }: { signedIn: boolean }) {
  return (
    <div className="flex items-center justify-center h-screen relative overflow-hidden">
      <motion.div className="flex items-center">
        <motion.div className="z-20">
          <h1 className="text-white font-semibold text-[40px] w-[200px] sm:text-[60px] sm:w-[300px] md:text-[88px] md:w-[450px] text-center">
            Meet Your Forever Friend
          </h1>
        </motion.div>
        <motion.div className="flex flex-col items-center mt-5">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3.5 }}
          >
            <Image
              className="md:w-[313px] md:h-[344px] sm:w-[190px] sm:h-[212px]"
              alt="Bay Max"
              src="/images/bmax.png"
              width={172}
              height={189}
            />
          </motion.div>
          <Link className="z-50" href={signedIn ? '/chat' : '/signup'}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.02 }}
              className="bg-gradient-to-b from-white to-gray-300 w-[170px] h-[60px] flex justify-center items-center mt-5 text-[20px] font-semibold text-customFontOrange"
            >
              <button>Get Started</button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
