import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const Stats = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Trusted by Businesses Worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            Our impact in numbers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCounter
            end={500}
            duration={2}
            label="Clients Served"
            prefix="+"
          />
          <AnimatedCounter
            end={99}
            duration={2}
            label="Uptime Performance"
            suffix="%"
          />
          <AnimatedCounter
            end={1000}
            duration={2}
            label="Projects Completed"
            prefix=">"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;