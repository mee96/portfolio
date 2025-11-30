import logo from "../images/pusheen-gaming-me-as-fweak.gif";
import "../scss/layout/Home.scss";
import { Element, Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <Element name="home" className="home">
      
      <div className="home__presentation">

        <h1 className="home__title">
          {t("home.title")}
        </h1>

        <p className="home__intro-text">
          {t("home.description")}
        </p>

        <Link
          to="proyectos"
          smooth={true}
          duration={500}
          className="home__cta-button"
        >
          {t("home.cta")}
        </Link>
      </div>

      <div className="home__logo-container">
        <img className="home__logo" src={logo} alt={t("home.alt")} />
      </div>

    </Element>
  );
}

export default Home;
