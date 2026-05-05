import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef()
  const count = 3000

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
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
        color="#00ff88"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

function FloatingTorus() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.3
    ref.current.rotation.y = state.clock.elapsedTime * 0.2
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
  })
  return (
    <mesh ref={ref} position={[3, 0, -2]}>
      <torusGeometry args={[1.2, 0.3, 16, 60]} />
      <meshStandardMaterial
        color="#00ff88"
        wireframe
        transparent
        opacity={0.25}
      />
    </mesh>
  )
}

function FloatingIcosahedron() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.4
    ref.current.rotation.z = state.clock.elapsedTime * 0.3
    ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.6) * 0.4
  })
  return (
    <mesh ref={ref} position={[-3.5, 0.5, -1]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#00ccff"
        wireframe
        transparent
        opacity={0.2}
      />
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
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#00ff88" intensity={1} />
      <pointLight position={[-5, -5, -5]} color="#00ccff" intensity={0.5} />
      <ParticleField />
      <FloatingTorus />
      <FloatingIcosahedron />
    </Canvas>
  )
}
