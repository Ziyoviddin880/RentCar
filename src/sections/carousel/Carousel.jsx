import useWindowWidth from "../../hooks/useWindowWidth/useWindowWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/zoom";
import "./carousel.css";

const Carousel = () => {
  const widthWindow = useWindowWidth();
  return (
    <div className="">
      <div className="container mx-auto ">
        <Swiper
          modules={[Navigation, Pagination, Zoom, EffectCoverflow]}
          spaceBetween={50}
          slidesPerView={widthWindow < 768 ? 1 : 3}
          centeredSlides={true}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          zoom={{
            maxRatio: 100,
          }}
        >
          <SwiperSlide>
            <img
              src="https://terra-rentacar.uz/assets/1W-CCFlS9pW.png"
              alt="Carousel"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://terra-rentacar.uz/assets/2W-RcGsQ6_1.png"
              alt="Carousel"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://terra-rentacar.uz/assets/4W-CpaXs4Oo.png"
              alt="Carousel"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://terra-rentacar.uz/assets/3W-C2l-m8Z-.png"
              alt="Carousel"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
