
import "../scss/layout/Header.scss";
import { Link } from 'react-scroll';


function Header() {
  return (
    <header className="header">
        
        
        <h1>Carme Medina</h1>
        <nav>
        <ul className="header__list">
          
          <li><Link to="sobre-mi" smooth={true} duration={500}>
              Sobre Mí
            </Link></li>
          <li><Link to="proyectos" smooth={true} duration={500}>
              Proyectos
            </Link></li>
          <li><Link to="formacion" smooth={true} duration={500}>
              
            Formación</Link></li>
          <li><Link to="contacto" smooth={true} duration={500}> Contacto </Link></li>
        </ul>
        </nav>
    </header>
  )
}

export default Header