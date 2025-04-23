import React from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Product from "./pages/Product";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { Toaster } from "react-hot-toast";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/*" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <div className="relative min-h-screen h-fit ">
      <Toaster
  position="top-center" // for success/error
  toastOptions={{
    success: {
      duration: 3000,
      style: { /* optional custom styles */ }
    },
    error: {
      duration: 3000,
      style: { /* optional custom styles */ }
    }
  }}
/>
      <Router>
        <ScrollToTop />
        <div className="realtive h-fit">
          <Navbar />
        </div>
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
