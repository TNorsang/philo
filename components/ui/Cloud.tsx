import React, { useEffect } from 'react'
import { motion, useAnimation, AnimationControls } from 'framer-motion'

interface CloudProps {
  delay: number
  duration: number
  scale: number
  top: string
  left: string
}

const Cloud: React.FC<CloudProps> = React.memo(
  ({ delay, duration, scale, top, left }) => {
    const controls: AnimationControls = useAnimation()

    useEffect(() => {
      // console.log('component mounted')
      const animateCloud = async () => {
        await new Promise((resolve) => requestAnimationFrame(resolve))
        while (true) {
          await controls.start({
            x: '100%',
            transition: { duration, ease: 'linear' },
          })
          await controls.set({ x: '-100%' })
        }
      }

      animateCloud()

      // Clean up function to stop animation when component unmounts
      return () => {
        // console.log('component unmounted')
        controls.stop() // Stop any ongoing animations
      }
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
          scale,
        }}
      />
    )
  },
)

const CloudWeatherBackground: React.FC = React.memo(() => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <Cloud delay={0} duration={20} scale={0.5} top="10%" left="0%" />
        <Cloud delay={2} duration={22} scale={0.9} top="10%" left="0%" />
        <Cloud delay={20} duration={33} scale={0.44} top="70%" left="0%" />
        <Cloud delay={45} duration={35} scale={0.21} top="30%" left="0%" />
        <Cloud delay={57} duration={50} scale={0.3} top="30%" left="0%" />
        <Cloud delay={58} duration={53} scale={0.12} top="70%" left="0%" />
        <Cloud delay={60} duration={62} scale={0.11} top="20%" left="0%" />
        <Cloud delay={65} duration={64} scale={0.6} top="40%" left="0%" />
        <Cloud delay={72} duration={75} scale={0.32} top="50%" left="0%" />
        <Cloud delay={77} duration={80} scale={0.1} top="50%" left="0%" />
        <Cloud delay={94} duration={100} scale={0.22} top="20%" left="0%" />
        <Cloud delay={100} duration={21} scale={0.15} top="40%" left="0%" />
      </svg>

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>
    </div>
  )
})

export default CloudWeatherBackground
