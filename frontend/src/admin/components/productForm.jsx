import React, { useEffect, useState } from "react";
import API from "../api";

export default function ProductForm({ categories, refresh, editProduct, setEditProduct }) {
  const [form, setForm] = useState({
    productName: "",
    color: "",
    materialType: "",
    cusion: "",
    description: "",
    price: "",
    height: "",
    width: "",
    image: null,
  });

  useEffect(() => {
    if (editProduct) {
      const { image, ...rest } = editProduct;
      setForm({ ...rest, image: null });
    }
  }, [editProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in form) formData.append(key, form[key]);

    if (editProduct) {
      await API.delete(`/products/${editProduct._id}`);
      await API.post("/products", formData);
      setEditProduct(null);
    } else {
      await API.post("/products", formData);
    }

    setForm({
      productName: "",
      color: "",
      materialType: "",
      cusion: "",
      description: "",
      price: "",
      height: "",
      width: "",
      image: null,
    });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(form).map(([key, value]) => (
        key !== "image" ? (
          <input
            key={key}
            placeholder={key}
            value={value}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        ) : (
          <input
            key={key}
            type="file"
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
          />
        )
      ))}
      <button type="submit">{editProduct ? "Update" : "Add"} Product</button>
    </form>
  );
}