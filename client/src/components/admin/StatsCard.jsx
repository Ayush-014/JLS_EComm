import React from "react";

export default function StatsCard({ title, count, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center justify-between">
        <div className="text-4xl text-orange-500">{icon}</div>
        <div className="text-3xl font-bold text-gray-800">{count}</div>
      </div>
      <div className="mt-4 text-sm font-semibold text-gray-600">{title}</div>
    </div>
  );
}
