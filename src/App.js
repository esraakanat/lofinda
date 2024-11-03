import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import About from "./pages/About/About";
import Perfume from "./pages/Perfumes/perfume";
import PerfumeDetails from "./pages/Perfumes/PerfumeDetails";
import Cart from "./pages/Perfumes/Cart/Cart";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ScrollToTop from "./ui/Scroll";
import Contact from "./pages/Contact/Contact";
import OrderHistory from "./pages/User/OrderHistory/OrderHistory";
import Profile from "./pages/User/Profle/Profile";
import WishList from "./pages/User/WishList/WishList";
import ShoppingCartProvider from "./context/ShoppingCartContext";
// import AdminLogin from "./admin/auth/AdminLogin";
import Dashboard from "./admin/pages/Dashboard/Dashboard";
import Customers from "./admin/pages/Customers/Customers";
import AddCustomer from "./admin/pages/Customers/AddCustomer";
import Products from "./admin/pages/Products/Products";
import AddProduct from "./admin/pages/Products/AddProduct";
import Orders from "./admin/pages/Orders/Orders";
import Example from "./pages/Auth/AdminLogin";
import AdminLogin from "./pages/Auth/AdminLogin";
import AdminStatsContextWrap from "./context/AdminStatsContext";
import PrivacyPolicy from "./pages/Homepage/components/PrivacyPolicy";

function App() {
  // window.api = "http://localhost:5000";
  window.api = "https://lofinda-server-aum3.onrender.com";
  return (
    <div className="App">
      <ScrollToTop />
      <AdminStatsContextWrap>
        <ShoppingCartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policies" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/perfumes" element={<Perfume />} />
            <Route path="/perfumes/detail" element={<PerfumeDetails />} />
            <Route path="/perfumes/cart" element={<Cart />} />

            {/* AUTH */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />

            {/* USER */}
            <Route path="/user/order/history" element={<OrderHistory />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/wishlist" element={<WishList />} />

            {/* ADMIN  */}
            <Route path="/administration/auth" element={<AdminLogin />} />
            <Route path="/administration/dashboard" element={<Dashboard />} />
            <Route path="/administration/customer" element={<Customers />} />
            <Route
              path="/administration/customer/add"
              element={<AddCustomer />}
            />

            <Route path="/administration/product" element={<Products />} />
            <Route
              path="/administration/product/add"
              element={<AddProduct />}
            />
            <Route path="/administration/orders" element={<Orders />} />
          </Routes>
        </ShoppingCartProvider>
      </AdminStatsContextWrap>
    </div>
  );
}

export default App;
