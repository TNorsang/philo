'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Burger from '../svgs/burger'
import { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function NavBar() {
  const { data: session, status } = useSession()

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
            className="absolute top-[34px] left-[32px]"
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
        <motion.div className="absolute left-[84px] top-[36px] text-[32px] font-bold text-white">
          Philo
        </motion.div>

        <motion.li
          whileHover={{ scale: 1.1 }}
          className="hidden sm:block absolute right-[80px] top-[44px] text-[19px] font-bold text-white"
        >
          <Link href="/">HOME</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="hidden sm:block absolute right-[189px] top-[44px] text-[19px] font-bold text-white"
        >
          <Link href="/chat">CHAT</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="hidden sm:block absolute right-[286px] top-[44px] text-[19px] font-bold text-white"
        >
          {session ? (
            <h1>
              Welcome{' '}
              {session.user.name?.slice(0, session.user.name.indexOf(' '))}!{' '}
            </h1>
          ) : (
            <Link href="/signin">SIGN IN</Link>
          )}
        </motion.li>
        <motion.div className="absolute right-[24px] top-[44px] ">
          <div onClick={handleClick} className="sm:hidden">
            {show ? (
              <div className="flex flex-col justify-center items-end">
                {session ? (
                  <h1>Welcome {session.user.name?.split(' ')[0]}!</h1>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link href="/signin">SIGN IN</Link>
                  </motion.div>
                )}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href="/chat">CHAT</Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href="/">HOME</Link>
                </motion.div>
              </div>
            ) : (
              <Burger />
            )}
          </div>
        </motion.div>
      </ul>
    </nav>
  )
}
