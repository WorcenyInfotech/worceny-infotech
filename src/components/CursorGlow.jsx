import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 120, damping: 18 })
  const springY = useSpring(y, { stiffness: 120, damping: 18 })

  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      style={{ left: springX, top: springY, translateX: '-50%', translateY: '-50%' }}
      className="fixed pointer-events-none z-[200] w-64 h-64 rounded-full"
      aria-hidden
    >
      <div className="w-full h-full rounded-full bg-[#00ff88]/5 blur-3xl" />
    </motion.div>
  )
}
