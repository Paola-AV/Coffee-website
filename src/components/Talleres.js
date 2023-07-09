import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

function Talleres(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <section id="talleresSec">
            <h1 id="tallerTittle"> Talleres</h1>

            <div data-aos="fade-right" id="roundTalleres">
                <div  id="largeTalleres" >
                    <img id="tallerImg" src="taller.png" />
                    <div data-aos="fade-up" id="talleresDivP">
                        <h2>Lorem ipsum</h2>
                        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>

                </div>
            </div>

            <div data-aos="fade-right" id="roundTalleres1">
                <div id="largeTalleres1" >
                    <img id="tallerImg" src="taller.png" />
                    <div data-aos="fade-up" id="talleresDivP1">
                        <h2>Lorem ipsum</h2>
                        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>

                </div>
            </div>

            <div data-aos="fade-right" id="roundTalleres">
                <div  id="largeTalleres" >
                    <img id="tallerImg" src="taller.png" />
                    <div data-aos="fade-up" id="talleresDivP">
                        <h2>Lorem ipsum</h2>
                        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>

                </div>
            </div>
            

            
          
        </section>
    )
}

export default Talleres;