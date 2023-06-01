
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Historia from './components/Historia';
import Galeria from './components/Galeria';
import Menu from './components/Menu';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ContactScreen from './components/ContactScreen';
import Nosotros from './components/Nosotros';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<div> <Inicio/><Historia/><Galeria/><Menu/><Contacto/> </div>}></Route>
        <Route path='Nosotros' element={<Nosotros/>}/>
        <Route path='Contacto' element={<ContactScreen/>}/>
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

    */