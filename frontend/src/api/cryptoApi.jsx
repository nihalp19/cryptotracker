import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchCryptoData = async () => {
  try {
    const response = await axios.get(`${API_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 5,
        page: 1,
        sparkline: false,
        price_change_percentage: '1h,24h,7d'
      }
    });
    
    return response.data.map(coin => ({
      id: coin.id,
      rank: coin.market_cap_rank,
      name: coin.name,
      symbol: coin.symbol.toUpperCase(),
      logo: coin.image,
      price: coin.current_price,
      previousPrice: coin.current_price,
      percentChange1h: coin.price_change_percentage_1h_in_currency || 0,
      percentChange24h: coin.price_change_percentage_24h_in_currency || 0,
      percentChange7d: coin.price_change_percentage_7d_in_currency || 0,
      marketCap: coin.market_cap,
      volume24h: coin.total_volume,
      circulatingSupply: coin.circulating_supply,
      maxSupply: coin.max_supply,
      chartData: getRandomChartSvg(coin.price_change_percentage_7d_in_currency || 0),
      priceChange: 'none'
    }));
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error;
  }
};

// Generate a random chart SVG based on the 7d trend
const getRandomChartSvg = (percentChange7d) => {
  const color = percentChange7d >= 0 ? '%2310B981' : '%23EF4444';
  
  let path = 'M0,';
  let y = 12.5;
  
  if (percentChange7d >= 0) {
    // Generate a generally upward trend
    for (let i = 0; i <= 100; i += 5) {
      const randomY = Math.max(0, Math.min(25, y + (Math.random() * 5) - 2));
      if (i > 50) y = Math.max(0, y - 0.5); // Trend upward in the second half
      path += ` ${i},${randomY}`;
    }
  } else {
    // Generate a generally downward trend
    for (let i = 0; i <= 100; i += 5) {
      const randomY = Math.max(0, Math.min(25, y + (Math.random() * 5) - 2));
      if (i > 50) y = Math.min(25, y + 0.5); // Trend downward in the second half
      path += ` ${i},${randomY}`;
    }
  }
  
  return `data:image/svg+xml,%3Csvg viewBox='0 0 100 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='${path}' fill='none' stroke='${color}' stroke-width='1.5'/%3E%3C/svg%3E`;
};