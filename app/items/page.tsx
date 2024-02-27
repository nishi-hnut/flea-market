"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState();

  // useEffect(() => {
  //   fetch("/api/items")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //     });
  // }, []);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("/api/items");
        const dataj = await response.json();
        setPosts(dataj.data);
        console.log(dataj);
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
          {posts.map((item) => (
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
