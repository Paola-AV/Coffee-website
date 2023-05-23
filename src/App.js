
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import NextArrow from './components/NextArrow';
import Historia from './components/Historia';
import Galeria from './components/Galeria';
import Menu from './components/menu';
import Contacto from './components/Contacto';
import {FaUser} from "react-icons/fa";
import Footer from './components/Footer';


function App() {
  return (
    <div>
    <Navbar/>
    <Inicio/>
    <Historia/> 
    <Galeria/>
    <Menu/>
    <Contacto/>
    <NextArrow/>
    <Footer/>
    </div>
  );
}



export default App;

/*  
    <Inicio/>
    <Historia/> 
    <Galeria/>   

    */