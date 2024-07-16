import React from 'react'
import { motion } from 'framer-motion'

interface CloudProps {
  delay: number
  duration: number
  scale: number
  top: string
  left: string
}

const Cloud: React.FC<CloudProps> = ({ delay, duration, scale, top, left }) => (
  <motion.path
    d="M0,60 a20,20 0 0,1 0,-40 a20,20 0 0,1 40,0 a20,20 0 0,1 40,0 a20,20 0 0,1 0,40 z"
    fill="rgba(255, 255, 255, 0.8)"
    initial={{ x: -100 }}
    animate={{ x: '100%' }}
    transition={{
      repeat: Infinity,
      repeatType: 'loop',
      duration,
      delay,
      ease: 'linear',
    }}
    style={{
      position: 'absolute',
      top,
      left,
      transform: `scale(${scale})`,
    }}
  />
)

const CloudWeatherBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <Cloud delay={3} duration={50} scale={1} top="10%" left="-20%" />
        <Cloud delay={12} duration={10} scale={0.7} top="30%" left="-10%" />
        <Cloud delay={20} duration={80} scale={1.2} top="50%" left="-30%" />
        <Cloud delay={35} duration={33} scale={0.8} top="70%" left="-15%" />
      </svg>

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>
    </div>
  )
}

export default CloudWeatherBackground
