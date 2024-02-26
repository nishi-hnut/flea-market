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
            <img className="w-full h-full object-cover" src={item.imgUrl} />
            <p className="absolute top-0 text-gray text-xl my-1 px-7 py-1 bg-gray-50 bg-opacity-10 rounded-r-full">
              ¥{item.price}
            </p>
          </div>
          <p className="mt-2">{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemBlock;
