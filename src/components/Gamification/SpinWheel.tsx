import React, { useState } from 'react';
import { motion } from 'framer-motion';

const prizes = [
  {
    label: '20% Off',
    description: 'Get 20% off on your next purchase',
    color: '#3B82F6'
  },
  {
    label: 'Free Trial',
    description: '30-day free trial of premium features',
    color: '#8B5CF6'
  },
  {
    label: 'Consultation',
    description: '1-hour free consultation session',
    color: '#EC4899'
  },
  {
    label: '10% Off',
    description: '10% discount on annual plans',
    color: '#F59E0B'
  },
  {
    label: 'Free Month',
    description: 'One month of free service',
    color: '#10B981'
  },
  {
    label: 'Try Again',
    description: 'Better luck next time!',
    color: '#6366F1'
  }
];

const SpinWheel: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [prize, setPrize] = useState<typeof prizes[0] | null>(null);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setPrize(null);
    
    const randomRotations = Math.floor(Math.random() * 5) + 5;
    const randomDegree = Math.floor(Math.random() * 360);
    const totalRotation = randomRotations * 360 + randomDegree;
    
    setRotation(totalRotation);

    setTimeout(() => {
      const normalizedDegree = randomDegree % 360;
      const prizeIndex = Math.floor(normalizedDegree / (360 / prizes.length));
      setPrize(prizes[prizeIndex]);
      setIsSpinning(false);
    }, 5000);
  };

  return (
    <div className="relative w-96 mx-auto">
      <div className="relative">
        {/* Background decoration */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-75 blur-lg animate-pulse"></div>
        
        {/* Wheel container */}
        <div className="relative bg-white dark:bg-gray-800 rounded-full p-4">
          <motion.div
            className="w-80 h-80 rounded-full relative"
            style={{
              backgroundImage: `conic-gradient(
                ${prizes.map((prize, index) => 
                  `${prize.color} ${index * (360 / prizes.length)}deg ${(index + 1) * (360 / prizes.length)}deg`
                ).join(', ')}
              )`,
            }}
            animate={{ rotate: rotation }}
            transition={{ duration: 5, ease: "easeOut" }}
          >
            {prizes.map((prize, index) => (
              <div
                key={index}
                className="absolute w-full h-full flex items-center justify-center"
                style={{
                  transform: `rotate(${index * (360 / prizes.length) + (360 / prizes.length / 2)}deg)`,
                }}
              >
                <span
                  className="absolute text-white font-bold text-sm transform -translate-y-32 rotate-90"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                >
                  {prize.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Center pointer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-8">
            <div className="w-full h-full bg-white dark:bg-gray-700 shadow-lg clip-triangle"></div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={spinWheel}
          disabled={isSpinning}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSpinning ? "Spinning..." : "Spin to Win!"}
        </motion.button>

        {/* Prize display */}
        {prize && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Congratulations!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You won: <span className="font-bold">{prize.label}</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {prize.description}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SpinWheel;