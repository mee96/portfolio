
import selfie from "../images/selfie.jpg";
import "../scss/layout/SobreMi.scss";

function SobreMi() {
  return (
    <div className="sobremi">
        
        <p>¡Hola!
Soy Carmee, desarrolladora full Stack apasionada por la tecnología y la creatividad. Me he especializado en tecnologías como React, JavaScript, diseño con CSS/SCSS y MySQL.

Cuando no estoy programando, me encanta ver anime, jugar a videojuegos y descubrir nuevas herramientas tecnológicas. A veces tambien salgo de casa, tengo un grupo de baile y visito cada dia el gimnasio, sorprendentemente se me acurren las soluciones a mi codigo levantando pesas. Me considero una persona curiosa y creativa, siempre en busca de nuevos retos y oportunidades para aprender.

Valoro el trabajo en equipo, la atención al detalle y la innovación. Mi objetivo es contribuir a proyectos que marquen la diferencia, creando experiencias únicas y funcionales para los usuarios.

¡Gracias por visitar mi portfolio! Estoy emocionada por compartir mis proyectos contigo. 😊</p>

        <img className="sobremi__selfie" src={selfie} alt="Selfie" />

    </div>
  )
}

export default SobreMi