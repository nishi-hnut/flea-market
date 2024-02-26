import Image from "next/image";
import Link from "next/link";
import ItemBlock from "../components/ItemBlock";

export default function Home() {
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
          <ItemBlock
            id="1"
            title="鳥"
            description="鳥です"
            price={100}
            imgUrl="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg"
          />
        </div>
      </div>
    </main>
  );
}
