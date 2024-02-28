"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Item = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  price: number;
};

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("/api/items");
        const dataJ = await response.json();
        setItems(dataJ.items);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchItems();
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

      <div className="max-w-5xl mx-auto my-8 p-4">
        <div className="grid grid-cols-3 gap-4">
          {items.map((item) => (
            <Link href={`/items/${item.id}`}>
              <div className="border p-4">
                <div key={item.id} className="w-full h-64 bg-gray-400 relative">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image_url}
                  />
                  <p className="absolute top-0 text-gray text-xl my-1 px-7 py-1 bg-gray-50 bg-opacity-10 rounded-r-full">
                    ¥{item.price}
                  </p>
                </div>
                <p className="mt-2">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
