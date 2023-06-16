import {BsFillTelephoneFill} from "react-icons/bs";
import {FaRegEnvelope} from "react-icons/fa";

function Footer(){
    return (
        <section id="footer">
            <div class="footerDiv" id="footer2">
                <img src="logoO.PNG" id="logo" />
            </div>
            <div class="footerDiv" id="footer1">
                <p>Palmares, Alajuela<br />detras del redondel de Palmares<br />200 metros sur.</p>
                <div id="logoRow">
                    <BsFillTelephoneFill  id="iconC"/>
                    <p id="contactP">61402482</p>
                </div>

                <div id="logoRow">
                    <FaRegEnvelope id="iconC"/>
                    <p id="contactP">xmichx53@gmail.com</p>
                </div>

                
            </div>
            <div class="footerDiv" id="footer1">

                <h2>Horario de Apertura</h2>
                <p>lunes a viernes<br/>7:00am-6:00pm</p>

                <p>Sabados <br/> 9:00am-6:00pm</p>

            </div>
        </section>
    )
}

export default Footer;