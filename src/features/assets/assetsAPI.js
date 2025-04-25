export async function fetchAssetsFromCoinGecko() {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,cardano,ripple&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=1h,24h,7d'
  );
  const data = await response.json();
  return data.map(coin => ({
    id: coin.id,
    logo: coin.image,
    name: coin.name,
    symbol: coin.symbol.toUpperCase(),
    price: coin.current_price,
    percent_change_1h: coin.price_change_percentage_1h_in_currency,
    percent_change_24h: coin.price_change_percentage_24h_in_currency,
    percent_change_7d: coin.price_change_percentage_7d_in_currency,
    market_cap: coin.market_cap,
    volume_24h: coin.total_volume,
    circulating_supply: coin.circulating_supply,
    max_supply: coin.max_supply,
    chartUrl: 'https://www.tradingview.com/x/yaaO4MOY/' // Could add static chart or leave empty
  }));
}
