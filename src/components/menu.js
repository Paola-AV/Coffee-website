import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate=useNavigate()
  return (
    <section id="menu">
      <div><h1 id="tittleMenu">Menu</h1></div>
      <div className="columnDivMenu">

        <div className="columnMenu1">
          <div className="menuDiv1">
            <div id="menuComponent1">
              <h2 id="compMenuH">Espresso</h2>
              <p id="compMenuP">Lorem ipsum dolor sit amet</p>
            </div>
            <a id="menuBtn1">Conoce mas</a>
            <img id="imgMenu1" src="galeriaImg/vasoGaleria.png" />
          </div>

          <div className="menuDiv1">
            <div id="menuComponent1">
              <h2 id="compMenuH">Infusiones</h2>
              <p id="compMenuP">Lorem ipsum dolor sit amet</p>
            </div>
            <a id="menuBtn1">Conoce mas</a>
            <img id="imgMenu1" src="copa1.png" />
          </div>
        </div>

        <div className="columnMenu">
          <div className="menuDiv">
            <div id="menuComponent">
              <h2 id="compMenuH">Lattes</h2>
              <p id="compMenuP">Lorem ipsum dolor sit amet</p>
            </div>
            <a id="menuBtn">Conoce mas</a>
            <img id="imgMenu" src="latte.png" />
          </div>

          <div className="menuDiv">
            <div id="menuComponent">
              <h2 id="compMenuH">metodos de infusion</h2>
              <p id="compMenuP">Lorem ipsum dolor sit amet</p>
            </div>
            <a id="menuBtn">Conoce mas</a>
            <img id="imgMenu" src="menuPouring.png" />
          </div>

        </div>
      </div>


      
    </section>

  )
}

export default Menu;
/*<div id="menuRow">
        <div id="menuImgDiv">
          <img src="menuPouring.png" id="menuColImg" />
          
        </div>

        <div id="menuCol">
          <div id="cafeMenu">
            <img src="vasoMenu.png" id="imgMenu" />
            <h2 id="ItemTittle">Nuestros cafes</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <a id="menuBtn" onClick={()=>navigate('MenuCafes')} >Conoce mas</a>
          </div>

          <div id="postresMenu">
            <img src="postre.PNG" id="imgMenu" />
            <h2 id="ItemTittle">Nuestros postres</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <a id="menuBtn" onClick={()=>navigate('MenuCafes')} >Conoce mas</a>
          </div>

        </div>

      </div>*/