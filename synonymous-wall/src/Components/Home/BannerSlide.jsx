// import React, { useRef, useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import "./BannerSlide.css"


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";

export default function BannerSlide() {
    return (
        <div id="silde-img">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                // navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="banner-img">
                    <img src="https://i.ibb.co/9cWMgk0/Banner-4.png" alt="Banner-1" />
                </SwiperSlide>
                <SwiperSlide className="banner-img">
                    <img src="https://i.ibb.co/wJDCYkc/Banner-2.png" alt="Banner-2" />
                </SwiperSlide>
                <SwiperSlide className="banner-img">
                    <img src="https://i.ibb.co/Y0Mq3C6/Banner-5.png" alt="Banner-3" />
                </SwiperSlide>
                <SwiperSlide className="banner-img">
                    <img src="https://i.ibb.co/wJDCYkc/Banner-2.png" alt="Banner-4" />
                </SwiperSlide>
                <SwiperSlide className="banner-img">
                    <img src="https://i.ibb.co/k1mY9YK/Banner-3.png" alt="Banner-5" />
                </SwiperSlide>
            </Swiper>
            <p className="banner-para">Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.</p>
            <div className="banner-btn-box">
                <button className='banner-demo-btn' >
                    <div className="banner-get-demo-btn" >Get a Demo</div><div style={{ color: "white", marginLeft: '5px', fontWeight: 'lighter' }} className='arrow'> ➔</div>
                </button>
                <button className='banner-demo-btn2' colorScheme='teal' variant='outline'>
                    <div >Sign up for free</div><div style={{ marginLeft: '5px', fontWeight: 'lighter' }} className='arrow'> ➔</div>
                </button>

            </div>
            <div className="sliding-image">
                {/* <img src="https://i.ibb.co/Y3B6LMh/sliding.gif" alt="sliding" /> */}
                <img src="https://i.ibb.co/cTYNwyD/Slider.gif" alt="Slider" />
            </div>
        </div>
    );
}

