import {FaUser} from "react-icons/fa";
import {FaRegEnvelope} from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs";



function Contacto(){

return(
    <section id="contactoSec">
        <div id="contactoDiv">
            <h1 id="contactoTittle">Contacto</h1>
            <div id="input">
                <div class="inputDiv">
                    <label>Nombre</label>
                    <div id="iconInput">
                        <FaUser id="icon" />
                        <input type="text" class="inputC" ></input>
                    </div>
                </div>

                <div class="inputDiv">
                    <label>Correo</label>
                    <div id="iconInput">
                        <FaRegEnvelope id="icon" />
                        <input type="text" class="inputC" ></input>
                    </div>
                </div>

                <div class="inputDiv">
                    <label>Telefono</label>
                    <div id="iconInput">
                        <BsFillTelephoneFill id="icon"/>
                        <input type="text" class="inputC" ></input>
                    </div>
                </div>
                
            </div>
            <div id="inputMensaje">
             <label id="mensaje">Mensaje</label>
             <textarea type="text" id="mensajeInput" ></textarea> 
            </div>
            <div id="BtnDiv">
                <button class="btnContacto">Nosotros</button>
                <button class="btnContacto">Contacto</button>
            </div>
        </div>
       
    </section>

)

}

export default Contacto;