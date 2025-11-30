import '../scss/layout/Footer.scss';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/carme-medina-canalda-250457132/"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/mee96"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <i className="fab fa-github"></i>
        </a>
      </div>

      <p className="footer__copy">
        {t("footer.role")}
      </p>

      <p className="footer__thanks">
        {t("footer.thanks")}
      </p>
    </footer>
  );
}

export default Footer;
