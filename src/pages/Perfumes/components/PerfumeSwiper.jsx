import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperSlideComp from './SwiperSlideComp';

export default function PerfumeSwiper() {
    const slideFunc = (header, text, btnBg, img) => ({ header, text, btnBg, img })
    const slideArr = [
        slideFunc(
            'The Blue Jay',
            'Inspired by Hawaiian Blue Jays, This perfume gives of the scent of oceans, rain and calming breeze. With this scent, you can never go wrong whether its formal or informal.',
            "bg-cyan-800",
            "slide1.png"
        ),
        slideFunc(
            'The Forest nest',
            'Inspired by Amazons , This perfume gives of the scent of forests, rain and calming breeze. With this scent, you can never go wrong whether its formal or informal.',
            "bg-green-800",
            "slide2.png"
        ),
        slideFunc(
            'The Sun burst ',
            'Inspired by Warm Summer , This perfume gives of the scent of sun, grass and calming breeze. With this scent, you can never go wrong whether its formal or informal.',
            "bg-yellow-800",
            "slide4.png"
        ),
        slideFunc(
            'The Selective Rose',
            "Inspired by Midgard Roses , This perfume gives of the scent of roses, grass and calming breeze. With this scent, you can never go wrong whether its formal or informal.",
            "bg-red-400",
            "slide3.png"
        ),
    ]
    return (

        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {slideArr.map((i, index) => (
                    <SwiperSlide key={index}>
                        <SwiperSlideComp header={i.header} text={i.text} btnBg={i.btnBg} img={i.img} white={index === 3 ? true : false} />
                    </SwiperSlide>
                ))}
                <p className=' text-green-800'></p>
            </Swiper>
        </>
    )
}
