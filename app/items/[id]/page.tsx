import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="w-full border-b-2 sticky top-0 z-10 bg-white">
        <div className="flex justify-between max-w-7xl mx-auto p-4 text-center">
          <h2 className="text-xl font-bold p-2">メルカリ</h2>
          <ul className="flex p-2 ml-3">
            <li className="pr-5">ログイン</li>
            <li className="pr-5">新規登録</li>
            <li>
              <Link href="/pages" className=" p-2">
                出品
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex max-w-5xl mx-auto container mt-6">
        <div className="w-3/5 h-3/5">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.pixabay.com/photo/2023/06/03/13/44/bird-8037744_1280.jpg"
          />
        </div>

        <div className="ml-11 w-2/5">
          <div className="text-2xl font-bold">
            日立 コンパクト ヘルシーシェフ 過熱水蒸気オーブンレンジ MRO-FS7
          </div>
          <div className="text-xl mt-5">¥5,800</div>
          <button className="bg-red-500 text-white w-full py-3 rounded mt-10 hover:bg-red-400">
            購入手続きへ
          </button>
          <h2 className="text-2xl font-bold text-gray-700 mt-10">商品の説明</h2>

          <h2 className="mt-5">レンジです</h2>
        </div>
      </div>
    </main>
  );
};

export default page;
