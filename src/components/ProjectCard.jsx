import PropTypes from 'prop-types'; 
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ projecte }) => {
    const { t } = useTranslation();

    return (
        <div className="box" key={projecte.id}> 
            <span></span> 
            <div className="content">
                <h2>{t(`projects.${projecte.key}.title`)}</h2>
                <p>{t(`projects.${projecte.key}.description`)}</p>

                <div className="boton">
                    <a href={projecte.linkDemo} target="_blank" rel="noopener noreferrer" className="btn-demo">
                        {t("projects.demo")}
                    </a>
                    <a href={projecte.linkGithub} target="_blank" rel="noopener noreferrer" className="btn-github">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    projecte: PropTypes.shape({
        id: PropTypes.number.isRequired,
        key: PropTypes.string.isRequired, // clau per i18next
        linkDemo: PropTypes.string.isRequired, 
        linkGithub: PropTypes.string.isRequired
    }).isRequired
};

export default ProjectCard;
