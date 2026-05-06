import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)

  // Smooth spring for fluid cursor following
  const sx = useSpring(x, { stiffness: 120, damping: 22 })
  const sy = useSpring(y, { stiffness: 120, damping: 22 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      style={{ left: sx, top: sy, translateX: '-50%', translateY: '-50%' }}
      className="fixed pointer-events-none z-[200] w-64 h-64 rounded-full"
      aria-hidden
    >
      <div
        className="w-full h-full rounded-full blur-3xl animate-pulse-slow"
        style={{
          background: `radial-gradient(
            circle,
            rgba(134,90,255,0.12) 0%,
            rgba(90,255,115,0.06) 40%,
            rgba(255,255,255,0) 100%
          )`,
        }}
      />
    </motion.div>
  )
}