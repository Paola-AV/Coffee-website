import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

function Galeria() {
    const navigate=useNavigate()
  return (
    <section id='galeria'>
        <div id="tittleGal">
          <h1 id="tittleGaleria">Galeria</h1>
      </div><div id="bow"></div>
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
          </div>
    </section>
      
  );
}

export default Galeria;


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