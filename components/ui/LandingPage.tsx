import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Cloud, Heart } from 'lucide-react'

const FriendlyLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-200 flex flex-col items-center justify-center p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <Sun className="text-yellow-400 w-24 h-24 mb-4 mx-auto" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Meet Your Forever Friend
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Discover companionship, joy, and unconditional love
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <img
          src="/api/placeholder/300/300"
          alt="Friendly companion"
          className="rounded-full border-4 border-white shadow-lg"
        />
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-sky-500 font-bold py-3 px-8 rounded-full text-xl shadow-lg hover:bg-sky-100 transition duration-300"
      >
        Get Started
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 flex items-center justify-center space-x-8"
      >
        <div className="flex flex-col items-center">
          <Heart className="text-pink-500 w-12 h-12 mb-2" />
          <p className="text-white font-semibold">Loving</p>
        </div>
        <div className="flex flex-col items-center">
          <Cloud className="text-white w-12 h-12 mb-2" />
          <p className="text-white font-semibold">Comforting</p>
        </div>
        <div className="flex flex-col items-center">
          <Sun className="text-yellow-400 w-12 h-12 mb-2" />
          <p className="text-white font-semibold">Joyful</p>
        </div>
      </motion.div>
    </div>
  )
}

export default FriendlyLandingPage
