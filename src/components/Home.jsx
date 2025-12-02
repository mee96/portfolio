import logo from "../images/image-portfolio.jpeg";
import "../scss/layout/Home.scss";
import { Element, Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <Element name="home" className="home">
      <div className="home__content">

      <div className="home__presentation">

        <h1 className="home__title">
          {t("home.title")}
        </h1>
        <img className="home__logo" src={logo} alt="me, hello im carme" />

        <p className="home__intro-text">
          {t("home.description")}
        </p>
      
      </div>

      </div>
    </Element>
  );
}

export default Home;
