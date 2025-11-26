

import "../scss/layout/Proyectos.scss";
import { Element } from 'react-scroll';


import projectesData from '../data/projects'; 


import ProjectCard from './ProjectCard'; 


function Proyectos() { 
  return (
    <Element name="proyectos">
      <h1>Mis proyectos</h1>
      <div className="container"> 
        
        
        {projectesData.map((projecte) => (

            <ProjectCard key={projecte.id} projecte={projecte} />
        ))}
        
      </div>
    </Element>
  );
}

export default Proyectos;