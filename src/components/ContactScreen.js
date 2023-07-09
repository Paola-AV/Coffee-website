import {FaWaze } from "react-icons/fa";
import {FaMapMarkerAlt} from "react-icons/fa";
import Contacto from "./Contacto";


function ContactScreen(){
    return(
        <>
        <section>
            <div className="mapP">
                <h1 className="mapTittle"><span className="color2">Palmares</span>, Alajuela</h1>
                <p>Detras del redondel de <span className="color2">Palmares<br/>200 metros sur</span></p>
            </div>
            
            <div id="mapDiv">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.0615224122973!2d-84.43535439670086!3d10.05869746055714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa04539d5d5b5b3%3A0x592a537ebe3dc532!2sOlikey%20Coffee%20Roasters!5e0!3m2!1ses!2scr!4v1684939665538!5m2!1ses!2scr" 
                width="1070" 
                height="443" 
                style={{border:"0"}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
           
            <div className="mapIconDiv">
                <a href="https://ul.waze.com/ul?place=ChIJs7XV1TlFoI8RMsU9vn5TKlk&ll=10.05869750%2C-84.43503250&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank"><FaWaze id="mapIcon"></FaWaze></a>
                <a href="https://goo.gl/maps/VrF3puzghGjjmSVS6" target="_blank"><FaMapMarkerAlt id="mapIcon"></FaMapMarkerAlt></a>
            </div>
        </section>
        <Contacto />
        </>
    )
}

export default ContactScreen;