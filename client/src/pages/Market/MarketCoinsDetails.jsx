import React from 'react'
import { useParams } from 'react-router-dom'
import CoinDetails from '../../components/crypto/CoinDetails'
import CoinChart from '../../components/crypto/CoinChart'




function MarketCoinsDetails() {

    let { id: coin_name } = useParams()

    const coin_url = `https://api.coingecko.com/api/v3/${coin_name}/`
    const chart_url = `https://api.coingecko.com/api/v3/coins/${coin_name}/market_chart?vs_currency=inr&days=180`



    return (
        <div className='bg-[#080808] space-y-10 py-10'>

            <CoinChart />
            <CoinDetails />
        </div>
    )
}

export default MarketCoinsDetails