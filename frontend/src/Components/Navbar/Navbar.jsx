import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../../assets/Banner/logo.png"; // Replace with your logo

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const updateUserFromStorage = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    // Initial check
    updateUserFromStorage();

    // Listen to login/logout changes
    window.addEventListener("userChanged", updateUserFromStorage);

    return () => {
      window.removeEventListener("userChanged", updateUserFromStorage);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    window.dispatchEvent(new Event("userChanged")); // Notify other components
    navigate("/login");
  };

  return (
    <div className="w-full">
      <div className="bg-white w-full shadow-md fixed top-0 left-0 z-[9999] py-5">
        <div className="container mx-auto px-4 md:px-24 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800">
            <img src={Logo} alt="Logo" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 relative">
            <NavLink to="/" className="text-gray-700 font-medium hover:text-[#029fae] transition">Home</NavLink>

            <div className="group relative">
              <button className="text-gray-700 font-medium hover:text-[#029fae] transition inline-flex items-center gap-1">
                Products <ChevronDown size={16} />
              </button>
              <ul className="absolute top-6 left-0 hidden group-hover:block bg-white shadow-md rounded-lg min-w-[160px] py-2 z-50 text-slate-900">
                <li><Link to="/products/chair" className="block px-4 py-2 hover:bg-gray-100">Chair</Link></li>
                <li><Link to="/products/stool" className="block px-4 py-2 hover:bg-gray-100">Bar Stool</Link></li>
                <li><Link to="/products/table" className="block px-4 py-2 hover:bg-gray-100">Table</Link></li>
                <li><Link to="/products/booth" className="block px-4 py-2 hover:bg-gray-100">Booth</Link></li>
                <li><Link to="/products/sofa" className="block px-4 py-2 hover:bg-gray-100">Sofa</Link></li>
              </ul>
            </div>

            <NavLink to="/about" className="text-gray-700 font-medium hover:text-[#029fae] transition">About Us</NavLink>

            <span className="flex text-gray-600 font-medium gap-1">
              <PhoneCall size={16} className="mt-1" />
              <p>+91-8070207080</p>
            </span>

            {/* ✅ Show user name or login/signup */}
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium">{user.name || user.email}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-[#029fae] text-white px-4 py-2 rounded-full hover:bg-[#027c8a] transition"
              >
                Login / Signup
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 py-4 bg-white border-t mt-2">
            <nav className="flex flex-col gap-4 text-base">
              <NavLink to="/" className="text-gray-700 hover:text-[#029fae]">Home</NavLink>

              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#029fae]"
                  onClick={() => setProductOpen(!productOpen)}
                >
                  Products <ChevronDown size={18} className={`${productOpen ? 'rotate-180' : ''} transition`} />
                </button>
                {productOpen && (
                  <ul className="pl-4 mt-2 flex flex-col gap-2 text-slate-900">
                    <li><Link to="/products/chair">Chair</Link></li>
                    <li><Link to="/products/stool">Bar Stool</Link></li>
                    <li><Link to="/products/table">Table</Link></li>
                    <li><Link to="/products/booth">Booth</Link></li>
                    <li><Link to="/products/sofa">Sofa</Link></li>
                  </ul>
                )}
              </div>

              <NavLink to="/about" className="text-gray-700 hover:text-[#029fae]">About Us</NavLink>

              <span className="flex text-gray-600 font-medium gap-1">
                <PhoneCall size={16} className="mt-1" />
                <p>+91-8070207080</p>
              </span>

              {/* ✅ Mobile Auth Buttons */}
              {user ? (
                <div className="flex flex-col gap-2">
                  <span className="text-gray-700 font-medium">{user.name || user.email}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-full"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-[#029fae] text-white px-4 py-2 rounded-full text-center w-fit"
                >
                  Login / Signup
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
