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
            className="absolute top-[32px] left-[24px]"
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
        <motion.div className="absolute left-[80px] top-[32px] text-[32px] font-bold text-white">
          Philo
        </motion.div>

        <motion.li className="hidden">
          <Link href="/">HOME</Link>
        </motion.li>
        <motion.li className="hidden">
          <Link href="/chat">CHAT</Link>
        </motion.li>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-[24px] top-[44px]"
        >
          <Burger />
        </motion.div>
      </ul>
    </nav>
  )
}
