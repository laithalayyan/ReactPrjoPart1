import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function Catigories() {

    const [categories,setCat]=useState([]);
    const getCat = async () => {
        const response = await fetch('https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10');
        const data = await response.json();
        setCat(data.categories);
    }
    useEffect( ()=>{
        getCat();
    })

  return (
    <Swiper
      style={{ marginTop: '95px' }}
      spaceBetween={1}
      slidesPerView={7}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {categories.map((a, index) => (
          <SwiperSlide key={index}>
            <img src={a.image.secure_url} alt={a.name} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
