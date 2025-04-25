import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, RefreshCw } from 'lucide-react';

const Header = ({ onRefresh, isRefreshing }) => {
  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <TrendingUp className="text-blue-500 mr-3" size={28} />
          <h1 className="text-2xl font-bold text-white sm:text-3xl">CryptoDash</h1>
        </div>
        
        <motion.button
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
          onClick={onRefresh}
          whileTap={{ scale: 0.95 }}
          disabled={isRefreshing}
        >
          <motion.div
            animate={isRefreshing ? { rotate: 360 } : { rotate: 0 }}
            transition={isRefreshing ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
            className="mr-2"
          >
            <RefreshCw size={16} />
          </motion.div>
          {isRefreshing ? 'Refreshing...' : 'Refresh Data'}
        </motion.button>
      </div>
      
      <p className="text-gray-400">
        Live cryptocurrency prices, market cap, volume, and real-time updates
      </p>
    </motion.div>
  );
};

export default Header;