import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperData from './SwiperData';
import SwiperCard from './SwiperCard';


export default function SwiperSlider() {

     return (
          <>
               <Swiper

                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                         clickable: true,
                    }}
                    breakpoints={{
                         640: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                         },
                         768: {
                              slidesPerView: 1,
                              spaceBetween: 40,
                         },
                         1024: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                         },
                    }}
                    autoplay={{
                         delay: 2500,
                         disableOnInteraction: false,
                    }}

                    loop={true}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
               >
                    {
                         SwiperData?.map(item => <SwiperSlide key={item?.id}> <SwiperCard Card={item}></SwiperCard></SwiperSlide>)
                    }


               </Swiper>
          </>
     );
}
