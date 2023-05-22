
import { FaBars, FaTimes } from "react-icons/fa";



function Navbar() {


  return (
    <header class="navbarHeader">
      <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBox">
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
    </header>


  )

}

export default Navbar;
