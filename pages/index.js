import CoinList from "../components/CoinList"
import Layout from "../components/Layout"
import SearchBar from "../components/Search"



export default function index({filteredCoins}) {
  return (
    <Layout>

     
        

        <SearchBar type="text" placeholder="Search"/>

        <CoinList filteredCoins={filteredCoins}/>
      
    </Layout>
  )
}

export const getServerSideProps= async()=>{
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')

  const filteredCoins= await res.json()

  return{
    props:{
      filteredCoins
    }
  }
}
