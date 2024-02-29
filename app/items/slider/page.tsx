import Image from "next/image";

// オプションをインポートする
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// publicフォルダの画像
const images = [
  "/mountain-8168060_640.jpg",
  "/mountain-8168060_640.jpg",
  "/mountain-8168060_640.jpg",
  "/mountain-8168060_640.jpg",
];

export default function BasicSlider() {
  // ブレイクポイントに基づいて1つのスライドに表示するスライドの数を指定
  const slideSettings = {
    0: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={slideSettings} // slidesPerViewを指定
      slidesPerView={"auto"} // ハイドレーションエラー対策
      centeredSlides={true} // スライドを中央に配置
      loop={true} // スライドをループさせる
      speed={1000} // スライドが切り替わる時の速度
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }} // スライド表示時間
      navigation // ナビゲーション（左右の矢印）
      pagination={{
        clickable: true,
      }} // ページネーション, クリックで対象のスライドに切り替わる
      className="w-full"
    >
      {images.map((src: string, index: number) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            width={1920}
            height={100}
            alt="Slider Image"
            sizes="(min-width: 1024px) 100vw, 60vw"
            className="object-cover h-10"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
