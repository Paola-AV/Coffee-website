import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../CarrouselImg/cafeSol.PNG';
import slide_image_2 from '../CarrouselImg/chemex.PNG';
import slide_image_3 from '../CarrouselImg/tostadora.PNG';

function Galeria() {
    const navigate=useNavigate()
  return (
    <section id='galeria'>
         <div id="tittleGal">
              <h1 id="tittleGaleria">Galeria</h1>
          </div>
          <div className="container">
              <Swiper
                  spaceBetween={50}
                  slidesPerView={6}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    400:{
                      slidesPerView:2,
                    },
                    639: {
                      slidesPerView: 3,
                    },
                    865:{
                      slidesPerView:4
                    },
                    1000:{
                      slidesPerView:5
                    },
                    1500:{
                      slidesPerView:6
                    },
                    1700:{
                      slidesPerView:7
                    }
                  }}
              >
                  <SwiperSlide><img src={slide_image_1} alt="slide_image" /></SwiperSlide>
                  <SwiperSlide><img src={slide_image_2} alt="slide_image" /></SwiperSlide>
                  <SwiperSlide><img src={slide_image_3} alt="slide_image" /></SwiperSlide>
              </Swiper>
          </div>
    </section>
  );
}

export default Galeria;