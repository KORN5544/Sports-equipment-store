import React from "react";
import { Link } from "react-router-dom";
import CardList from "../components/CardList";
import cardData from "../service/allCardData"; // ข้อมูลสินค้า

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center min-h-screen flex flex-col py-8"
        style={{ backgroundImage: "url('https://wallpaperaccess.com/full/1103828.jpg')" }}
      >
        <div className="bg-opacity-50 w-full h-full flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h2 className="text-6xl font-bold mb-4">EQUIPMENT</h2>
            <h1 className="text-4xl font-bold leading-relaxed mb-4">BASKETBALL</h1>
            <p className="text-2xl font-bold leading-relaxed mb-4">Up to 20% off selected items</p>
            <Link
              to="/Collection"
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-800 transition duration-500"
            >
              Product 🏀
            </Link>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="container mx-auto px-4 py-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">สินค้าแนะนำ</h2>
        <CardList cardData={cardData} />
      </section>
    </>
  );
};

export default Home;
