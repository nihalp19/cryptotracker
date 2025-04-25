# CryptoDash - Real-time Cryptocurrency Tracker

A modern, responsive cryptocurrency dashboard built with React and Redux Toolkit that provides real-time price updates and market data for top cryptocurrencies.

![CryptoDash Screenshot](https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Features

- 🚀 Real-time price updates
- 📱 Responsive design (mobile-first)
- 📊 Comprehensive market data
- 💫 Smooth animations
- 📈 Visual price trends
- 🎨 Modern, dark-themed UI

## Tech Stack

- React
- Redux Toolkit
- Framer Motion
- Tailwind CSS
- CoinGecko API

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/nihalp19/cryptotracker
cd crypto-dash
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the provided local URL

## Project Structure

```
src/
├── api/           # API integration
├── components/    # React components
├── data/         # Mock data
├── services/     # WebSocket simulation
├── store/        # Redux store setup
├── utils/        # Helper functions
└── App.tsx       # Main application component
```

## Components

- **Header**: App title and refresh button
- **CryptoTable**: Main data display component
- **CryptoRow**: Individual cryptocurrency row/card
- **PercentChange**: Reusable percentage display

## State Management

The application uses Redux Toolkit for state management with the following features:

- Centralized store for cryptocurrency data
- Real-time price update actions
- Loading and error states
- Optimized re-renders with selectors

## Real-time Updates

The application simulates WebSocket connections to provide real-time updates:

- Price changes every 1.5 seconds
- Random selection of assets to update
- Smooth animations for price changes
- Visual indicators for price movements

## API Integration

CoinGecko API integration is available for fetching real market data:

- Top 5 cryptocurrencies by market cap
- Comprehensive market data
- Price change percentages
- Volume and supply information

## Responsive Design

The UI adapts seamlessly to different screen sizes:

- Desktop: Full table view with all data columns
- Mobile: Card-based layout with essential information
- Tablet: Optimized hybrid layout

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- Data provided by [CoinGecko API](https://www.coingecko.com/en/api)
- Icons by [Lucide React](https://lucide.dev)
- UI inspiration from leading crypto tracking platforms
