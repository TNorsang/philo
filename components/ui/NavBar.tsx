'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
// import Burger from '../svgs/Burger'
import { useState } from 'react'

export default function NavBar() {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

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

        <motion.li
          whileHover={{ scale: 1.1 }}
          className="hidden sm:block absolute right-[80px] top-[40px] text-[24px] font-bold text-white"
        >
          <Link href="/">HOME</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="hidden sm:block absolute right-[192px] top-[40px] text-[24px] font-bold text-white"
        >
          <Link href="/chat">CHAT</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="hidden sm:block absolute right-[296px] top-[40px] text-[24px] font-bold text-white"
        >
          <Link href="/signin">SIGN IN</Link>
        </motion.li>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-[24px] top-[44px]"
        >
          <button onClick={handleClick} className="sm:hidden">
            {show ? (
              <>
                <Link href="/signin">SIGN IN</Link>
                {' | '}
                <Link href="/chat">CHAT</Link> {' | '}{' '}
                <Link href="/">HOME</Link>
              </>
            ) : (
              // <Burger />
              'Test'
            )}
          </button>
        </motion.div>
      </ul>
    </nav>
  )
}
