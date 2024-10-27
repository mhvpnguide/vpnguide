'use client'
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
const SwiperCard = dynamic(() => import('./SwiperCard'), { ssr: false });


interface ReviewProps {
  reviews: {
    img: String,
    rating: number,
    review: String,
    author: String,
    company_link: { name: string; value: string };

  }[];
}

const CardSlider: React.FC<ReviewProps> = ({ reviews }) => {
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial call to set the initial window width
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
      slidesPerView={'auto'}
      centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Navigation,Pagination]}
        className="mySwiper"
      >
        {
          reviews.map((itm, idx) => (
            <SwiperSlide key={idx} >
              <SwiperCard review={itm} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

export default CardSlider;
