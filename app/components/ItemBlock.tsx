import React from "react";

interface ItemProps {
  id: string;
  title: string;
  description?: string;
  imgUrl: string;
  price: number;
}

const ItemBlock = ({ id, title, description, imgUrl, price }: ItemProps) => {
  return (
    <div className="border p-4">
      <div key={id} className="w-full h-64 bg-gray-400 relative">
        <img className="w-full h-full object-cover absolute" src={imgUrl} />
      </div>
      <p className="mt-2">{title}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default ItemBlock;
