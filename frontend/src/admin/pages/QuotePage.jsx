import { useEffect, useState } from "react";
import API from "../api";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function QuotePage() {
    const [quotes, setQuotes] = useState([]);

    const fetchQuotes = async () => {
        try {
            const res = await API.get("/quotes");
            setQuotes(res.data);
        } catch (err) {
            toast.error("Failed to fetch quotes");
        }
    };

    useEffect(() => {
        fetchQuotes();
    }, []);

    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this quote?");
        if (!confirm) return;
        try {
            await API.delete(`/quotes/${id}`);
            toast.success("Quote deleted");
            fetchQuotes();
        } catch {
            toast.error("Failed to delete quote");
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Quotes</h2>
            </div>

            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="w-full text-sm text-left text-gray-700">
                    <thead className="text-xs text-white uppercase bg-gray-800">
                        <tr>
                            <th className="px-4 py-3">S.No</th>
                            <th className="px-4 py-3">image</th>
                            <th className="px-4 py-3">Product</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Phone</th>
                            <th className="px-4 py-3">Color</th>
                            <th className="px-4 py-3">Type</th>
                            <th className="px-4 py-3">Cushion</th>
                            <th className="px-4 py-3">Size</th>
                            <th className="px-4 py-3">Qty</th>
                            <th className="px-4 py-3">Message</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quotes.map((q, index) => (
                            <tr key={q._id} className="bg-white border-b hover:bg-gray-50 transition">
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2 flex items-center gap-3">
                                    {q.productId?.image && (
                                        <img
                                            src={`https://pinaka-furnitureadmin.onrender.com${q.productId.image}`}
                                            alt={q.productId?.productName}
                                            className="w-12 h-12 object-cover rounded"
                                        />
                                    )}
                                </td>
                                <td className="px-4 py-2">
                                    {q.productId?.productName || "N/A"}
                                </td>
                                <td className="px-4 py-2">{q.name}</td>
                                <td className="px-4 py-2">{q.number}</td>
                                <td className="px-4 py-2">{q.color}</td>
                                <td className="px-4 py-2">{q.type}</td>
                                <td className="px-4 py-2">{q.cushion}</td>
                                <td className="px-4 py-2">
                                    {q.height} x {q.width}
                                </td>
                                <td className="px-4 py-2">{q.quantity}</td>
                                <td className="px-4 py-2">{q.message}</td>
                                <td className="px-4 py-2">
                                    <button
                                        onClick={() => handleDelete(q._id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {quotes.length === 0 && (
                            <tr>
                                <td colSpan="11" className="text-center px-4 py-6 text-gray-500">
                                    No quotes found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <ToastContainer />
        </div>
    );
}
