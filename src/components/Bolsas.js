import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

function Bolsas() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return (
        <section id="bolsasSec">

            <span id="spanBolsas"></span>

            <div className="bolsaComp">
                <div id="RoundBolsas">
                    <div data-aos="fade-right">
                        <div id="largeBolsas1">
                            <div id="HBolsas1">
                                <h2 id="bolsaTittle">Lorem Ipsum</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/Paquete.png" id="imgBolsa" />
            </div>


            <div className="bolsaComp">
                <div id="RoundBolsas">
                    <div data-aos="fade-right">
                        <div id="largeBolsas">
                            <div id="HBolsas">
                                <h2 id="bolsaTittle">Lorem Ipsum</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/Paquete.png" id="imgBolsa" />
            </div>

            <div className="bolsaComp">
                <div id="RoundBolsas">
                <div data-aos="fade-right">
                <div id="largeBolsas1">
                        <div id="HBolsas1">
                            <h2 id="bolsaTittle">Lorem Ipsum</h2>
                        </div>
                    </div>
                </div>
                   
                </div>
                <img src="/Paquete.png" id="imgBolsa" />
            </div>


        </section>
    )

}

export default Bolsas;