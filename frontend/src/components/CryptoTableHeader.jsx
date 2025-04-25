import React from 'react';

const CryptoTableHeader = () => {
  return (
    <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-800 rounded-t-lg text-gray-300 text-sm font-medium">
      <div className="col-span-1">#</div>
      <div className="col-span-2">Name</div>
      <div className="col-span-1 text-right">Price</div>
      <div className="col-span-1 text-center">1h %</div>
      <div className="col-span-1 text-center">24h %</div>
      <div className="col-span-1 text-center">7d %</div>
      <div className="col-span-1 text-right">Market Cap</div>
      <div className="col-span-1 text-right">Volume (24h)</div>
      <div className="col-span-1 text-right">Circulating Supply</div>
      <div className="col-span-1 text-right">Max Supply</div>
      <div className="col-span-1 text-center">7d Chart</div>
    </div>
  );
};

export default CryptoTableHeader;