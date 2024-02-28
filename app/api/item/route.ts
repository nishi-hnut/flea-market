import { promises } from "fs";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

type Item = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  price: number;
};

export async function GET(request: NextRequest) {
  const itemId = request.nextUrl.searchParams.get("id");

  if (itemId == undefined) {
    return new Response("商品IDが指定されていません", { status: 500 });
  }

  const file = await promises.readFile(
    process.cwd() + "/app/api/data_items.json",
    "utf8"
  );
  const data = JSON.parse(file);

  const items = data.items as Item[];
  const item = items.find((item) => item.id == itemId);

  const response = JSON.stringify({
    item: item,
  });

  return new Response(response, {
    status: 200,
  });
}
