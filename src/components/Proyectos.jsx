import "../scss/layout/Proyectos.scss";
import { Element } from 'react-scroll';

function proyectos() {
  return (

    <Element name="proyectos">
    <h1>Mis proyectos</h1>
    <div> 
      
    <div className="container">
  <div className="box">
    <span></span>
    <div className="content">
      <h2>Purr Skills</h2>
      <p>proyecto en equipo que lideré y diseñé. Es un
      generador de fichas de personaje para juegos de ROL</p>
      <div className="boton"><a href="#">link</a>
      <a href="#">github</a></div>
      
    </div>
  </div>
  <div className="box">
    <span></span>
    <div className="content">
      <h2>Rick & Morty </h2>
      <p>Lproyecto personal para
buscar personajes de la serie Rick y morty usando una api
publica.</p>
<div className="boton"><a href="#">link</a>
<a href="#">github</a></div>
    </div>
  </div>
  <div className="box">
    <span></span>
    <div className="content">
      <h2>API Anime</h2>
      <p>proyecto de backend, base de datos con animes y
personajes de estos.
</p>
<div className="boton"><a href="#">link</a>
<a href="#">github</a></div>
    </div>
  </div>
</div>
  
    </div>
    </Element>
  )
}

export default proyectos