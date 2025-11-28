

import logo from "../images/pusheen-gaming-me-as-fweak.gif";
import "../scss/layout/Home.scss";
import { Element, Link } from 'react-scroll';

function Home() {
  return (
    
    <Element name="home" className="home"> 
      
      <div className="home__presentation">
        
        
        <h1 className="home__title">
            Hola! Benvinguts al meu portfoli 😊
        </h1>
        
        
        <p className="home__intro-text">
            Sóc Carmee, desenvolupadora full-stack amb una gran passió per la tecnologia i la creativitat. Aquest lloc és un espai on comparteixo els meus projectes i tot allò que em motiva a seguir aprenent i creixent en el món de la programació. El meu objectiu és mostrar-te el que sóc capaç de fer i, a través dels meus projectes, transmetre la innovació i el detall que em caracteritzen. Espero que gaudeixis explorant el meu treball!
        </p>

        
        <Link 
            to="proyectos" 
            smooth={true} 
            duration={500} 
            className="home__cta-button"
        >
      
        </Link>
      </div>

      <div className="home__logo-container">
        <img className="home__logo" src={logo} alt="logo gato pusheen gaming" />
      </div>

    </Element>
  )
}

export default Home