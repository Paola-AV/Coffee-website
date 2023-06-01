
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import NextArrow from './components/NextArrow';
import Historia from './components/Historia';
import Galeria from './components/Galeria';
import Menu from './components/Menu';
import Contacto from './components/Contacto';
import {FaUser} from "react-icons/fa";
import Footer from './components/Footer';
import ContactScreen from './components/ContactScreen';
import Nosotros from './components/Nosotros';
import { Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <><Navbar /><Routes>

      <Route path='/' element={<div><Inicio/><Historia/><Galeria/><Menu/><Contacto/></div>}> </Route>
      <Route path='Nosotros' element={<Nosotros/>}/>
      <Route path='ContactScreen' element={<ContactScreen/>}/>
    </Routes>
    <Footer/>
    </>
    
  );
}



export default App;

/*  
    <Inicio/>
    <Historia/> 
    <Galeria/>  

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

    */