import Coin from "./Coin"

export default function CoinList({filteredCoins}) {
  
  return (
    <div>

       
        
        {filteredCoins.map(coin=>{
          return(
            <Coin
            name={coin.name} 
            price={coin.current_price} 
            symbol={coin.symbol} 
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h} 


            />
          )
        })}
        
        
      
    </div>
  )
}
