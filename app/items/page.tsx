"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const items = [
    {
      id: "1",
      title: "レンジ",
      description: "レンジです",
      imgUrl:
        "https://cdn.pixabay.com/photo/2023/06/03/13/44/bird-8037744_1280.jpg",
      price: 100,
    },
    {
      id: "2",
      title: "冷蔵庫",
      description: "冷蔵庫です",
      imgUrl:
        "https://cdn.pixabay.com/photo/2023/10/13/08/32/bird-8312424_1280.jpg",
      price: 200,
    },
    {
      id: "3",
      title: "炊飯器",
      description: "炊飯器です",
      imgUrl:
        "https://cdn.pixabay.com/photo/2023/05/11/15/14/honey-bee-7986647_1280.jpg",
      price: 300,
    },
    {
      id: "1",
      title: "レンジ",
      description: "レンジです",
      imgUrl:
        "https://cdn.pixabay.com/photo/2023/06/03/13/44/bird-8037744_1280.jpg",
      price: 100,
    },
    {
      id: "2",
      title: "冷蔵庫",
      description: "冷蔵庫です",
      imgUrl:
        "https://cdn.pixabay.com/photo/2023/10/13/08/32/bird-8312424_1280.jpg",
      price: 200,
    },
    {
      id: "3",
      title: "炊飯器",
      description: "炊飯器ですです",
      imgUrl:
        "https://cdn.pixabay.com/photo/2023/05/11/15/14/honey-bee-7986647_1280.jpg",
      price: 300,
    },
  ];

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("/api/items");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchItems();
  }, []);

  return (
    <main>
      <div className="w-full bg-red-100">
        <div className="flex justify-between bg-blue-200 max-w-5xl mx-auto p-4">
          <h2 className="text-xl font-bold bg-yellow-200 p-2">メルカリ</h2>
          <Link href="/pages" className="bg-green-200 p-2">
            出品
          </Link>
        </div>
      </div>
      <div className="max-w-5xl mx-auto my-8 p-4">
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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
