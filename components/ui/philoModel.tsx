import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const PhiloModel = () => {
  const { scene } = useGLTF('/models/philo.glb')
  return (
    <Canvas style={{ width: '100%', height: '400px' }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 7.5]} intensity={0.8} />{' '}
      {/* Mimic sunlight */}
      <pointLight position={[-5, -10, -7.5]} intensity={0.5} />{' '}
      {/* Additional point light */}
      <OrbitControls />
      <primitive object={scene} scale={0.1} /> {/* Scale down to 10% */}
    </Canvas>
  )
}

export default PhiloModel
