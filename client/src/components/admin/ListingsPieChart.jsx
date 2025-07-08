import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { GiClothes, GiNecklaceDisplay } from "react-icons/gi";

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = [
  "#3B82F6", "#10B981", "#F59E0B", "#EF4444",
  "#6366F1", "#EC4899", "#14B8A6", "#8B5CF6"
];

const PIE_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: { size: 10 },
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const value = context.parsed;
          return `${value} Items`;
        },
      },
    },
  },
  animation: {
    animateRotate: true,
    duration: 800,
    easing: "easeOutQuart",
  },
};

function CategoryPieChart({ title, icon: Icon, apiEndpoint, categories }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(apiEndpoint, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = res.data?.data || {};
        const counts = categories.map((cat) => data[cat] || 0);

        setChartData({
          labels: categories,
          datasets: [
            {
              label: "Items",
              data: counts,
              backgroundColor: COLORS,
              borderColor: "#fff",
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
        toast.error("Failed to load category stats");
      }
    }

    fetchData();
  }, [apiEndpoint, categories]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
        <Icon className="text-orange-500" size={20} />
        {title}
      </h3>
      {chartData ? (
        <div className="relative w-full h-[240px]">
          <Pie data={chartData} options={PIE_OPTIONS} />
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10">Loading chart...</div>
      )}
    </div>
  );
}

export function DressCategoryChart() {
  return (
    <CategoryPieChart
      title="Dress Category Distribution"
      icon={GiClothes}
      apiEndpoint="http://localhost:3001/api/v1/admin/dresses/category-stats"
      categories={["New Arrivals", "Lehanga", "Gown", "Occasion Wear"]}
    />
  );
}

export function AccessoriesCategoryChart() {
  return (
    <CategoryPieChart
      title="Accessories Category Distribution"
      icon={GiNecklaceDisplay}
      apiEndpoint="http://localhost:3001/api/v1/admin/accessories/category-stats"
      categories={["New Arrivals", "Accessories", "Ethnic Wear"]}
    />
  );
}
