import React, { useState } from "react";
import { AdminLayout } from "../../components/index.components.js";
import axios from "axios";
import { toast } from "react-toastify";

export default function PostDresses() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    category: "",
    description: "",
    sizes: [""],
    colors: [""],
    tags: [""],
    stock: "",
    images: [""],
    type: "", // e.g., ethnic, western
    isFeatured: false,
    isAvailable: true,
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleArrayChange = (name, index, value) => {
    const updated = [...formData[name]];
    updated[index] = value;
    setFormData({ ...formData, [name]: updated });
  };

  const addField = (name) => {
    setFormData({ ...formData, [name]: [...formData[name], ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cleanedData = {
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
        rating: Number(formData.rating),
      };

      await axios.post("http://localhost:3001/api/v1/dresses", cleanedData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      toast.success("Dress uploaded successfully!");
      setFormData({
        name: "",
        brand: "",
        price: "",
        category: "",
        description: "",
        sizes: [""],
        colors: [""],
        tags: [""],
        stock: "",
        images: [""],
        type: "",
        isFeatured: false,
        isAvailable: true,
        rating: 0,
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to upload dress.");
    }
  };

  const renderArrayInputs = (name, label) => (
    <div className="col-span-2">
      <label className="font-semibold">{label}</label>
      {formData[name].map((val, idx) => (
        <input
          key={idx}
          type="text"
          value={val}
          onChange={(e) => handleArrayChange(name, idx, e.target.value)}
          className="input mt-2"
          required
        />
      ))}
      <button
        type="button"
        onClick={() => addField(name)}
        className="text-black border p-1 rounded-md bg-gray-100 hover:text-white hover:bg-gray-900"
      >
        + Add Another
      </button>
    </div>
  );

  return (
    <AdminLayout active="Post Dress">
      <h2 className="text-2xl font-bold mb-6">Upload a New Dress</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Dress Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="category"
          placeholder="Category (e.g., Saree, Kurta)"
          value={formData.category}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="type"
          placeholder="Type (Ethnic, Western)"
          value={formData.type}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="number"
          name="price"
          placeholder="Price (in ₹)"
          value={formData.price}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock Available"
          value={formData.stock}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (0-5)"
          value={formData.rating}
          onChange={handleChange}
          className="input"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="4"
          className="input col-span-2"
        />

        {renderArrayInputs("sizes", "Available Sizes (e.g. S, M, L)")}
        {renderArrayInputs("colors", "Colors Available")}
        {renderArrayInputs("tags", "Tags (e.g. Trending, New Arrival)")}
        {renderArrayInputs("images", "Image URLs")}

        <div className="flex items-center gap-2 mt-2">
          <label className="font-semibold">Featured</label>
          <input
            type="checkbox"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <label className="font-semibold">Available</label>
          <input
            type="checkbox"
            name="isAvailable"
            checked={formData.isAvailable}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded mt-4 col-span-2 hover:bg-gray-700"
        >
          Submit
        </button>
      </form>
    </AdminLayout>
  );
}
