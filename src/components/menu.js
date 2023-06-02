

function Menu() {

  return (
    <section id="menu">
      <div><h1 id="tittleMenu">Menu</h1></div>
      <div id="menuRow">
        <div id="menuImgDiv">
          <img src="menuPouring.png" id="menuColImg" />
          
        </div>

        <div id="menuCol">
          <div id="cafeMenu">
            <img src="vasoMenu.png" id="imgMenu" />
            <h2 id="ItemTittle">Nuestros cafes</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <a id="menuBtn">Conoce mas</a>
          </div>

          <div id="postresMenu">
            <img src="postre.PNG" id="imgMenu" />
            <h2 id="ItemTittle">Nuestros postres</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <a id="menuBtn">Conoce mas</a>
          </div>

        </div>

      </div>
      
    </section>

  )
}

export default Menu;