"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

type Item = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  price: number;
};

const page = ({ params }: { params: { id: string } }) => {
  console.log(params);
  const id = params.id;
  console.log(id);

  const [item, setItem] = useState<Item>();

  useEffect(() => {
    async function fetchItem() {
      const url = `/api/item?id=${id}`;

      try {
        const response = await fetch(url);
        const itemData = await response.json();
        console.log(itemData);
        setItem(itemData.item);
      } catch (error) {
        console.log("Fetch error:", error);
      }
    }
    fetchItem();
  }, []);

  return (
    <main>
      <div className="w-full border-b-2 sticky top-0 z-10 bg-white">
        <div className="flex justify-between max-w-7xl mx-auto p-4 text-center">
          <h2 className="text-xl font-bold p-2">メルカリ</h2>
          <ul className="flex p-2 ml-3">
            <li className="pr-5">ログイン</li>
            <li className="pr-5">新規登録</li>
            <li>
              <Link href="/pages" className="p-2">
                出品
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div key={item?.id} className="flex max-w-5xl mx-auto container mt-6">
        <div className="w-3/5 h-3/5">
          <img className="w-full h-full object-cover" src={item?.image_url} />
        </div>

        <div className="ml-11 w-2/5">
          <div className="text-2xl font-bold">{item?.title}</div>
          <div className="text-xl mt-5">{item?.price}</div>
          <button className="bg-red-500 text-white w-full py-3 rounded mt-10 hover:bg-red-400">
            購入手続きへ
          </button>
          <h2 className="text-2xl font-bold text-gray-700 mt-10">商品の説明</h2>

          <h2 className="mt-5">{item?.description}</h2>
        </div>
      </div>
    </main>
  );
};

export default page;
