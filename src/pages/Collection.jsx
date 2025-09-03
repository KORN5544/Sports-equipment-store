import React from "react";
import CardList from "../components/CardList";
import allCardData from "../service/allCardData";

const Collection = () => {
  const cardDataShoe = allCardData.filter((card) => card.location === "Shoe");
  const cardDataShirt = allCardData.filter((card) => card.location === "Shirt");
  const cardDataPants = allCardData.filter((card) => card.location === "Pants");
  const cardDataEquipment = allCardData.filter((card) => card.location === "Equipment");

  return (
    <>
      <section className="bg-gray-100 py-8 ">
        <main className=" container mx-auto">
          <h1 className="text-3xl font-bold text-black mb-6">
            Shoes
          </h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
          <CardList cardData={cardDataShoe} />
        </main>
      </section>

      <section className="bg-[#e5e5e5] py-8">
        <main className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Shirt
          </h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
          <CardList cardData={cardDataShirt} />
        </main>
      </section>

      <section className="bg-gray-100 py-8">
        <main className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Pants
          </h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
          <CardList cardData={cardDataPants} />
        </main>
      </section>

      <section className="bg-[#e5e5e5] py-8 min-h-screen flex flex-col">
        <main className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Equipment
          </h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
          <CardList cardData={cardDataEquipment} />
        </main>
      </section>
    </>
  );
};

export default Collection;