"use client"

import Link from "next/link"
import { useState } from "react"

type Text = {
  title: string
}

type Description = {
  description: string
}

type Price = {
  price: string
}

type Image = {
  image: string
}

export function Listing() {
  const [text, setText] = useState<string>("")
  const [price, setPrice] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [image, setImage] = useState<string>("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
  }
  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }
  const handleInputChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const buttonClick = () => {
    console.log(text)
    console.log(price)
    console.log(description)
    console.log(image)
  }

  return (
    <main className="relative">
      <div className="w-full border-b-2 sticky top-0 z-10 bg-white">
        <div className="flex justify-between max-w-7xl mx-auto p-4 text-center">
          <Link href="/items">
            <h2 className="text-xl font-bold p-2">メルカリ</h2>
          </Link>
          <ul className="flex p-2 ml-3">
            <li className="pr-5">ログイン</li>
            <li className="pr-5">新規登録</li>
            <li>
              <Link href="/items" className="p-2">
                一覧
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex max-w-5xl mx-auto justify-center">
          {/* 左側画像設置 */}
          <div className="mr-48 w-2/5">
            <h1 className="text-xl font-bold">商品画像の設定</h1>
            <div className="mt-5">
              <img
                className="w-96 h-96"
                src="/mountain-8168060_640.jpg"
                alt=""
              />
            </div>
            <input
              type="file"
              onChange={handleInputChange3}
              placeholder="画像追加"
              className="border p-1 text-center w-full mt-5"
            />
          </div>
          {/* 左側画像設置ここまで */}

          {/* 右側商品詳細 */}
          <div className="w-3/5">
            <h2 className="text-xl font-bold">商品情報</h2>
            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <h2>
                  <span className="border p-1 bg-green-500 rounded-xl text-sm text-white mr-2">
                    必須
                  </span>
                  商品名
                </h2>
                <input
                  type="text"
                  value={text}
                  onChange={handleInputChange}
                  placeholder="例）レンジ"
                  className="mt-5 border rounded h-12 w-full bg-gray-100 flex-1 px-4"
                />
              </div>

              <div className="mt-5">
                <h2>
                  <span className="border p-1 bg-green-500 rounded-xl text-sm text-white mr-2">
                    必須
                  </span>
                  値段
                </h2>
                <input
                  type="text"
                  value={price}
                  onChange={handleInputChange1}
                  placeholder="例）1000"
                  className="mt-5 border rounded h-12 w-full bg-gray-100 flex-1 px-4"
                />
              </div>

              <div className="mt-14">
                <h2>
                  <span className="border p-1 bg-green-500 rounded-xl text-sm text-white mr-2">
                    必須
                  </span>
                  商品説明
                </h2>
                <textarea
                  type="text"
                  value={description}
                  onChange={handleInputChange2}
                  placeholder="例）レンジです"
                  className="mt-5 border rounded h-36 w-full bg-gray-100 flex-1 px-4 py-2"
                />
              </div>
              <button
                type="submit"
                onClick={buttonClick}
                className="bg-red-500 text-white w-full py-3 rounded mt-10 hover:bg-red-400"
              >
                出品する
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Listing