import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function Model() {
  const mesh = useRef<THREE.Mesh>(null);
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <group ref={group}>
        <mesh ref={mesh}>
          <octahedronGeometry args={[2, 0]} />
          <meshStandardMaterial
            color="#4299e1"
            metalness={0.7}
            roughness={0.3}
            wireframe={true}
          />
        </mesh>
        <mesh>
          <torusGeometry args={[3, 0.2, 16, 100]} />
          <meshStandardMaterial
            color="#4299e1"
            metalness={0.7}
            roughness={0.3}
            opacity={0.5}
            transparent
          />
        </mesh>
      </group>
    </Float>
  );
}

const ProductShowcase: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-[600px] w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Model />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
        <Environment preset="city" />
      </Canvas>
    </motion.div>
  );
};

export default ProductShowcase;