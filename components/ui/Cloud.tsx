import React, { useEffect } from 'react'
import { motion, useAnimation, AnimationControls } from 'framer-motion'

interface CloudProps {
  delay: number
  duration: number
  scale: number
  top: string
  left: string
}

const Cloud: React.FC<CloudProps> = ({ delay, duration, scale, top, left }) => {
  const controls: AnimationControls = useAnimation()

  useEffect(() => {
    const animateCloud = async () => {
      while (true) {
        const newDuration = duration * (Math.random() * 0.5 + 0.75) // 75% to 125% of original duration
        await controls.start({
          x: '100%',
          transition: { duration: newDuration, ease: 'linear' },
        })
        await controls.set({ x: '-100%' })
      }
    }

    animateCloud()
  }, [controls, duration])

  return (
    <motion.path
      d="M0,60 a20,20 0 0,1 0,-40 a20,20 0 0,1 40,0 a20,20 0 0,1 40,0 a20,20 0 0,1 0,40 z"
      fill="rgba(255, 255, 255, 0.8)"
      initial={{ x: '-100%' }}
      animate={controls}
      style={{
        position: 'absolute',
        top,
        left,
        transform: `scale(${scale})`,
      }}
    />
  )
}

const CloudWeatherBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <Cloud delay={0} duration={20} scale={0.15} top="10%" left="0%" />
        <Cloud delay={10} duration={50} scale={0.1} top="30%" left="0%" />
        <Cloud delay={20} duration={80} scale={0.2} top="50%" left="0%" />
        <Cloud delay={35} duration={33} scale={0.12} top="70%" left="0%" />
        <Cloud delay={60} duration={100} scale={0.13} top="20%" left="0%" />
        <Cloud delay={100} duration={210} scale={0.17} top="40%" left="0%" />
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
