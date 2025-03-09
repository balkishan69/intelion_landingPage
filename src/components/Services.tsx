import React from 'react';
import { CreditCard, Shield, Code, Database, BarChart as ChartBar, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Payment Solutions',
    description: 'Secure and efficient payment processing systems with multi-currency support',
    icon: CreditCard,
  },
  {
    title: 'Fraud Prevention',
    description: 'Advanced AI-powered fraud detection and prevention systems',
    icon: Shield,
  },
  {
    title: 'Custom FinTech',
    description: 'Tailored financial software solutions for your specific needs',
    icon: Code,
  },
  {
    title: 'Data Analytics',
    description: 'Real-time financial data analysis and reporting tools',
    icon: Database,
  },
  {
    title: 'Trading Platforms',
    description: 'High-performance trading systems with real-time market data',
    icon: ChartBar,
  },
  {
    title: 'Digital Banking',
    description: 'Modern digital banking solutions for the next generation',
    icon: Users,
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div id="services" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our FinTech Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Comprehensive financial technology solutions to power your business
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="relative group bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 ring-4 ring-white dark:ring-gray-700">
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {service.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="h-1 flex-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;