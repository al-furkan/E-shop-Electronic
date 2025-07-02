import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SpringProductCard from "./SpringProductCard";
import { SpringSaleData } from "./SpringSaleData";
import NextButton from "../featuredProducts/NextButton";
import PrevButton from "../featuredProducts/PrevButton";

const SpringRight = () => {
  return (
    <div className="relative">
      {/* Custom Navigation Buttons */}
      <div className="absolute top-2/4 -translate-y-2/4 -right-5 z-30 swiper-button-next-spring">
        <NextButton />
      </div>
      <div className="absolute top-2/4 -translate-y-2/4 -left-5 z-30 swiper-button-prev-spring">
        <PrevButton />
      </div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-spring",
          prevEl: ".swiper-button-prev-spring",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 40,
          },
        }}
      >
        {SpringSaleData?.map((product) => (
          <SwiperSlide key={product.id}>
            <SpringProductCard
              image={product?.image}
              ratings={product.ratings}
              pCategory={product.pCategory}
              pName={product.pName}
              totalRatings={product.totalRatings}
              price={product.price}
              discount={product.discount}
              sold={product.sold}
              stock={product.stock}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpringRight;
