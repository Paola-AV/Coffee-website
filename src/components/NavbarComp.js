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
    /*
    <header class="navbarHeader">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav cid="basic-navbar-nav">

            <Nav.Item id="navbarNav">
              <Nav.Link id="li" eventKey="1" as={Link} to="/">
                  Inicio
              </Nav.Link>
            </Nav.Item>

            <Nav.Item id="navbarNav">
              <Nav.Link id="li" eventKey="1" as={Link} to="/Menu.js">
                Menu
              </Nav.Link>
            </Nav.Item>

            <li>
              <div id="logo-nav"> </div>
            </li>

            <Nav.Item id="navbarNav">
              <Nav.Link id="li" eventKey="1" as={Link} to="/ContactScreen.js">
                Contacto
              </Nav.Link>
            </Nav.Item>

            <Nav.Item id="navbarNav">
              <Nav.Link id="li" eventKey="2" as={Link} to="/Nosotros.js">
                Historia
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </header>

  )*/

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