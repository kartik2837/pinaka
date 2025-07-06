import React, { useState } from "react";
import API from "../api";

export default function CategoryForm({ refresh }) {
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", categoryName); // key must match backend: req.body.name
    formData.append("image", image);       // key must match: upload.single("image")

    try {
      await API.post("/categories", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setCategoryName("");
      setImage(null);
      refresh();
    } catch (err) {
      console.error("Category creation failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Category Name"
        className="border px-3 py-2 w-full"
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="w-full"
        required
      />

      <button
        type="submit"
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Add Category
      </button>
    </form>
  );
}
