import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { formatPercentage, getPercentageClass } from '../utils/formatter'

const PercentChange = ({ value }) => {
  const colorClass = getPercentageClass(value);
  
  // Determine icon based on value
  const Icon = value > 0 
    ? TrendingUp 
    : value < 0 
      ? TrendingDown 
      : Minus;

  return (
    <motion.div 
      className={`flex items-center ${colorClass} w-full justify-end md:justify-start`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="mr-1" size={16} />
      <span className="font-medium">{formatPercentage(value)}</span>
    </motion.div>
  );
};

export default PercentChange;