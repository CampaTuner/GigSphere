import React from "react";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
);

function CoinRow({ id, icon, name, code, price, chartData = [] }) {

    // 🔥 Convert simple array → chart format
    const data = {
        labels: chartData.map((_, i) => i),
        datasets: [
            {
                data: chartData,
                borderColor:
                    chartData[0] < chartData[chartData.length - 1]
                        ? "#22c55e" // green
                        : "#ef4444", // red
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
        scales: {
            x: { display: false },
            y: { display: false },
        },
    };

    return (
        <div className="grid grid-cols-14 gap-4 px-6 py-5 items-center hover:bg-zinc-800/50 transition border-b border-zinc-800">

            {/* ID */}
            <div className="col-span-1 flex items-center gap-3">
                <i className="fa-regular fa-star text-amber-400"></i>
                <span className="text-zinc-400">{id}</span>
            </div>

            {/* Coin Info */}
            <div className="col-span-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src={icon} alt={name} />
                </div>
                <div>
                    <div className="font-semibold">{name}</div>
                    <div className="text-xs text-zinc-500">{code}</div>
                </div>
            </div>

            {/* Price */}
            <div className="col-span-2 text-right font-semibold">
                ${price}
            </div>

            {/* Change */}
            <div className="col-span-2 text-right">
                <span className="text-emerald-500 font-medium flex items-center justify-end gap-1">
                    +0.60% <span className="text-xs">↑</span>
                </span>
            </div>

            {/* High / Low */}
            <div className="col-span-2 text-right text-zinc-300">
                $44,727.80
            </div>
            <div className="col-span-2 text-right text-zinc-300">
                $43,318.64
            </div>

            {/* Chart */}
            <div className="col-span-2 flex justify-center">
                <div className="w-20 h-12">
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    );
}

export default CoinRow;