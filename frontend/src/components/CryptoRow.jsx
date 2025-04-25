import React from 'react';
import { motion } from 'framer-motion';
import PercentChange from './PercentChange';
import { formatCurrency, formatLargeNumber } from '../utils/formatter';

const CryptoRow = ({ asset }) => {
  const priceVariants = {
    increase: { 
      backgroundColor: ['rgba(16, 185, 129, 0.2)', 'rgba(16, 185, 129, 0)'],
      transition: { duration: 1 }
    },
    decrease: { 
      backgroundColor: ['rgba(239, 68, 68, 0.2)', 'rgba(239, 68, 68, 0)'],
      transition: { duration: 1 }
    },
    none: {}
  };

  // Mobile card view
  const MobileView = () => (
    <motion.div 
      className="md:hidden bg-gray-800 p-4 rounded-lg mb-3"
      variants={priceVariants}
      animate={asset.priceChange}
    >
      <div className="flex items-center mb-3">
        <div className="mr-3 flex-shrink-0">
          <img src={asset.logo} alt={asset.name} className="w-10 h-10" />
        </div>
        <div>
          <div className="flex items-center">
            <span className="text-white font-semibold mr-2">{asset.name}</span>
            <span className="text-gray-400 text-sm">{asset.symbol}</span>
          </div>
          <div className="text-xs text-gray-500">Rank #{asset.rank}</div>
        </div>
        <div className="ml-auto">
          <div className="text-white font-bold text-right">
            {formatCurrency(asset.price)}
          </div>
          <div className="flex justify-end">
            <PercentChange value={asset.percentChange24h} />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-3 text-sm">
        <div>
          <div className="text-gray-400">1h %</div>
          <PercentChange value={asset.percentChange1h} />
        </div>
        <div>
          <div className="text-gray-400">24h %</div>
          <PercentChange value={asset.percentChange24h} />
        </div>
        <div>
          <div className="text-gray-400">7d %</div>
          <PercentChange value={asset.percentChange7d} />
        </div>
        <div>
          <div className="text-gray-400">Market Cap</div>
          <div className="text-white">${formatLargeNumber(asset.marketCap)}</div>
        </div>
        <div>
          <div className="text-gray-400">Volume (24h)</div>
          <div className="text-white">${formatLargeNumber(asset.volume24h)}</div>
        </div>
        <div>
          <div className="text-gray-400">Supply</div>
          <div className="text-white">{formatLargeNumber(asset.circulatingSupply)}</div>
        </div>
      </div>
      
      <div className="mt-3">
        <div className="text-gray-400 text-sm mb-1">7d Chart</div>
        <img src={asset.chartData} alt="7d chart" className="w-full h-10" />
      </div>
    </motion.div>
  );

  // Desktop table view
  const DesktopView = () => (
    <motion.div 
      className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-700 items-center"
      variants={priceVariants}
      animate={asset.priceChange}
    >
      <div className="col-span-1 text-gray-400">{asset.rank}</div>
      
      <div className="col-span-2 flex items-center">
        <img src={asset.logo} alt={asset.name} className="w-6 h-6 mr-2" />
        <div>
          <div className="text-white font-medium">{asset.name}</div>
          <div className="text-gray-400 text-xs">{asset.symbol}</div>
        </div>
      </div>
      
      <motion.div 
        className="col-span-1 text-right text-white font-medium"
        initial={false}
        animate={{ 
          scale: asset.priceChange !== 'none' ? [1.05, 1] : 1,
          transition: { duration: 0.3 }
        }}
      >
        {formatCurrency(asset.price)}
      </motion.div>
      
      <div className="col-span-1 text-center">
        <PercentChange value={asset.percentChange1h} />
      </div>
      
      <div className="col-span-1 text-center">
        <PercentChange value={asset.percentChange24h} />
      </div>
      
      <div className="col-span-1 text-center">
        <PercentChange value={asset.percentChange7d} />
      </div>
      
      <div className="col-span-1 text-right text-gray-300">
        ${formatLargeNumber(asset.marketCap)}
      </div>
      
      <div className="col-span-1 text-right text-gray-300">
        ${formatLargeNumber(asset.volume24h)}
      </div>
      
      <div className="col-span-1 text-right text-gray-300">
        {formatLargeNumber(asset.circulatingSupply)}
      </div>
      
      <div className="col-span-1 text-right text-gray-300">
        {asset.maxSupply ? formatLargeNumber(asset.maxSupply) : 'Unlimited'}
      </div>
      
      <div className="col-span-1 flex justify-center">
        <img src={asset.chartData} alt="7d chart" className="h-8 w-full" />
      </div>
    </motion.div>
  );

  return (
    <>
      <MobileView />
      <DesktopView />
    </>
  );
};

export default CryptoRow;