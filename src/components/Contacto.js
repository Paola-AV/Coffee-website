import {FaUser} from "react-icons/fa";
import {FaRegEnvelope} from "react-icons/fa";

function Contacto(){
return(
    <section id="contactoSec">
        <div id="contactoDiv">
            <h1 id="contactoTittle">Contacto</h1>
            <div id="input">
                <div class="inputDiv">
                <label>Nombre</label>
                <input type="text" class="inputC" ></input>
                </div>
               <div class="inputDiv">
               <label>Correo</label>
                <input type="text" class="inputC" ></input>
               </div>
                <div class="inputDiv">
                <label>Telefono</label>
                <input type="text" class="inputC" ></input>
                </div>
                
            </div>
            <div id="inputMensaje">
             <label id="mensaje">Mensaje</label>
             <FaUser/>
             <input type="text" id="mensajeInput" ></input>

            </div>
        </div>
    </section>

)

}

export default Contacto;