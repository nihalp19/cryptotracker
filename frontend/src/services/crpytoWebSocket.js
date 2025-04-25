import { updateAssetPrice } from '../store/slice/crpytoSlice';

class CryptoWebSocket {
  constructor(store) {
    this.store = store;
    this.interval = null;
  }

  connect() {
    console.log('WebSocket simulation connected');
    
    // Initialize interval to simulate real-time updates
    this.interval = setInterval(() => {
      const assets = this.store.getState().crypto.assets;
      
      // Randomly select an asset to update
      const randomIndex = Math.floor(Math.random() * assets.length);
      const asset = assets[randomIndex];
      
      // Generate random price change (between -2% and +2%)
      const priceChangePercent = (Math.random() * 4 - 2) / 100;
      const newPrice = asset.price * (1 + priceChangePercent);
      
      // Update percentages with small random changes
      const newPercentChange1h = asset.percentChange1h + (Math.random() * 0.4 - 0.2);
      const newPercentChange24h = asset.percentChange24h + (Math.random() * 0.6 - 0.3);
      const newPercentChange7d = asset.percentChange7d + (Math.random() * 0.8 - 0.4);
      
      // Update volume with small random changes (between -5% and +5%)
      const volumeChangePercent = (Math.random() * 10 - 5) / 100;
      const newVolume = asset.volume24h * (1 + volumeChangePercent);
      
      // Dispatch update action
      this.store.dispatch(updateAssetPrice({
        id: asset.id,
        price: parseFloat(newPrice.toFixed(2)),
        percentChange1h: parseFloat(newPercentChange1h.toFixed(2)),
        percentChange24h: parseFloat(newPercentChange24h.toFixed(2)),
        percentChange7d: parseFloat(newPercentChange7d.toFixed(2)),
        volume24h: Math.round(newVolume),
      }));
    }, 1500);
  }

  disconnect() {
    console.log('WebSocket simulation disconnected');
    clearInterval(this.interval);
  }
}

export default CryptoWebSocket;