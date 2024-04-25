'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function NavBar() {
  return (
    <nav className="relative flex justify-center space-x-10 items-center pt-8 pb-8 border-b-2 border-white bg-customOrange text-white rounded-lg text-2xl ">
      <ul className="inline-flex space-x-11 items-center justify-center sm:space-x-32">
        <motion.li>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-4"
          >
            <Image
              className="rounded-full"
              src="/images/philo-logo.png"
              alt="Logo"
              width={60}
              height={60}
            />
          </motion.div>
        </motion.li>

        <motion.li className="hover:bg-white hover:bg-opacity-20 focus:bg-white focus:bg-opacity-20">
          <motion.div>
            <Link href="/">Home</Link>
          </motion.div>
        </motion.li>
        <li className="hover:bg-white hover:bg-opacity-20 focus:bg-white focus:bg-opacity-20">
          <Link href="/chat">Chat</Link>
        </li>
      </ul>
    </nav>
  )
}
