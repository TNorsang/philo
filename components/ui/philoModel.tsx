'cient side'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import dynamic from 'next/dynamic'

const PhiloModel = () => {
  // const My3DModel = dynamic(() => import('./PhiloModel'), {
  //   ssr: false,
  // }) // Client-side rendering
  const { scene } = useGLTF('/models/baymax.glb')
  return (
    <Canvas className="w-2 h-2">
      <ambientLight intensity={0.5} /> {/* Low-level ambient light */}
      <directionalLight position={[5, 10, 7.5]} intensity={0.9} />
      {/* Mimic sunlight */}
      <pointLight position={[-5, -10, -7.5]} intensity={0.9} />
      {/* Additional point light */}
      <OrbitControls />
      <primitive object={scene} scale={0.18} />
    </Canvas>
  )
}

export default PhiloModel
