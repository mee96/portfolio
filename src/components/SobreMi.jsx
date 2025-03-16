import { Element } from 'react-scroll';
import selfie from "../images/selfie.jpg";
import "../scss/layout/SobreMi.scss";

function SobreMi() {
  return (
    <Element name="sobre-mi">
        <h1>Sobre Mí</h1>
    <div className="sobremi">
        
        <p>
        Me he especializado en tecnologías como React, JavaScript, CSS/SCSS y MySQL. En mi tiempo libre, me encanta ver anime, jugar a videojuegos y descubrir nuevas herramientas tecnológicas. Además, soy una persona activa: tengo un grupo de baile y visito el gimnasio cada día. ¡Sorprendentemente, a menudo se me ocurren soluciones de código mientras levanto pesas!
        Me considero curiosa y creativa, siempre en busca de nuevos retos y oportunidades para aprender. Valoro el trabajo en equipo, la atención al detalle y la innovación. Mi objetivo es        contribuir a proyectos que marquen la diferencia, creando experiencias únicas y funcionales para los usuarios.
        ¡Gracias por visitar mi portfolio! Estoy emocionada por compartir mis proyectos contigo.</p>

        <img className="sobremi__selfie" src={selfie} alt="Selfie" />

    </div>
    </Element>
  )
}   

export default SobreMi