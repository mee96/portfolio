

import { Element } from 'react-scroll';
import "../scss/layout/Formacion.scss";
import logo from "../images/Logo-adalab.png";

function Formacion() {
  const dataFormacion = {
    titulacio: "Bootcamp Intensivo Full-Stack Web Developer",
    institucio: "Adalab",
    durada: "[Septiembre 2024] – [Diciembre2024]",
    descripcio: "Formació pràctica i immersiva amb un enfocament en el cicle complet de desenvolupament web. Basat en projectes reals, treball en equip i metodologies àgils (Scrum).",
    tecnologies: ["JavaScript ES6+", "React", "Node.js (APIs)", "SASS/CSS3", "Git", "SQL", "HTML5", "Metodologies Àgils (Scrum)", "JavaScript"],
  };

  return (
    <Element name="formacion" className='formacion'>
      <h1>Formació</h1>
      
      <div className='formacion__div'>
        
        <div className='formacion__detalls'>
            <h2>{dataFormacion.titulacio}</h2>
            <p className='formacion__institucio'>{dataFormacion.institucio}</p>
            <p className='formacion__durada'>{dataFormacion.durada}</p>
            
            <p className='formacion__descripcio'>{dataFormacion.descripcio}</p>
            
            <ul className='formacion__tecnologies-list'>
                {dataFormacion.tecnologies.map((tech, index) => (
                    <li key={index} className='tech-tag'>{tech}</li>
                ))}
            </ul>
        </div>
        
        <div className='formacion__logo-container'>
          <img className="formacion__logo" src={logo} alt={`Logo de ${dataFormacion.institucio}`} />
        </div>
        
      </div>
    </Element>
  )
}

export default Formacion;