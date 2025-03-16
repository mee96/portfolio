import logoPortf from "../images/pusheen-laptop.gif";
import "../scss/layout/Header.scss";


function Header() {
  return (
    <header className="header">
        
        <img className="header__logo" src={logoPortf} alt="imagen pusheen" />
        <h1>mee96</h1>
        <ul className="header__list">
          <li>Home</li>
          <li>Sobre Mi</li>
          <li>Projectes</li>
          <li>Formacio</li>
          <li>Contacte</li>
        </ul>
    </header>
  )
}

export default Header