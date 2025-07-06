import { useEffect, useState, Fragment } from "react";
import API from "../api";
import { Dialog, Transition } from "@headlessui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const [form, setForm] = useState({
    productName: "",
    description: "", // ✅ added
    color: "",
    materialType: "",
    price: "",
    height: "",
    width: "",
    category: "",
    image: null,
  });

  const fetchData = async () => {
    const [catRes, prodRes] = await Promise.all([
      API.get("/categories/public"),
      API.get("/products/public"),
    ]);
    setCategories(catRes.data);
    setProducts(prodRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openAddForm = () => {
    setForm({
      productName: "",
      description: "", // ✅ added
      color: "",
      materialType: "",
      price: "",
      height: "",
      width: "",
      category: "",
      image: null,
    });
    setEditProduct(null);
    setIsOpen(true);
  };

  const openEditForm = (product) => {
    setForm({
      productName: product.productName,
      description: product.description || "", // ✅ added
      color: product.color,
      materialType: product.materialType,
      price: product.price,
      height: product.height,
      width: product.width,
      category: product.category,
      image: null,
    });
    setEditProduct(product._id);
    setIsOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in form) {
      if (form[key]) data.append(key, form[key]);
    }

    try {
      if (editProduct) {
        await API.put(`/products/${editProduct}`, data);
        toast.success("Product updated");
      } else {
        await API.post("/products", data);
        toast.success("Product added");
      }
      setIsOpen(false);
      fetchData();
    } catch {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this product?");
    if (!confirm) return;
    try {
      await API.delete(`/products/${id}`);
      toast.success("Product deleted");
      fetchData();
    } catch {
      toast.error("Failed to delete product");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Products</h2>
        <button
          onClick={openAddForm}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 cursor-pointer"
        >
          <FaPlus /> Add Product
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-white uppercase bg-gray-800">
            <tr>
              <th className="px-4 py-3">S.No</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Color</th>
              <th className="px-4 py-3">Material</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Size</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr key={p._id} className="bg-white border-b hover:bg-gray-50 transition">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <img
                    src={`https://pinaka-furnitureadmin.onrender.com${p.image}`}
                    alt={p.productName}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">{p.productName}</td>
                <td className="px-4 py-2">{p.description}</td> {/* ✅ description */}
                <td className="px-4 py-2">{p.color}</td>
                <td className="px-4 py-2">{p.materialType}</td>
                <td className="px-4 py-2">₹{p.price}</td>
                <td className="px-4 py-2">
                  {p.height} x {p.width}
                </td>
                <td className="px-4 py-2 space-x-3">
                  <button
                    onClick={() => openEditForm(p)}
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center px-4 py-6 text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Form */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            leave="ease-in duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              leave="ease-in duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg bg-white rounded-2xl p-6 shadow-xl">
                <Dialog.Title className="text-lg font-bold mb-4 text-black text-center">
                  {editProduct ? "Edit Product" : "Add Product"}
                </Dialog.Title>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={form.productName}
                    onChange={(e) => setForm({ ...form, productName: e.target.value })}
                    required
                    className="w-full px-4 py-2 border-2 border-neutral-900 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  <textarea
                    placeholder="Description"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-neutral-900 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  <input
                    type="text"
                    placeholder="Color"
                    value={form.color}
                    onChange={(e) => setForm({ ...form, color: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-neutral-900 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    placeholder="Material"
                    value={form.materialType}
                    onChange={(e) => setForm({ ...form, materialType: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-neutral-900 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    required
                    className="w-full px-4 py-2 border-2 border-neutral-900 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Height"
                      value={form.height}
                      onChange={(e) => setForm({ ...form, height: e.target.value })}
                      className="w-1/2 px-4 py-2 border-2 border-neutral-900 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                      type="text"
                      placeholder="Width"
                      value={form.width}
                      onChange={(e) => setForm({ ...form, width: e.target.value })}
                      className="w-1/2 px-4 py-2 border-2 border-neutral-900 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-neutral-900 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.categoryName}
                      </option>
                    ))}
                  </select>

                  <input
                    type="file"
                    onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                    className="w-full px-4 py-2 border-2 border-neutral-900 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 cursor-pointer"
                    >
                      {editProduct ? "Update" : "Add"}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <ToastContainer />
    </div>
  );
}
