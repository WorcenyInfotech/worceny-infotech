import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

function ParticleField() {
  const ref = useRef()
  const count = 3000

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 22
      arr[i * 3 + 1] = (Math.random() - 0.5) * 22
      arr[i * 3 + 2] = (Math.random() - 0.5) * 22
    }
    return arr
  }, [])

  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.04
    ref.current.rotation.y = state.clock.elapsedTime * 0.06
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#2d4dca"
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function FloatingTorus() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.28
    ref.current.rotation.y = state.clock.elapsedTime * 0.18
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.35
  })
  return (
    <mesh ref={ref} position={[3.2, 0, -2]}>
      <torusGeometry args={[1.2, 0.28, 16, 60]} />
      <meshStandardMaterial color="var(--accent)" wireframe transparent opacity={0.22} />
    </mesh>
  )
}

function FloatingIcosahedron() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.38
    ref.current.rotation.z = state.clock.elapsedTime * 0.28
    ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.55) * 0.4
  })
  return (
    <mesh ref={ref} position={[-3.5, 0.5, -1]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="var(--accent)" wireframe transparent opacity={0.18} />
    </mesh>
  )
}

function FloatingOctahedron() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.5
    ref.current.rotation.x = state.clock.elapsedTime * 0.3
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.4 + 1) * 0.3
  })
  return (
    <mesh ref={ref} position={[0, -2.5, -3]}>
      <octahedronGeometry args={[0.9, 0]} />
      <meshStandardMaterial color="var(--accent)" wireframe transparent opacity={0.15} />
    </mesh>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]}   color="#000000" intensity={1.2} />
      <pointLight position={[-5, -5, -5]} color="#000000" intensity={0.6} />
      <ParticleField />
      <FloatingTorus />
      <FloatingIcosahedron />
      <FloatingOctahedron />
    </Canvas>
  )
}
