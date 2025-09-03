import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useContext(CartContext);

  // toggle open/close
  const toggleCart = () => setShowCart(prev => !prev);

  return (
    <header className="bg-red-600 text-white p-4 relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/picture/basketball.png" alt="logo" className="inline-block mr-2 w-20" />
          <h1 className="text-2xl font-bold">Sports Equipment</h1>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="font-bold text-xl hover:underline">Home</Link>
          <Link to="/Collection" className="font-bold text-xl hover:underline">Product</Link>
          <Link to="/Contact" className="font-bold text-xl hover:underline">Contact</Link>
        </nav>

        <button
          onClick={toggleCart}
          className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition ml-4"
        >
          🛒 ตะกร้า ({cart.length})
        </button>
      </div>

      {/* ตะกร้าเลื่อนจากขวา */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg border-l transform transition-transform duration-300 z-50
          ${showCart ? "translate-x-0" : "translate-x-full"}`}
      >
        <Cart />
      </div>

      {/* overlay ด้านหลังสำหรับกดปิด */}
      {showCart && (
        <div
          className="fixed inset-0  bg-opacity-30 z-40"
          onClick={toggleCart}
        ></div>
      )}
    </header>
  );
};

export default Header;
