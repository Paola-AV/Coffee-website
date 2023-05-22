


function Inicio() {

    return (
        <section class="row align-items-start" id="inicio">
            <div class="col-4" id="col1">
                <div id="txtInicio">
                    <h1>Lorem Ipsum</h1>
                    <p class="pInicio">Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit</p>
                </div>
                <div id="butInicio">
                <button class="btnInicio">Nosotros</button>
                <button  class="btnInicio" id="btn2">Contacto</button>
                </div>
               
            </div>

            <div class="col-8" id="col2">
                <img src="Café-y-Quequito.png" id="coffeeImg"/>
                <div id="granosDiv">
                    <img src="Granos-Under-Vaso.png" id="granosImg" />
                </div>
            </div>


        </section>
    )

}

export default Inicio;