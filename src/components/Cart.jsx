import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <div className="p-4 h-full flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-gray-900">🛒 ตะกร้าสินค้า</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">ยังไม่มีสินค้าในตะกร้า</p>
      ) : (
        <div className="flex-1 overflow-y-auto">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border-b py-2">
              <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover mr-2 rounded" />
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-green-500">{item.price} ฿ x {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 ml-2"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 font-bold text-lg flex justify-between text-gray-800">
        <span>รวมทั้งหมด:</span>
        <span>{getTotalPrice()} ฿</span>
      </div>
    </div>
  );
};

export default Cart;
