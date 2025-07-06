import { useEffect, useState } from "react";
import { FaBoxOpen, FaUser, FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import API from "../api";

export default function Dashboard() {
  const [summary, setSummary] = useState({
    products: 0,
    users: 0,
    orders: 0,
    revenue: 0,
  });

  const fetchData = async () => {
    try {
      const [prodRes, userRes, orderRes] = await Promise.all([
        API.get("/products"),
        API.get("/users"),
        API.get("/orders"),
      ]);

      const totalRevenue = orderRes.data.reduce((sum, order) => sum + order.totalPrice, 0);

      setSummary({
        products: prodRes.data.length,
        users: userRes.data.length,
        orders: orderRes.data.length,
        revenue: totalRevenue,
      });
    } catch (error) {
      console.error("Dashboard data fetch failed", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Products */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
          <FaBoxOpen className="text-4xl text-indigo-600" />
          <div>
            <p className="text-gray-600 text-sm">Total Products</p>
            <p className="text-xl font-semibold">{summary.products}</p>
          </div>
        </div>

        {/* Users */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
          <FaUser className="text-4xl text-green-600" />
          <div>
            <p className="text-gray-600 text-sm">Total Users</p>
            <p className="text-xl font-semibold">{summary.users}</p>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
          <FaShoppingCart className="text-4xl text-orange-600" />
          <div>
            <p className="text-gray-600 text-sm">Total Orders</p>
            <p className="text-xl font-semibold">{summary.orders}</p>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
          <FaRupeeSign className="text-4xl text-purple-600" />
          <div>
            <p className="text-gray-600 text-sm">Total Revenue</p>
            <p className="text-xl font-semibold">₹{summary.revenue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

