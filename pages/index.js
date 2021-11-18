import {useState} from 'react'
import CoinList from "../components/CoinList"
import Layout from "../components/Layout"
import SearchBar from "../components/Search"



export default function index({filteredCoins}) {
  const [search, setSearch]=useState('')

  const allCoins = filteredCoins.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  
  
  const handleChange= e =>{
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
  }
  return (
    <Layout>

     
        

        <SearchBar type="text" placeholder="Search" onChange={handleChange}/>

        <CoinList filteredCoins={allCoins}/>
      
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
