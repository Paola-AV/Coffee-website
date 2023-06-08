
import { FaBars, FaTimes } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';


function Navbar() {


  return (

    <header class="navbarHeader">
      <Nav defaultActiveKey="/home" as="ul">

        <Nav.Item as="li" id="navbarNav">
          <Nav.Link href="/home" id="li">Inicio</Nav.Link>
        </Nav.Item>

        <Nav.Item as="li" id="navbarNav">
          <Nav.Link eventKey="link-1" id="li">Menu</Nav.Link>
        </Nav.Item>

        <li>
          <div id="logo-nav"> </div>
        </li>

        <Nav.Item as="li" id="navbarNav">
          <Nav.Link eventKey="link-2" id="li">Historia</Nav.Link>
        </Nav.Item>

        <Nav.Item as="li" id="navbarNav">
          <Nav.Link eventKey="link-2" id="li">Contacto</Nav.Link>
        </Nav.Item>

      </Nav>

    </header>

  )

}

export default Navbar;

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