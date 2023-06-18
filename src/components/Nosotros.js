import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

function Nosotros() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <section id="nosotrosSec">
            <h1 id="aboutUsTittle"><span id="TittleColor1">Nuestra</span> Historia</h1>
            <div id="aboutRowSwitch">
                <div id="aboutImg">
                    <img src="bosque.PNG" id="imgRoundSwitch" />
                </div>
                <div data-aos="fade-up">
                <div id="aboutPSwitch">
                    <h2 id="aboutTitleSwitch">Lorem Ipsum</h2>
                    <p id="aboutParagraphSwitch">
                        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                        Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                    </p>
                </div>
                </div>
                
            </div>

            <div id="aboutRow">
                <div id="aboutPSwitch">
                    <h2 id="aboutTitleSwitch">Lorem Ipsum</h2>
                    <p id="aboutParagraphSwitch">
                        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                        Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                    </p>
                </div>

                <div id="aboutP">
                    <h2 id="aboutTitle">Lorem Ipsum</h2>
                    <p id="aboutParagraph">
                        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                        Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                    </p>
                </div>
                <div id="aboutImg">
                    <img src="cafetal.PNG" id="imgRound" />

                </div>
            </div>

            <div id="rowAboutDiv">

                <div id="aboutPMiddle">
                    <h2 id="aboutTitle">Lorem Ipsum</h2>
                    <div id="middlePDiv">
                    <p id="middlePleft">
                        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
                    </p>
                    <p id="middlePright">Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                    </div>
                    <div id="imgDivMiddle"><img src="cafeSol.PNG" id="imgRoundMiddle" />
</div>
                </div>
                    
            </div>

            <div id="aboutRowSwitch">
                <div id="aboutImg">
                    <img src="oli.PNG" id="imgRoundSwitch" />

                </div>
                <div id="aboutPSwitch">
                    <h2 id="aboutTitleSwitch">Lorem Ipsum</h2>
                    <p id="aboutParagraphSwitch">
                        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                        Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                    </p>
                </div>
                
            </div>

            <div id="aboutRow">
                <div id="aboutP">
                    <h2 id="aboutTitle">Lorem Ipsum</h2>
                    <p id="aboutParagraph">
                        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                        Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                    </p>
                </div>
                <div id="aboutImg">
                    <img src="tostadora.PNG" id="imgRound" />

                </div>


            </div>

        </section>
    )
}

export default Nosotros