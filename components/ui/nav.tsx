'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function NavBar() {
  return (
    <nav className="relative flex justify-center items-center pt-6 pb-6 border-b-2 border-orange-200 bg-customOrange text-white text-3xl">
      <ul className="flex items-center space-x-10 list-none">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 left-3 sm:top-3 sm:left-4"
        >
          <Image
            className="rounded-full w-[50px] sm:w-[60px]"
            src="/images/philo-logo.png"
            alt="Logo"
            width={60}
            height={60}
          />
        </motion.div>
        <motion.li className="hover:bg-white hover:bg-opacity-20 relative sm:right-16">
          <Link href="/">Home</Link>
        </motion.li>
        <motion.li className="hover:bg-white hover:bg-opacity-20 relative sm:left-7">
          <Link href="/chat">Chat</Link>
        </motion.li>
      </ul>
    </nav>
  )
}
