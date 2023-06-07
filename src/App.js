
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Historia from './components/Historia';
import Galeria from './components/Galeria';
import Menu from './components/Menu';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ContactScreen from './components/ContactScreen';
import Nosotros from './components/Nosotros';
import Talleres from './components/Talleres';
import GaleriaScreen from './components/GaleriaScreen'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  
  return (

    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<div> <Inicio/><Historia/><Galeria/><Menu/><Talleres/><Contacto/> </div>}></Route>
        <Route path='Nosotros' element={<Nosotros/>}/>
        <Route path='Contacto' element={<ContactScreen/>}/>
        <Route path='Galeria' element={<GaleriaScreen/>}></Route>
       
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