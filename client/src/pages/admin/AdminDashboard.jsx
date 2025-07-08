import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  HiOutlineShoppingBag,
  HiOutlineTag,
  HiUsers,
} from "react-icons/hi";
import { StatsCard, AdminList, AdminLayout as Layout, AccessoriesCategoryChart,DressCategoryChart, UserVisitsLineChart } from "../../components/index.components.js"


export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalAdmins: 0,
  });

  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    fetchAdmins();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/v1/admin/stats",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setStats(response.data.data || {});
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const fetchAdmins = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/v1/admin/all",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setAdmins(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching admins:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/admin/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setAdmins((prev) => prev.filter((admin) => admin._id !== id));
      setStats((prev) => ({ ...prev, totalAdmins: prev.totalAdmins - 1 }));
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };

  return (
    <Layout active="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sB mb-6 -mt-6">
        <StatsCard
          title="Total Customers"
          count={stats.totalUsers}
          icon={<HiUsers />}
        />
        <StatsCard
          title="Total Products"
          count={stats.totalProducts}
          icon={<HiOutlineShoppingBag />}
        />
        <StatsCard
          title="Total Admins"
          count={stats.totalAdmins}
          icon={<HiOutlineTag />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <AdminList admins={admins} onDelete={handleDelete} loading={loading} />
        <DressCategoryChart />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <AccessoriesCategoryChart />
        <UserVisitsLineChart />
      </div>
    </Layout>
  );
}
