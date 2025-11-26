
import PropTypes from 'prop-types'; 
const ProjectCard = ({ projecte }) => {
    return (
        // ... (el teu codi de renderització aquí)
        <div className="box" key={projecte.id}> 
            <span></span> 
            <div className="content">
                <h2>{projecte.titol}</h2>
                <p>{projecte.descripcio}</p>
                
                

                <div className="boton">
                    {/* Utilitzes projecte.linkDemo i projecte.linkGithub */}
                    <a href={projecte.linkDemo} target="_blank" rel="noopener noreferrer" className="btn-demo">Demo</a>
                    <a href={projecte.linkGithub} target="_blank" rel="noopener noreferrer" className="btn-github">GitHub</a>
                </div>
            </div>
        </div>
    );
};


ProjectCard.propTypes = {
    projecte: PropTypes.shape({
        id: PropTypes.number.isRequired,
        titol: PropTypes.string.isRequired,
        descripcio: PropTypes.string.isRequired,
        tecnologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        linkDemo: PropTypes.string.isRequired, 
        linkGithub: PropTypes.string.isRequired
    }).isRequired
};

export default ProjectCard;