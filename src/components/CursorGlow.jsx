import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const sx = useSpring(x, { stiffness: 100, damping: 18 })
  const sy = useSpring(y, { stiffness: 100, damping: 18 })

  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      style={{ left: sx, top: sy, translateX: '-50%', translateY: '-50%' }}
      className="fixed pointer-events-none z-[200] w-72 h-72 rounded-full"
      aria-hidden
    >
      <div
        className="w-full h-full rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(134,90,255,0.07) 0%, rgba(90,255,115,0.03) 60%, transparent 100%)' }}
      />
    </motion.div>
  )
}
