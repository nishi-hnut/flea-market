import React, { FC } from "react";

type Item = {
  id: string;
  title: string;
  description?: string;
  imgUrl: string;
  price: number;
};
type Goods = {
  items: Item[];
};

const ItemBlock: React.FC<Goods> = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <div className="border p-4">
          <div key={item.id} className="w-full h-64 bg-gray-400 relative">
            <img
              className="w-full h-full object-cover absolute"
              src={item.imgUrl}
            />
          </div>
          <p className="mt-2">{item.title}</p>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemBlock;
