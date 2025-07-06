import { NavLink, useNavigate } from "react-router-dom";
import {
  FaThList,
  FaBoxOpen,
  FaSignOutAlt,
  FaTachometerAlt,
  FaClipboardList,
} from "react-icons/fa";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside className="w-64 h-screen fixed top-0 left-0 bg-black text-white p-6 shadow-lg z-50">
      <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
        Pinaka Art & Exports
      </h2>

      <nav className="space-y-4 pt-6">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            (isActive ? "text-black bg-amber-50" : "hover:text-black hover:bg-amber-50") +
            " flex items-center gap-3 text-base font-lg transition duration-200 px-4 py-2 rounded shadow"
          }
        >
          <FaTachometerAlt /> Dashboard
        </NavLink>

        <NavLink
          to="/admin/categories"
          className={({ isActive }) =>
            (isActive ? "text-black bg-amber-50" : "hover:text-black hover:bg-amber-50") +
            " flex items-center gap-3 text-base font-lg transition duration-200 px-4 py-2 rounded shadow"
          }
        >
          <FaThList /> Categories
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            (isActive ? "text-black bg-amber-50" : "hover:text-black hover:bg-amber-50") +
            " flex items-center gap-3 text-base font-lg transition duration-200 px-4 py-2 rounded shadow"
          }
        >
          <FaBoxOpen /> Products
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            (isActive ? "text-black bg-amber-50" : "hover:text-black hover:bg-amber-50") +
            " flex items-center gap-3 text-base font-lg transition duration-200 px-4 py-2 rounded shadow"
          }
        >
          <FaClipboardList /> Orders
        </NavLink>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-left text-red-400 hover:text-red-200 text-base font-lg transition duration-200 px-4 cursor-pointer"
        >
          <FaSignOutAlt /> Logout
        </button>
      </nav>
    </aside>
  );
}
