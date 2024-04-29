'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function NavBar() {
  return (
    <nav className="relative flex justify-center items-center h-20 border-b-2  text-white border-white bg-black bg-opacity-40 text-2xl">
      <ul className="flex items-center space-x-10 list-none">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 left-3 sm:top-2 sm:left-4"
        >
          <Image
            className="rounded-full w-[50px] sm:w-[60px]"
            src="/images/philo-logo.png"
            alt="Logo"
            width={60}
            height={60}
          />
        </motion.div>
        <motion.li className="hover:bg-white hover:bg-opacity-20 h-20 w-24 relative sm:right-16 flex items-center justify-center">
          <Link href="/">HOME</Link>
        </motion.li>
        <motion.li className="hover:bg-white hover:bg-opacity-20 h-20 w-24 relative sm:left-7 flex items-center justify-center">
          <Link href="/chat">CHAT</Link>
        </motion.li>
      </ul>
    </nav>
  )
}
