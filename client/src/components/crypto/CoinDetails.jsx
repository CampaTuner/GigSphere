import React, { useState } from 'react';
import { Star, Info, Clock, TrendingUp, TrendingDown, ExternalLink, Wallet } from 'lucide-react'; // Optional icons

function CoinDetails() {
    const [isFavorite, setIsFavorite] = useState(true);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const coinData = {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png", // Official BTC logo

        market_cap_rank: 1,
        watchlist_count: 2771773,

        current_price: 43975.72,
        price_change_percentage_24h: 2,

        high_24h: 237005.19,   // Note: In image low & high seem swapped in label
        low_24h: 37005.19,

        market_cap: 826445951378,
        fully_diluted_valuation: 915435574336,
        total_volume: 22822762169,
        circulating_supply: 18958437,
        max_supply: 21000000,
        last_updated: "2026-04-06T12:00:00Z",
        isFavorite: true,
    };

    const description = `Bitcoin is the first and most well-known cryptocurrency in the world. It was created in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. Bitcoin operates on a decentralized peer-to-peer network using blockchain technology, allowing secure transactions without the need for intermediaries like banks. It has a fixed supply cap of 21 million coins, making it a popular store of value often referred to as "digital gold."`;

    const formatNumber = (num) => {
        return new Intl.NumberFormat('en-US', {
            maximumFractionDigits: 0,
        }).format(num);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2,
        }).format(price);
    };

    const toggleWishlist = () => {
        setIsFavorite(!isFavorite);
        console.log(isFavorite ? "Removed from wishlist" : "Added to wishlist");
    };

    const handleBuyCoin = () => {
        window.open('https://www.binance.com/en/trade/BTC_INR?layout=pro&theme=dark', '_blank');
    };

    return (
        <div className="bg-[#1a1a1a] mt-10 text-white px-10 py-6 rounded-2xl max-w-6xl mx-auto font-sans">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                    <img
                        src={coinData.image}
                        alt="Bitcoin"
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl font-bold">{coinData.name}</h1>
                            <span className="bg-zinc-800 text-xs px-3 py-1 rounded-full font-mono tracking-widest">
                                {coinData.symbol}
                            </span>
                            {coinData.isFavorite && (
                                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            )}
                        </div>
                        <p className="text-zinc-400 mt-1">
                            Rank #{coinData.market_cap_rank} • On {formatNumber(coinData.watchlist_count)} watchlists
                        </p>
                    </div>
                </div>

                {/* Price Section */}
                <div className="text-right">
                    <div className="text-4xl font-semibold">
                        {formatPrice(coinData.current_price)}
                    </div>
                    <div className="flex items-center gap-2 justify-end mt-1">
                        <span className="text-emerald-400 text-xl font-medium flex items-center gap-1">
                            +{coinData.price_change_percentage_24h}%
                            <TrendingUp className="w-5 h-5" />
                        </span>
                        <span className="text-zinc-500 text-sm">Bitcoin Price (INR)</span>
                    </div>
                </div>
            </div>

            {/* High / Low Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-sm text-zinc-400 mb-1.5">
                    <span>Low: ₹ {formatNumber(coinData.low_24h)}</span>
                    <span>High: ₹ {formatNumber(coinData.high_24h)}</span>
                </div>
                <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 w-[65%]"
                        style={{
                            width: `${((coinData.current_price - coinData.low_24h) /
                                (coinData.high_24h - coinData.low_24h)) * 100}%`
                        }}
                    />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                {/* Market Cap */}
                <div className="bg-zinc-900/70 p-5 rounded-2xl border border-zinc-800">
                    <div className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
                        <TrendingUp className="w-4 h-4" />
                        Market Cap
                    </div>
                    <div className="text-2xl font-semibold mb-1">
                        ₹ {formatNumber(coinData.market_cap)}
                    </div>
                    <div className="text-emerald-400 text-sm flex items-center gap-1">
                        +2% <TrendingUp className="w-3 h-3" />
                    </div>
                </div>

                {/* Fully Diluted */}
                <div className="bg-zinc-900/70 p-5 rounded-2xl border border-zinc-800">
                    <div className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
                        <Info className="w-4 h-4" />
                        Full Diluted
                    </div>
                    <div className="text-2xl font-semibold mb-1">
                        ₹ {formatNumber(coinData.fully_diluted_valuation)}
                    </div>
                    <div className="text-red-400 text-sm flex items-center gap-1">
                        -28% <TrendingDown className="w-3 h-3" />
                    </div>
                </div>

                {/* 24h Volume */}
                <div className="bg-zinc-900/70 p-5 rounded-2xl border border-zinc-800">
                    <div className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
                        <Clock className="w-4 h-4" />
                        24 Volume
                    </div>
                    <div className="text-2xl font-semibold mb-1">
                        ₹ {formatNumber(coinData.total_volume)}
                    </div>
                    <div className="text-emerald-400 text-sm flex items-center gap-1">
                        +2% <TrendingUp className="w-3 h-3" />
                    </div>
                </div>

                {/* Circulating Supply */}
                <div className="bg-zinc-900/70 p-5 rounded-2xl border border-zinc-800">
                    <div className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
                        <Info className="w-4 h-4" />
                        Circulating Supply
                    </div>
                    <div className="text-2xl font-semibold mb-1">
                        {formatNumber(coinData.circulating_supply)} BTC
                    </div>
                    <div className="text-zinc-400 text-sm">
                        Max supply {formatNumber(coinData.max_supply)}
                    </div>
                </div>
            </div>

            {/* About Section with Read More */}
            <div className="mb-10 mt-10">
                <h2 className="text-2xl font-semibold mb-4">About Bitcoin</h2>
                <div className="text-zinc-300 leading-relaxed text-[17px]">
                    {showFullDescription
                        ? description
                        : description.substring(0, 320) + "..."
                    }
                </div>
                <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="text-blue-400 hover:text-blue-300 font-medium mt-4 flex items-center gap-1 transition"
                >
                    {showFullDescription ? "Read Less" : "Read More"}
                </button>
            </div>

            {/* Official Website */}
            <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition">
                <a
                    href={coinData.official_website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 px-5 py-3 rounded-2xl"
                >
                    <ExternalLink className="w-5 h-5" />
                    Official Website
                </a>
            </div>

            {/* Last Updated */}
            <div className="text-center text-zinc-500 text-xs mt-6">
                Last updated: {new Date(coinData.last_updated).toLocaleString()}
            </div>

            <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
                {/* Add to Wishlist */}
                <button
                    onClick={toggleWishlist}
                    className="px-6 py-2.5 flex items-center gap-5 py-3 rounded-2xl text-sm font-medium transition-all bg-zinc-900 hover:bg-zinc-800 text-zinc-400"
                >
                    <Star className={`w-6 h-6 ${isFavorite ? "text-yellow-400 fill-yellow-400" : "text-zinc-400"}`} />
                    <span className="font-medium pr-2">
                        {isFavorite ? "In Wishlist" : "Add to Wishlist"}
                    </span>
                </button>

                {/* Buy Coin */}
                <button
                    onClick={handleBuyCoin}
                    className="px-6 py-2.5 flex items-center gap-5 py-3 rounded-2xl text-sm font-medium transition-all bg-blue-600 text-white"
                >
                    <Wallet className="w-6 h-6" />
                    Buy Coin
                </button>
            </div>
        </div>
    );
}

export default CoinDetails;