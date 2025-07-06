// router.jsx
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute"; // Create this if not done

// User side
import MainLayout from "./App";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ProductDetail from "./Components/Productdetail/ProductDetail";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Error from "./Pages/Error";

// Admin side
import AdminDashboard from "./admin/AdminDashboard";
import ProductPage from "./admin/pages/ProductPage";
import CategoryPage from "./admin/pages/CategoryPage";
import OrderPage from "./admin/pages/QuotePage";
import Dashboard from "./admin/pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "product/productdetail/:id", element: <ProductDetail /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <Error /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRole="admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Dashboard /> },
      { path: "products", element: <ProductPage /> },
      { path: "categories", element: <CategoryPage /> },
      { path: "orders", element: <OrderPage /> },
    ],
  },
]);

export default router;
