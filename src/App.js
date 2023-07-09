
import Navbar from './components/NavbarComp'
import Inicio from './components/Inicio'
import Historia from './components/Historia';
import Galeria from './components/Galeria';
import Menu from './components/Menu';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ContactScreen from './components/ContactScreen';
import Talleres from './components/Talleres';
import Nosotros from './components/Nosotros';
import GaleriaScreen from './components/GaleriaScreen';
import Bolsas from './components/Bolsas';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from './components/NavbarComp';
import Espresso from './components/Espresso';



function App() {
  
  return (

    <>
      <NavbarComp/>
      <Routes>
        <Route path='/' element={<div> <Inicio/><Historia/><Galeria/><Menu/><Contacto/></div>}></Route>
        <Route path='Nosotros' element={<Nosotros/>}/>
        <Route path='Contacto' element={<ContactScreen/>}/>
        <Route path='Galeria' element={<GaleriaScreen/>}></Route>
        <Route path='Productos' element={<Bolsas/>}></Route>
        <Route path='Talleres' element={<Talleres/>}></Route>
        <Route path='Espresso' element={<Espresso/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}



export default App;
/* <Route path='Talleres' element={<Talleres/>}/>*/
/*  
  separar componentes
  stylelint
  nav
  responsive
  */