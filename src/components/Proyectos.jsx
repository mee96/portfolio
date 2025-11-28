import "../scss/layout/Proyectos.scss";
import { Element } from 'react-scroll';
import projectesData from '../data/projects'; 
import ProjectCard from './ProjectCard'; 

function Proyectos() { 
  return (
    <Element name="proyectos" className="proyectos">
      
      <h1 className="proyectos__titulo">Mis proyectos</h1>
      
      <div className="container"> 
        {projectesData.map((projecte) => (
          <ProjectCard key={projecte.id} projecte={projecte} />
        ))}
      </div>
      
    </Element>
  );
}

export default Proyectos;