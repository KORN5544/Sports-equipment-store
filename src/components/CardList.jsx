import React from "react";
import Card from "./Card";

const CardList = ({ cardData }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
      {cardData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          title1={card.title1}
          description={card.description}
          price={card.price}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardList;
