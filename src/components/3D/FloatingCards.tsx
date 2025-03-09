import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Environment, Float } from '@react-three/drei';

function Card({ position, rotation, scale, color }: any) {
  const mesh = useRef<THREE.Mesh>(null);
  
  const springs = useSpring({
    scale: scale,
    config: { mass: 1, tension: 170, friction: 26 }
  });

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.1;
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <animated.mesh
        ref={mesh}
        position={position}
        rotation={rotation}
        scale={springs.scale}
      >
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
        />
      </animated.mesh>
    </Float>
  );
}

const FloatingCards: React.FC = () => {
  return (
    <div className="h-[400px] w-full bg-gradient-to-b from-gray-900 to-gray-800">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Card
          position={[-4, 2, 0]}
          rotation={[0, 0.5, 0.2]}
          scale={1}
          color="#3B82F6"
        />
        <Card
          position={[4, -1, -2]}
          rotation={[0.2, -0.5, 0]}
          scale={1.2}
          color="#8B5CF6"
        />
        <Card
          position={[0, -2, 1]}
          rotation={[-0.2, 0.3, 0.1]}
          scale={0.8}
          color="#EC4899"
        />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default FloatingCards;