import { Element } from 'react-scroll';
import "../scss/layout/SobreMi.scss";
import { useTranslation } from 'react-i18next';

function SobreMi() {
  const { t } = useTranslation();

  return (
    <Element name="sobre-mi" className='sobre-mi'>
        <h1>{t("sobreMi.title")}</h1>
        
        <div className="sobre-mi__content-grid">
            
            <div className='sobre-mi__presentacion'>
                <h2>{t("sobreMi.subtitle")}</h2>
                
                <p dangerouslySetInnerHTML={{ __html: t("sobreMi.paragraph1") }} />

                <p dangerouslySetInnerHTML={{ __html: t("sobreMi.paragraph2") }} />
                
                <p dangerouslySetInnerHTML={{ __html: t("sobreMi.paragraph3") }} />
            </div>
            
            <div className='sobre-mi__destacado'>
                <h3>{t("sobreMi.softSkillsTitle")}</h3>
                <ul className='sobre-mi__skills-list'>
                    {t("sobreMi.skills", { returnObjects: true }).map((skill, i) => (
                        <li key={i}>{skill}</li>
                    ))}
                </ul>

                <hr/>
                
                <h3>{t("sobreMi.personalInterestsTitle")}</h3>
                <p>{t("sobreMi.personalInterests")}</p>
            </div>
            
        </div>
    </Element>
  )
}  

export default SobreMi;
