import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

function CoinChart({ chart_prices, coin_data }) {
  const chartData = chart_prices;

  // Format dates for labels
  const labels = chartData.map(([timestamp, _]) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  });

  const prices = chartData.map(([_, price]) => price);

  console.log(coin_data)

  const currentPrice = coin_data?.market_data?.current_price?.usd;
  const previousPrice = coin_data?.market_data?.price_change_percentage_24h;
  const change = ((currentPrice - previousPrice) / previousPrice) * 100;
  const isPositive = change > 0;

  const data = {
    labels,
    datasets: [
      {
        data: prices,
        borderColor: isPositive ? "#22c55e" : "#ef4444",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, isPositive ? "rgba(34, 197, 94, 0.25)" : "rgba(239, 68, 68, 0.25)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1f2937",
        titleColor: "#9ca3af",
        bodyColor: "#fff",
        padding: 12,
        displayColors: false,
        callbacks: {
          title: (tooltipItems) => tooltipItems[0].label,
          label: (context) => ` $${context.parsed.y?.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: "#27272a", lineWidth: 0.5 },
        ticks: { color: "#71717a", font: { size: 11 } },
      },
      y: {
        grid: { color: "#27272a", lineWidth: 0.5 },
        ticks: {
          color: "#71717a",
          font: { size: 11 },
          callback: (value) => "$" + (value / 1000000).toFixed(1) + "M",
        },
      },
    },
  };

  return (
    <div className="bg-[#0f0f0f] max-w-6xl m-auto text-white p-6 rounded-3xl border border-zinc-800 shadow-xl">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start mb-6 gap-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={coin_data?.image?.large} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <h2 className="text-3xl font-semibold">{coin_data?.name}</h2>
              <p className="text-zinc-500">{coin_data?.symbol}/USD</p>
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-4xl font-semibold w-fit content tabular-nums">
            ${currentPrice?.toLocaleString()}
          </div>
          <div className={`text-lg flex items-center justify-end gap-1 ${isPositive ? "text-green-500" : "text-red-500"}`}>
            {isPositive ? "↑" : "↓"} {Math.abs(change)?.toFixed(2)}% (24h)
          </div>
        </div>


      </div>
      {/* Tabs */}
      <div className="flex gap-2 mb-6  border-b border-zinc-800 pb-3">
        {["Price", "Market Cap", "Volume"].map((tab, i) => (
          <button
            key={i}
            className={`px-6 py-2.5 rounded-2xl text-sm font-medium transition-all ${i === 0
              ? "bg-blue-600 text-white "
              : "bg-zinc-900 hover:bg-zinc-800 text-zinc-400"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Timeframe */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 text-sm">
          {["1H", "24H", "7D", "30D", "90D", "1Y", "ALL"].map((t, i) => (
            <button
              key={i}
              className={`px-4 py-1.5 rounded-xl transition ${i === 1 ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              {t}
            </button>
          ))}
        </div>


      </div>

      {/* Chart */}
      <div className="h-[420px] w-full">
        <Line data={data} options={options} />
      </div>

      {/* Bottom Labels */}
      <div className="flex justify-between text-xs text-zinc-500 mt-3 px-2">
        <div>Feb 2026</div>
        <div>Mar 2026</div>
      </div>
    </div>
  );
}

export default CoinChart;