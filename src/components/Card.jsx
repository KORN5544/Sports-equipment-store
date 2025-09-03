import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Card = ({ id, title, description, price, imageUrl, title1}) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="rounded-md overflow-hidden shadow-lg bg-gray-150 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer bg-white">
      <Link to={`/card_detail/${id}`}>
        <img className="w-full h-60 object-cover" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <h2 className="font-bold text-xl mb-2">{title1}</h2>
          <p className="text-gray-700 text-base">{description}</p>
          <p className="font-bold text-green-400 text-xl mb-2">{price} ฿</p>
        </div>
      </Link>
      <button
        onClick={() => addToCart({ id, title, price, imageUrl })}
        className="w-full mt-2 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
      >
        ซื้อ
      </button>
    </div>
  );
};

export default Card;
