import {BsFillTelephoneFill} from "react-icons/bs";
import {FaRegEnvelope} from "react-icons/fa";

function Footer(){
    return(
        <section id="footer">
            <div class="footerDiv">
                <img src="logoO.PNG" id="logo"/>
            </div>
            <div class="footerDiv">
                <p>Palmares, Alajuela<br/>detras del redondel de Palmares<br/>200 metros sur.</p>

                <BsFillTelephoneFill/>
                <p>61402482</p>

                <FaRegEnvelope/>
                <p>xmichx53@gmail.com</p>
                
            </div>
            <div class="footerDiv">

                <h2>Horario de Apertura</h2>
                <p>lunes a viernes<br/>7:00am-6:00pm</p>

                <p>Sabados <br/> 9:00am-6:00pm</p>

            </div>
        </section>
    )
}

export default Footer;