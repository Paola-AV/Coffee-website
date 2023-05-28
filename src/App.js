
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import NextArrow from './components/NextArrow';
import Historia from './components/Historia';
import Galeria from './components/Galeria';
import Menu from './components/menu';
import Contacto from './components/Contacto';
import {FaUser} from "react-icons/fa";
import Footer from './components/Footer';
import ContactScreen from './components/ContactScreen';
import Nosotros from './components/Nosotros';


function App() {
  
  return (
    <div>
    <Navbar/>
    <Inicio/>
    <NextArrow/>
    <Historia/> 
    <NextArrow/>
    <Galeria/>
    <NextArrow/>
    <Menu/>
    <NextArrow/>
    <Contacto/>
    <Nosotros/>
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