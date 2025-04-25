import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchCryptoSuccess, fetchCryptoFailure, startFetchCrypto } from './store/slice/crpytoSlice';
import { fetchCryptoData } from './api/cryptoApi';
import CryptoWebSocket from './services/crpytoWebSocket';
import Header from './components/Header';
import CryptoTable from './components/CryptoTable';

// Initialize WebSocket service
const webSocket = new CryptoWebSocket(store);

function App() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Function to fetch crypto data
  const fetchData = async () => {
    setIsRefreshing(true);
    store.dispatch(startFetchCrypto());
    
    try {
      const data = await fetchCryptoData();
      store.dispatch(fetchCryptoSuccess(data));
    } catch (error) {
      store.dispatch(fetchCryptoFailure(error.message));
    } finally {
      setIsRefreshing(false);
    }
  };

  // Initialize data and WebSocket connection
  useEffect(() => {
    // Load initial data from mock
    webSocket.connect();
    
    // Optional: Fetch real data
    // fetchData();
    
    // Cleanup WebSocket on unmount
    return () => {
      webSocket.disconnect();
    };
  }, []);

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <Header onRefresh={fetchData} isRefreshing={isRefreshing} />
          <CryptoTable />
          
          <div className="mt-6 text-center text-gray-500 text-sm">
            <p>Data refreshes automatically every few seconds. Click Refresh for latest data.</p>
            <p className="mt-1">© 2025 CryptoDash. Powered by CoinGecko API.</p>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;