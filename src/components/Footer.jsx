
import '../scss/layout/Footer.scss';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__social">
                
                <a href="URL_TU_LINKEDIN" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de [Tu Nombre]">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="URL_TU_GITHUB" target="_blank" rel="noopener noreferrer" aria-label="GitHub de [Tu Nombre]">
                    <i className="fab fa-github"></i>
                </a>
                {/* Opcional: Icono para correo electrónico */}
                <a href="#contacto" aria-label="Ir a la sección de Contacto">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>

            <p className="footer__copy">
                Desarrolladora Full-Stack.
            </p>
            
            <p className="footer__thanks">
                ¡Gracias por visitar mi portfolio! Hecho con ❤️ y React
            </p>
        </footer>
    );
}

export default Footer;