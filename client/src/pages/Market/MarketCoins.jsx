import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import Input from '../../components/common/Input';
import Dropdown from '../../components/common/Dropdown';
import CoinRow from '../../components/crypto/CoinRow';

function MarketCoins() {
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=24h"
    const [limit, setLimit] = useState({ label: "20" });
    const [filters, setFilters] = useState({
        category: null,
        algorithm: null,
        platform: null,
        industry: null,
    });

    let [coins, setCoins] = useState([])

    let fetchData = async () => {
        let data = await fetch(url);
        let res = await data.json();
        setCoins(res);
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="bg-zinc-950 text-zinc-100 min-h-screen p-8">

            <div className="max-w-7xl mx-auto bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden">

                {/* <!-- Header --> */}
                <div className="p-6 border-b border-zinc-800">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold ">Market Coins</h1>
                            <p className="text-zinc-400 text-[15px] mt-2">Here you can find live market coins and their price with market up & down in 24 hours and also their graphs.</p>
                        </div>

                        {/* <!-- Search & Filter --> */}
                        <div className="flex gap-3">
                            <div className="relative">
                                <Input placeholder='Search Coin Name' icon={<FaSearch />} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Filters --> */}
                <div className="px-6 py-4 border-b border-zinc-800 flex items-center gap-3 flex-wrap">
                    <Dropdown
                        placeholder="Category"
                        variant="dark"
                        onSelect={(val) => setFilters({ ...filters, category: val })}
                        options={[
                            { label: "Crypto" },
                            { label: "Stocks" },
                            { label: "NFT" },
                        ]}
                    />
                    <Dropdown
                        placeholder="Algorithm"
                        variant="dark"
                        onSelect={(val) => setFilters({ ...filters, algorithm: val })}
                        options={[
                            { label: "SHA-256" },
                            { label: "Scrypt" },
                            { label: "Ethash" },
                        ]}
                    />
                    <Dropdown
                        placeholder="Platform"
                        variant="dark"
                        onSelect={(val) => setFilters({ ...filters, platform: val })}
                        options={[{ label: "Web App" }, { label: "Mobile App" }]}
                    />
                    <Dropdown
                        placeholder="Industry"
                        variant="dark"
                        onSelect={(val) => setFilters({ ...filters, industry: val })}
                        options={[{ label: "FinTech" }, { label: "EdTech" }]}
                    />


                    <div className="ml-auto flex items-center gap-4">
                        <Dropdown
                            placeholder="Showing 20"
                            size="sm"
                            variant="dark"
                            value={limit}
                            prefix='Showing'
                            onSelect={(val) => setLimit(val)}
                            options={[
                                { label: "20" },
                                { label: "40" },
                                { label: "80" },
                                { label: "100" }
                            ]}
                        />

                        <div className="flex gap-2">
                            <button className="p-2.5 hover:bg-zinc-800 rounded-xl transition"><i className="fa-solid fa-bars"></i></button>
                            <button className="p-2.5 hover:bg-zinc-800 rounded-xl transition"><i className="fa-solid fa-grip"></i></button>
                            <button className="p-2.5 hover:bg-zinc-800 rounded-xl transition"><i className="fa-solid fa-table"></i></button>
                        </div>
                    </div>
                </div>

                {/* <!-- Table Header --> */}
                <div className="grid z-10 grid-cols-14 gap-4 px-6 py-4 text-xs font-medium text-zinc-400 border-b border-zinc-800 bg-zinc-950">
                    <div className="col-span-1">#</div>
                    <div className="col-span-3">Coin Name</div>
                    <div className="col-span-2 text-right">Coin Price</div>
                    <div className="col-span-2 text-right">24h %</div>
                    <div className="col-span-2 text-right">24h High</div>
                    <div className="col-span-2 text-right">24h Low</div>
                    <div className="col-span-2 text-center">Chart</div>
                </div>

                {/* <!-- Bitcoin Row --> */}
                {
                    coins.length > 0 &&
                    coins?.map((coin, idx) => <CoinRow key={idx} chartData={coin.sparkline_in_7d.price} id={idx + 1} icon={coin.image} name={coin.name} code={coin.symbol} price={coin.current_price} />)
                }


            </div>

        </div>
    )
}

export default MarketCoins