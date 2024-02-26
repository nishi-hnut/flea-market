import Image from "next/image";
import Link from "next/link";
import ItemBlock from "../components/ItemBlock";

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
      description: "炊飯器ですです",
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
        <ItemBlock items={items} />
      </div>
    </main>
  );
}
