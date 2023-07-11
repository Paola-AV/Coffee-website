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

/*
<img src={slide_image_2} alt="slide_image" />
<div id="bow"></div>
      <div id='centerC'>
              <Carousel id="carHolder">
                  <Carousel.Item id='carousel'>
                      <img
                          onClick={()=>navigate('Galeria')}
                          className="d-block w-100"
                          src="cafeSol.PNG"
                          alt="First slide"
                          class="carImg" />
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                          onClick={()=>navigate('Galeria')}
                          className="d-block w-100"
                          src="chemex.PNG"
                          alt="Second slide"
                          class="carImg" />
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                          onClick={()=>navigate('Galeria')}
                          className="d-block w-100"
                          src="tostadora.PNG"
                          alt="Third slide"
                          class="carImg" />
                  </Carousel.Item>
              </Carousel>
          </div>*/

/*function Galeria() {

    return (

        <section id="galeria">
            <div id="tittleGal">
                <h1 id="tittleGaleria">Galeria</h1>
            </div>
            <div id="bow"></div>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="tostadora.PNG" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="cafeSol.PNG" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="chemex.PNG" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </section>


    )

}

export default Galeria;*/