import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="w-full bg-red-100">
        <div className="flex justify-between bg-blue-200 max-w-5xl mx-auto p-4">
          <h2 className="text-xl font-bold bg-yellow-200 p-2">メルカリ</h2>
          <a className="bg-green-200 p-2">出品</a>
          <Link href="/pages">出品</Link>
        </div>
      </div>
      <div className="max-w-5xl mx-auto my-8 p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="border p-4">
            <div className="w-full h-64 bg-gray-400 relative">
              <img
                className="w-full h-full object-cover absolute"
                src="https://cdn.pixabay.com/photo/2023/06/03/13/44/bird-8037744_1280.jpg"
              />
            </div>
            <p className="mt-2">鳥</p>
          </div>
          <div className="border p-4">
            <div className="w-full h-64 bg-gray-400 relative">
              <img
                className="w-full h-full object-cover absolute"
                src="https://cdn.pixabay.com/photo/2023/10/13/08/32/bird-8312424_1280.jpg"
              />
            </div>
            <p className="mt-2">鳥</p>
          </div>
          <div className="border p-4">
            <div className="w-full h-64 bg-gray-400 relative">
              <img
                className="w-full h-full object-cover absolute"
                src="https://cdn.pixabay.com/photo/2023/05/11/15/14/honey-bee-7986647_1280.jpg"
              />
            </div>
            <p className="mt-2">蜂</p>
          </div>
        </div>
      </div>
    </main>
  );
}
