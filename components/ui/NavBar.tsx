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
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-[18px] left-[14px] sm:top-[34px] sm:left-[32px]"
        >
          <Image
            className="rounded-full"
            src="/images/philo-logo.png"
            alt="Logo"
            width={48}
            height={48}
          />
        </motion.div>
        <motion.div className="absolute left-[64px] top-[18px] text-[32px] sm:left-[84px] sm:top-[36px] sm:text-[32px] font-bold text-white">
          Philo
        </motion.div>
      </Link>

      <ul className="list-none absolute right-0 sm:right-4 sm:space-x-4 md:mr-[20px] top-[44px] text-[19px] font-bold text-white flex space-x-8">
        <motion.li whileHover={{ scale: 1.1 }} className="hidden sm:block ">
          <Link href="/chat">CHAT</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} className="hidden sm:block ">
          {session && (
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button onClick={() => signOut({ callbackUrl: '/' })}>
                {' '}
                SIGN OUT
              </button>
            </motion.li>
          )}
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} className="hidden sm:block">
          {session ? (
            <h1>
              WELCOME{' '}
              {session.user.name
                ?.slice(0, session.user.name.indexOf(' '))
                .toUpperCase()}
              !{' '}
            </h1>
          ) : (
            // <Link href="/signin">SIGN IN</Link>
            <button
              onClick={(e) => {
                e.preventDefault()
                signIn('provider', { callbackUrl: '/' })
              }}
            >
              {' '}
              SIGN IN
            </button>
          )}
        </motion.li>

        {/* Hidden Nav Burger */}
        <motion.div className="absolute right-[12px] top-[-16px]">
          <div onClick={handleClick} className="sm:hidden">
            {show ? (
              <div className="flex flex-col">
                {session ? (
                  <h1>WELCOME {session.user.name?.split(' ')[0]}!</h1>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      signIn('provider', { callbackUrl: '/' })
                    }}
                  >
                    {' '}
                    SIGN IN
                  </button>
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
                {session && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <button onClick={() => signOut({ callbackUrl: '/' })}>
                      {' '}
                      SIGN OUT
                    </button>
                  </motion.div>
                )}
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
