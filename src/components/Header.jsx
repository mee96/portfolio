import logoPortf from "../images/pusheen-laptop.gif";
import "../scss/layout/Header.scss";
import { Link } from 'react-scroll';


function Header() {
  return (
    <header className="header">
        
        <img className="header__logo" src={logoPortf} alt="imagen pusheen" />
        <h1>mee96</h1>
        <nav>
        <ul className="header__list">
          
          <li><Link to="sobre-mi" smooth={true} duration={500}>
              Sobre Mí
            </Link></li>
          <li>Projectes</li>
          <li>Formacio</li>
          <li>Contacte</li>
        </ul>
        </nav>
    </header>
  )
}

export default Header