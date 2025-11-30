import React, { useState } from 'react';
import "../scss/layout/Header.scss";
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">

           

            <button className="header__menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
                <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i> 
            </button>

            <Link 
                to="home" 
                smooth={true} 
                duration={500} 
                className="header__name-link" 
                onClick={() => setIsOpen(false)}
            >
                <h1 className="header__name">Carme Medina</h1>
            </Link>

            <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
                <ul className={`header__list ${isOpen ? 'header__list--open' : ''}`}>

                    <li>
                      <Link to="sobre-mi" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        {t("nav.about")}
                      </Link>
                    </li>

                    <li>
                      <Link to="proyectos" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        {t("nav.projects")}
                      </Link>
                    </li>

                    <li>
                      <Link to="formacion" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        {t("nav.training")}
                      </Link>
                    </li>

                    <li>
                      <Link to="contacto" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        {t("nav.contact")}
                      </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

