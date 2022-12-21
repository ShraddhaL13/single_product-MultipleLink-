import React from 'react'
import Coin from './Coin';
import axios from 'axios';
import { useState ,useEffect } from 'react';
import './Crypto.css';

export default function CryptoFile() {
  
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');


  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  axios.get(url).then(res => {
    console.log(res);
    setCoins(res.data)
  })

  useEffect(() => {

  }, []);
  const getInputValue = (e) => {
    setSearch(e.target.value)
  }
  const filterCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
<>
<div className='container-fluid'>
<h1 className="aName">Cryptocurrency API</h1>
<input className="searchC" type="text" placeholder='Search' onChange={getInputValue} ></input>
<div className='cryptoDiv'>
{
          filterCoins.map((coin) => {
            return <Coin image={coin.image} name={coin.name} symbol={coin.symbol}
              current_price={coin.current_price} total_volume={coin.total_volume} />
          })
        }
  </div>
  </div>
  </>
  )
}
