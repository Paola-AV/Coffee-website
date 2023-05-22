


function Galeria() {

    return (

        <section id="galeria">
            <div id="tittleGal">
                <h1 id="tittleGaleria">Galeria</h1>
            </div>
            <div id="bow"></div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="roast.PNG" class="d-block w-100" alt="granos de cafe en tostadora" />
                    </div>
                    <div class="carousel-item">
                        <img src="chemex.PNG" class="d-block w-100" alt="persona oliendo cafe en metodo chemex" />
                    </div>
                    <div class="carousel-item">
                        <img src="cup.PNG" class="d-block w-100" alt="taza de cafe" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="18.66" height="34.655" viewBox="0 0 18.66 34.655">
                        <path id="Flecha_Abajo" data-name="Flecha Abajo" d="M17.327,0,0,18.66l17.327-6.255L34.655,18.66Z" transform="translate(0 34.655) rotate(-90)" fill="#424530" />
                    </svg></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.66" height="34.655" viewBox="0 0 18.66 34.655">
                            <path id="Flecha_Abajo" data-name="Flecha Abajo" d="M17.327,18.66,0,0,17.327,6.255,34.655,0Z" transform="translate(0 34.655) rotate(-90)" fill="#424530" />
                        </svg>
                    </span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </section>


    )

}

export default Galeria;