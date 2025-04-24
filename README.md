# Real-Time Crypto Price Tracker

## Overview
This is a React + Redux Toolkit application that tracks real-time cryptocurrency prices with simulated WebSocket updates. The app displays a responsive table of 5 cryptocurrencies with live price and percentage changes.

## Features
- Displays 5 assets: Bitcoin, Ethereum, Tether, Cardano, Ripple
- Responsive table with color-coded percentage changes
- Simulated real-time updates using setInterval
- State management with Redux Toolkit (createSlice, configureStore)
- Components: CryptoTable, CryptoRow, Chart

## Tech Stack
- React
- Redux Toolkit
- CSS

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd crypto-price-tracker
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   npm start
   ```

## Architecture Overview

- **Components**:
  - `CryptoTable`: Displays the table and handles simulated updates.
  - `CryptoRow`: Renders each cryptocurrency row with color-coded data.
  - `Chart`: Displays the 7-day static chart image.

- **Redux Store**:
  - `assetsSlice`: Manages the state of cryptocurrency assets and updates.

## Demo Video/GIF
Create a 2-5 minute walkthrough video or GIF showcasing:
- UI layout and responsiveness
- Live updates of crypto prices
- State management flow with Redux Toolkit

## Bonus Ideas (Optional)
- Integrate real WebSocket API for live data
- Add filters and sorting features
- Save user preferences in localStorage
- Add unit tests for reducers and selectors
- Convert to TypeScript for type safety

## Submission Deadline
Due Date: 25 April 2025
