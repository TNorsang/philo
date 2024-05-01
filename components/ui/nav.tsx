'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Burger from '../svgs/burger'

export default function NavBar() {
  return (
    <nav className="flex text-white">
      <ul className="list-none">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-[32] left-[24] sm:top-2 sm:left-4"
          >
            <Image
              className="rounded-full"
              src="/images/philo-logo.png"
              alt="Logo"
              width={48}
              height={48}
            />
          </motion.div>
        </Link>
        <motion.div className="absolute left-[80] top-[32] text-[32px] font-bold text-white">
          Philo
        </motion.div>

        <motion.li className="hidden hover:bg-white hover:bg-opacity-20 h-20 w-24 relative sm:right-16 flex items-center justify-center">
          <Link href="/">HOME</Link>
        </motion.li>
        <motion.li className="hidden hover:bg-white hover:bg-opacity-20 h-20 w-24 relative sm:left-7 flex items-center justify-center">
          <Link href="/chat">CHAT</Link>
        </motion.li>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-[24] top-[44]"
        >
          <Burger />
        </motion.div>
      </ul>
    </nav>
  )
}
