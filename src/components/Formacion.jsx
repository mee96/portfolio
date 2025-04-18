
import { Element } from 'react-scroll';
import "../scss/layout/Formacion.scss";
import logo from "../images/Logo-adalab.png";



function Formacion() {
  return (
    <Element name="formacion" className='formacion'>+
    
    <h1>Formacion</h1>
    <div className='formacion__div'>
    <p>Sobre si conocía donaciones anónimas o no anónimas en efectivo al partido, JAMÁS, a propósito, no tocaré sanidad ni la educacióny ni a Hitler ni a Stalin les han nombrado personas non grata en Pontevedra, en conclusión, todo lo que se refiere a mí y que figura allí y a los compañeros de partido que figuran ahí, no es cierto, salvo alguna cosa que han publicado los medios, es el alcalde el que elige al alcalde y es el alcalde el que quiere que sean los vecinos el alcalde.</p>
    <img className="formacion__logo" src={logo} alt="Logo Adalab" />
    </div>
    </Element>
  )
}

export default Formacion