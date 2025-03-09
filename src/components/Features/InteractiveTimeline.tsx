import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineEvents = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Intelion was established with a vision to transform digital landscapes.',
  },
  {
    year: '2021',
    title: 'Global Expansion',
    description: 'Expanded operations to 10+ countries with 100+ enterprise clients.',
  },
  {
    year: '2022',
    title: 'AI Integration',
    description: 'Launched AI-powered solutions for predictive analytics and automation.',
  },
  {
    year: '2023',
    title: 'Cloud Innovation',
    description: 'Pioneered new cloud security solutions for enterprise clients.',
  },
  {
    year: '2024',
    title: 'Industry Leadership',
    description: 'Recognized as industry leader in IT solutions and innovation.',
  },
];

const InteractiveTimeline: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Journey
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            Milestones that define our growth and innovation
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-900" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center justify-${
                index % 2 === 0 ? 'end' : 'start'
              } mb-8`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                }`}
              >
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                  <span className="text-blue-600 font-bold text-xl">
                    {event.year}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {event.description}
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTimeline;