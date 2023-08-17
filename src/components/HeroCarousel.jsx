import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroImages from "./HeroImages";

export default function HeroCarousel() {
  const images = Array.from({ length: 9 }, (_, index) => `${index + 1}.webp`);

  return (
    <div
      className="w-full 
      "
    >
      <Swiper
        className="flex flex-col"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={imageUrl}>
            <HeroImages index={index} imageUrl={imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
