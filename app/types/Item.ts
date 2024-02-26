const Goods = () => {
  type Item = {
    id: string;
    title: string;
    description?: string;
    imgUrl: string;
    price: number;
  };

  const items: Item[] = [
    {
      id: "1",
      title: "レンジ",
      description: "レンジです",
      imgUrl: "a",
      price: 100,
    },
    {
      id: "2",
      title: "冷蔵庫",
      description: "冷蔵庫です",
      imgUrl: "a",
      price: 200,
    },
    {
      id: "3",
      title: "炊飯器",
      description: "炊飯器ですです",
      imgUrl: "a",
      price: 300,
    },
  ];
};
