import { useEffect, useState, Fragment } from "react";
import API from "../api";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ categoryName: "", image: null });
  const [editId, setEditId] = useState(null);

  const fetchCategories = async () => {
    try {
      const res = await API.get("/categories/public");
      setCategories(res.data);
    } catch (err) {
      toast.error("Failed to fetch categories");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const openAddForm = () => {
    setForm({ categoryName: "", image: null });
    setEditId(null);
    setIsOpen(true);
  };

  const openEditForm = (cat) => {
    setForm({ categoryName: cat.categoryName, image: null }); // ✅ Correct key
    setEditId(cat._id);
    setIsOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("categoryName", form.categoryName); // ✅ Fixed key
    if (form.image) {
      formData.append("image", form.image);
    }

    try {
      if (editId) {
        await API.put(`/categories/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Category updated");
      } else {
        await API.post("/categories", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Category added");
      }

      setIsOpen(false);
      setForm({ categoryName: "", image: null });
      setEditId(null);
      fetchCategories();
    } catch (err) {
      console.error("Category Submit Error:", err.response?.data || err.message);
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/categories/${id}`);
      toast.success("Category deleted");
      fetchCategories();
    } catch {
      toast.error("Failed to delete");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
        <button
          onClick={openAddForm}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 cursor-pointer"
        >
          <FaPlus /> Add Category
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-white uppercase bg-gray-800">
            <tr>
              <th className="px-4 py-3">S.No</th>
              <th className="px-4 py-3">Category Name</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr
                key={cat._id}
                className="bg-white border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{cat.categoryName}</td>
                <td className="px-4 py-3">
                  {cat.image && (
                    <img
                      src={`https://pinaka-furnitureadmin.onrender.com${cat.image}`}
                      alt={cat.categoryName}
                      className="w-12 h-12 object-cover rounded"
                    />
                  )}
                </td>
                <td className="px-4 py-3 text-center space-x-3">
                  <button
                    onClick={() => openEditForm(cat)}
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(cat._id)}
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center px-4 py-6 text-gray-500">
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
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
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <Dialog.Title className="text-lg font-bold text-black text-center mb-4 cursor-pointer">
                  {editId ? "Update Category" : "Add Category"}
                </Dialog.Title>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    value={form.categoryName}
                    onChange={(e) => setForm({ ...form, categoryName: e.target.value })}
                    placeholder="Enter category name"
                    className="w-full px-4 py-2 border-2 border-neutral-900 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                    className="w-full px-4 py-2 border-2 border-neutral-900 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required={!editId}
                  />

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 cursor-pointer"
                    >
                      {editId ? "Update" : "Add"}
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
