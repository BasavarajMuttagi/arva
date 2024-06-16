import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Skeleton from "react-loading-skeleton";
const ImageSlider = ({
  isLoading,
  images,
  isError,
}: {
  isLoading: boolean;
  isError: boolean;
  images: string[];
}) => {
  if (isLoading) {
    return <Skeleton className="h-full bg-slate-100"></Skeleton>;
  }

  if (isError) {
    return (
      <div className="h-full bg-red-300 flex justify-center items-center">
        <p className="text-2xl text-wrap font-bold text-slate-800">
          Something Went Wrong !
        </p>
      </div>
    );
  }
  if (images.length == 0) {
    return (
      <div className="h-full bg-sky-300 flex justify-center items-center">
        <p className="text-2xl text-wrap font-bold text-slate-800">
          Images Coming Soon !
        </p>
      </div>
    );
  }
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper h-full"
    >
      {images.map((url, index) => (
        <SwiperSlide key={index}>
          <img src={url} className="h-full w-full object-fill" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
