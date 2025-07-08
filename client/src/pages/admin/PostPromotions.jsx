import React, { useState } from "react";
import { AdminLayout } from "../../components/index.components.js";
import axios from "axios";
import { toast } from "react-toastify";

export default function PostPromotions() {
  const [activeTab, setActiveTab] = useState("offer");

  const initialOffer = {
    title: "",
    code: "",
    description: "",
    minimumAmount: "",
    discountPercent: "",
    isActive: true,
  };

  const initialAnnouncement = {
    message: "",
    isActive: true,
  };

  const [offerData, setOfferData] = useState(initialOffer);
  const [announcementData, setAnnouncementData] = useState(initialAnnouncement);

  const handleChange = (setter) => (e) => {
    const { name, value, type, checked } = e.target;
    setter((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload;
    let url;

    try {
      if (activeTab === "offer") {
        url = "http://localhost:3001/api/v1/offers";
        payload = {
          ...offerData,
          minimumAmount: Number(offerData.minimumAmount),
          discountPercent: Number(offerData.discountPercent),
        };
      } else {
        url = "http://localhost:3001/api/v1/announcements";
        payload = announcementData;
      }

      await axios.post(url, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      toast.success(`${activeTab === "offer" ? "Offer" : "Announcement"} posted successfully!`);

      activeTab === "offer"
        ? setOfferData(initialOffer)
        : setAnnouncementData(initialAnnouncement);

    } catch (err) {
      console.error(err);
      toast.error("Failed to post.");
    }
  };

  return (
    <AdminLayout active="Post Promotions">
      <h2 className="text-2xl font-bold mb-6">Post Promotions</h2>

      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded font-semibold ${
            activeTab === "offer"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("offer")}
        >
          Post Offer
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold ${
            activeTab === "announcement"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("announcement")}
        >
          Post Announcement
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow">
        {activeTab === "offer" && (
          <>
            <input
              type="text"
              name="title"
              placeholder="Offer Title (e.g., Welcome Offer)"
              value={offerData.title}
              onChange={handleChange(setOfferData)}
              className="input"
              required
            />
            <input
              type="text"
              name="code"
              placeholder="Coupon Code (e.g., WELCOME10)"
              value={offerData.code}
              onChange={handleChange(setOfferData)}
              className="input"
              required
            />
            <input
              type="number"
              name="minimumAmount"
              placeholder="Minimum Cart Amount (₹)"
              value={offerData.minimumAmount}
              onChange={handleChange(setOfferData)}
              className="input"
              required
            />
            <input
              type="number"
              name="discountPercent"
              placeholder="Discount (%)"
              value={offerData.discountPercent}
              onChange={handleChange(setOfferData)}
              className="input"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={offerData.description}
              onChange={handleChange(setOfferData)}
              className="input col-span-2"
              rows={3}
              required
            />
            <div className="flex items-center gap-2">
              <label className="font-semibold">Active</label>
              <input
                type="checkbox"
                name="isActive"
                checked={offerData.isActive}
                onChange={handleChange(setOfferData)}
              />
            </div>
          </>
        )}

        {activeTab === "announcement" && (
          <>
            <textarea
              name="message"
              placeholder="Announcement Message (e.g., Free shipping on orders over ₹5,000)"
              value={announcementData.message}
              onChange={handleChange(setAnnouncementData)}
              className="input col-span-2"
              rows={4}
              required
            />
            <div className="flex items-center gap-2">
              <label className="font-semibold">Active</label>
              <input
                type="checkbox"
                name="isActive"
                checked={announcementData.isActive}
                onChange={handleChange(setAnnouncementData)}
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="bg-black text-white font- semibold px-4 py-2 rounded mt-4 col-span-2 hover:bg-gray-700"
        >
          Submit
        </button>
      </form>
    </AdminLayout>
  );
}
