
import { Element } from 'react-scroll';
import "../scss/layout/SobreMi.scss";

function SobreMi() {
  return (
    <Element name="sobre-mi" className='sobre-mi'>
        <h1>Sobre Mí</h1>
        
        <div className="sobre-mi__content-grid">
            
            
            <div className='sobre-mi__presentacion'>
                <h2>De la Precisión del Laboratorio a la Funcionalidad del Código</h2>
                
                <p>
                    Soy una desarrolladora Full-Stack especializada en la creación de interfaces de usuario robustas con <strong className="highlight">React</strong> y APIs eficientes con <strong className="highlight">Node.js</strong>. Tras completar el intensivo Bootcamp de Adalab, estoy lista para aplicar mis habilidades en un entorno profesional.
                </p>

                <p>
                    Mi trayectoria previa como <strong className="highlight">Técnico de Laboratorio</strong> me proporcionó una base inestimable en <strong className="highlight">metodología, análisis exhaustivo y rigurosidad</strong>, habilidades que ahora aplico directamente a la depuración de código y la arquitectura de proyectos. Este cambio de sector está impulsado por mi pasión por la <strong className="highlight">resolución de problemas complejos</strong> y la <strong className="highlight">creatividad funcional</strong> que ofrece el desarrollo web.
                </p>
                
                <p>
                    Busco un equipo que valore la <strong className="highlight">precisión</strong> y la <strong className="highlight">capacidad de adaptación</strong>. Mi objetivo es contribuir a proyectos que marquen la diferencia.
                </p>
            </div>
            
            
            <div className='sobre-mi__destacado'>
                <h3>Soft Skills y Valores</h3>
                <ul className='sobre-mi__skills-list'>
                    <li>🔬 Análisis y Rigurosidad</li>
                    <li>🤝 Trabajo Colaborativo</li>
                    <li>✨ Atención al Detalle</li>
                    <li>📈 Aprendizaje Continuo</li>
                    <li>💡 Creatividad e Innovación</li>

                </ul>

                <hr/>
                
                <h3>Intereses Personales</h3>
                <p>
                    Cuando no estoy programando, mantengo mi mente activa con mis hobbies: ver anime, jugar a videojuegos y bailar. Además, visito el gimnasio cada día, un lugar donde curiosamente, a menudo se me ocurren soluciones de código inesperadas!
                </p>
            </div>
            
        </div>
    </Element>
  )
}  

export default SobreMi;