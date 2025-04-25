import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { selectAllAssets, selectLoading, selectError } from '../store/slice/crpytoSlice'
import CryptoTableHeader from './CryptoTableHeader';
import CryptoRow from './CryptoRow';
import { RefreshCw, AlertTriangle } from 'lucide-react';

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (loading) {
    return (
      <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center min-h-[300px]">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-4"
        >
          <RefreshCw size={32} className="text-blue-500" />
        </motion.div>
        <p className="text-gray-300">Loading crypto data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center min-h-[300px]">
        <AlertTriangle size={32} className="text-red-500 mb-4" />
        <p className="text-gray-300 mb-2">Error loading data</p>
        <p className="text-gray-400 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="bg-gray-900 rounded-lg overflow-hidden shadow-xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <CryptoTableHeader />
      
      <div className="divide-y divide-gray-700">
        {assets.map(asset => (
          <motion.div key={asset.id} variants={itemVariants}>
            <CryptoRow asset={asset} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CryptoTable;