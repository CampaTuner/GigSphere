import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CoinDetails from '../../components/crypto/CoinDetails'
import CoinChart from '../../components/crypto/CoinChart'
import axios from 'axios'




function MarketCoinsDetails() {

    let { id } = useParams()

    const coin_url = `https://api.coingecko.com/api/v3/coins/${id}`
    const chart_url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=180`


    let [chart_prices, set_chart_prices] = useState([])
    let [coin_data, set_coin_data] = useState({})




    let fetchChartData = async () => {
        let res = await axios.get(chart_url)

        set_chart_prices(res.data.prices)


        res = await axios.get(coin_url)
        set_coin_data(res.data)
    }


    useEffect(() => {
        fetchChartData()
    }, [id])


    return (
        <div className='bg-[#080808] space-y-10 py-10'>
            hii
            <CoinChart chart_prices={chart_prices} coin_data={coin_data} />
            <CoinDetails coin_data={coin_data} />
        </div>
    )
}

export default MarketCoinsDetails