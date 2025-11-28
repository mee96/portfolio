
import '../scss/layout/Footer.scss';

function Footer() {
    

    return (
        <footer className="footer">
            <div className="footer__social">
                
                <a href="https://www.linkedin.com/in/carme-medina-canalda-250457132/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de [Tu Nombre]">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/mee96" target="_blank" rel="noopener noreferrer" aria-label="GitHub de [Tu Nombre]">
                    <i className="fab fa-github"></i>
                </a>
                
            </div>

            <p className="footer__copy">
                Desarrolladora Full-Stack
            </p>
            
            <p className="footer__thanks">
                ¡Gracias por visitar mi portfolio! Hecho con ♥ y React
            </p>
        </footer>
    );
}

export default Footer;