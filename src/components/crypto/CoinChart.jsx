import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  CategoryScale, // fallback if needed
} from "chart.js";

import { Chart } from "react-chartjs-2";
import {
  CandlestickController,
  CandlestickElement,
} from "chartjs-chart-financial";

import "chartjs-adapter-date-fns";

// Register everything
ChartJS.register(
  TimeScale,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  CandlestickController,
  CandlestickElement
);

function CoinChart() {
  // Sample realistic BTC data for Feb 2026 (prices around $38k in screenshot, but you can replace with real data)
  const candleData = [
    { x: new Date("2026-02-05"), o: 38250, h: 38600, l: 37900, c: 38400 },
    { x: new Date("2026-02-06"), o: 38400, h: 38550, l: 38100, c: 38280 },
    { x: new Date("2026-02-07"), o: 38280, h: 38650, l: 38200, c: 38520 },
    { x: new Date("2026-02-08"), o: 38520, h: 38600, l: 37950, c: 38100 },
    { x: new Date("2026-02-09"), o: 38100, h: 38500, l: 38050, c: 38450 },
    { x: new Date("2026-02-10"), o: 38450, h: 38680, l: 38300, c: 38580 },
    { x: new Date("2026-02-11"), o: 38580, h: 38620, l: 38250, c: 38350 },
    { x: new Date("2026-02-12"), o: 38350, h: 38400, l: 37800, c: 37950 },
    { x: new Date("2026-02-13"), o: 37950, h: 38200, l: 37750, c: 38120 },
    { x: new Date("2026-02-14"), o: 38120, h: 38700, l: 38050, c: 38650 },
    { x: new Date("2026-02-15"), o: 38650, h: 38720, l: 38400, c: 38500 },
    { x: new Date("2026-02-16"), o: 38500, h: 38600, l: 38250, c: 38380 },
  ];

  const data = {
    datasets: [
      {
        label: "BTC/USD",
        data: candleData,
        borderColor: "#22C55E", // green for bullish
        borderWidth: 1,
        backgroundColor: (context) => {
          const { raw } = context.raw || {};
          if (!raw) return "#22C55E";
          return raw.o <= raw.c ? "#22C55E" : "#EF4444"; // green if close > open, red otherwise
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: (context) => {
            const { o, h, l, c } = context.raw;
            return [
              `Open: $${o.toLocaleString()}`,
              `High: $${h.toLocaleString()}`,
              `Low: $${l.toLocaleString()}`,
              `Close: $${c.toLocaleString()}`,
            ];
          },
        },
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          displayFormats: {
            day: "dd MMM",
          },
        },
        grid: {
          color: "#333",
        },
        ticks: {
          color: "#888",
        },
      },
      y: {
        position: "right",
        grid: {
          color: "#333",
        },
        ticks: {
          color: "#888",
          callback: (value) => "$" + value.toLocaleString(),
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  return (
    <div className="bg-[#0f0f0f] text-white p-6 rounded-2xl border border-zinc-800">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Bitcoin to USD Chart</h2>
          <p className="text-zinc-500 text-sm mt-1">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search Coin Name"
            className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 w-64"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl text-sm font-medium transition">
          Price
        </button>
        <button className="bg-zinc-800 hover:bg-zinc-700 px-6 py-2 rounded-xl text-sm font-medium transition">
          Market Cap
        </button>
        <button className="bg-zinc-800 hover:bg-zinc-700 px-6 py-2 rounded-xl text-sm font-medium transition">
          Trade View
        </button>
      </div>

      {/* Timeframe & Tools */}
      <div className="flex justify-end items-center gap-4 mb-4 text-sm">
        <div className="flex items-center gap-2 bg-zinc-900 px-4 py-1 rounded-xl">
          <span>24h</span>
          <span className="text-zinc-500">▼</span>
        </div>
        <div className="flex gap-3 text-zinc-400">
          <button>📊</button>
          <button>↗</button>
          <button>⋯</button>
        </div>
      </div>

      {/* Chart Container */}
      <div className="h-[420px] relative">
        <Chart
          type="candlestick"
          data={data}
          options={options}
        />
      </div>

      {/* Bottom Labels */}
      <div className="flex justify-between text-xs text-zinc-500 mt-2 px-2">
        <div>USD</div>
        <div>BTC</div>
      </div>
    </div>
  );
}

export default CoinChart;