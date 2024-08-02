'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection({ signedIn }: { signedIn: boolean }) {
  return (
    <div className="flex items-center justify-center h-screen  overflow-hidden">
      <motion.div className="relative flex items-center justify-center top-[-30px]">
        <motion.div className="z-20 relative left-[12px]">
          <h1 className="text-white font-semibold text-[30px] w-[150px] sm:text-[60px] sm:w-[300px] lg:text-[88px] lg:w-[450px]">
            Meet Your Forever Friend
          </h1>
        </motion.div>
        <motion.div className="relative left-[-15px] top-[68px] right-[96px] flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3.5 }}
          >
            <Image
              className="w-[140px] h-[160px] sm:w-[216px] sm:h-[250px] lg:w-[313px] lg:h-[344px] "
              alt="Bay Max"
              src="/images/bmax.png"
              width={300}
              height={111}
            />
          </motion.div>
          <Link className="z-50" href={signedIn ? '/chat' : '/signup'}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.02 }}
              className="text-[13px] w-[92px] h-[40px] sm:text-[20px] sm:w-[140px] sm:h-[52px] lg:text-[24px] lg:w-[200px] lg:h-[60px]  top-[0px] bg-gradient-to-b from-white to-gray-300 flex justify-center items-center  font-semibold text-customFontOrange relative"
            >
              <button>Get Started</button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
