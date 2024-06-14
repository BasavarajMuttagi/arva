import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const ImageSlider = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper h-full"
    >
      <SwiperSlide>
        <img
          src="https://picsum.photos/200/300"
          className="h-full w-full object-fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/200/300"
          className="h-full w-full object-fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/200/300"
          className="h-full w-full object-fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/200/300"
          className="h-full w-full object-fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/200/300"
          className="h-full w-full object-fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/200/300"
          className="h-full w-full object-fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/200/300"
          className="h-full w-full object-fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/200/300"
          className="h-full w-full object-fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/200/300"
          className="h-full w-full object-fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/200/300"
          className="h-full w-full object-fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/200/300"
          className="h-full w-full object-fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/200/300"
          className="h-full w-full object-fill"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
