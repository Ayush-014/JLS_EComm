import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import axios from "axios";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler
);

export default function UserVisitsLineChart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchVisitData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3001/api/v1/admin/visits/weekly", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const labels = Array.from({ length: 7 }, (_, i) => {
          const d = new Date();
          d.setDate(d.getDate() - d.getDay() + i);
          return d.toLocaleDateString('en-IN', { weekday: 'short' });
        });

        const visitMap = res.data.reduce((acc, d) => {
          acc[d._id] = d.count;
          return acc;
        }, {});

        const visitCounts = labels.map((_, i) => {
          const d = new Date();
          d.setDate(d.getDate() - d.getDay() + i);
          const key = d.toISOString().split("T")[0];
          return visitMap[key] || 0;
        });

        setData({
          labels,
          datasets: [
            {
              label: "User Visits",
              data: visitCounts,
              fill: true,
              backgroundColor: (context) => {
                const chart = context.chart;
                const { ctx, chartArea } = chart;
                if (!chartArea) return null;
                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                gradient.addColorStop(0, "rgba(60,137,201,0.2)");
                gradient.addColorStop(1, "rgba(35,87,130,0)");
                return gradient;
              },
              borderColor: "#3C89C9",
              borderWidth: 3,
              tension: 0.5,
              pointRadius: 5,
              pointBackgroundColor: "#fff",
              pointBorderColor: "#3C89C9",
              pointHoverRadius: 7,
            },
          ],
        });
      } catch (err) {
        console.error("Error loading visit chart data:", err);
      }
    };

    fetchVisitData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#3C89C9",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#235782",
          font: { size: 14, weight: "bold" },
        },
      },
      y: {
        grid: { color: "rgba(60,137,201,0.08)" },
        ticks: {
          color: "#235782",
          font: { size: 14, weight: "bold" },
          stepSize: 5,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 font-sB">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">User Visits Over Time</h3>
      {data ? (
        <Line data={data} options={options} height={40} />
      ) : (
        <div className="text-center text-gray-500">Loading...</div>
      )}
    </div>
  );
}
