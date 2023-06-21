import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NavbarComp() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  const navigate=useNavigate()

  return (
      <header>
        <nav ref={navRef}>
          <a onClick={() => navigate('/')}>Inicio</a>
          <a href="#menu" >Menu</a>
            <div id="logo-nav"> </div>
          <a onClick={() => navigate('Talleres')}>Talleres</a>
          <a onClick={() => navigate('Productos')}>Productos</a>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    );

}

export default NavbarComp;

/*    <header class="navbarHeader">
      <nav class="navbar navbar-expand-lg " id="navBox">
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Menú</a>
              </li>

              <li>
                <div id="logo-nav"> </div>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Olikey</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>*/