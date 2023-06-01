
function GaleriaScreen() {
    return (
        <section id="galSec">
            <h1 id="galeriaTitle">Galeria</h1>

            <div id="firstSec">
                <div className="colTwo">
                    <img src="galeriaImg/sirviendoCafe.png" className="firstCol" />
                    <img src="galeriaImg/airGaleria.png" className="firstCol" />
                </div>

                <div id="five">
                    <div className="rowTwo">
                        <img src="galeriaImg/cafeGalletas.png" className="firstRow" />
                        <img src="galeriaImg/vasoGaleria.png" className="firstRow" />
                    </div>
                    <img src="galeriaImg/toastGaleria.png" id="medioCol" />
                    <div className="rowTwo">
                        <img src="galeriaImg/galletaQuequeGaleria.png" id="secondCol1" />
                        <img src="galeriaImg/tomando.png" id="secondCol2" />
                    </div>
                </div>
            </div>

            <div id="middleImg">
                <img src="galeriaImg/gatito.png" id="imgMiddle"/>
            </div>

            <div id="SecondSec">
                <div id="twoColumn">
                    <img src="galeriaImg/chemexPouring.png" id="secondColumn1"/>
                    <img src="galeriaImg/cookies.png" id="secondColumn1"/>
                </div>
                <div id="twoColumn">
                    <img src="galeriaImg/bolsasBrazo.png" id="secondColumn2-1"/>
                    <img src="galeriaImg/granosTostadora.png" id="secondColumn2-2"/>
                </div>
            </div>

            <div id="middleImg">
            <img src="galeriaImg/barista.png" id="imgMiddle"/>
            </div>

        </section>
    )
}

export default GaleriaScreen;