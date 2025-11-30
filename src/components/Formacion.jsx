import { Element } from 'react-scroll';
import "../scss/layout/Formacion.scss";
import logo from "../images/Logo-adalab.png";
import { useTranslation } from 'react-i18next';

function Formacion() {
  const { t } = useTranslation();

  const dataFormacion = t("formacion", { returnObjects: true });

  return (
    <Element name="formacion" className='formacion'>
      <h1>{dataFormacion.title}</h1>
      
      <div className='formacion__div'>
        
        <div className='formacion__detalls'>
            <h2>{dataFormacion.titulacio}</h2>
            <p className='formacion__institucio'>{dataFormacion.institucio}</p>
            <p className='formacion__durada'>{dataFormacion.durada}</p>
            
            <p className='formacion__descripcio'>{dataFormacion.descripcio}</p>
            
            <ul className='formacion__tecnologies-list'>
                {dataFormacion.tecnologies.map((tech, index) => (
                    <li key={index} className='tech-tag'>{tech}</li>
                ))}
            </ul>
        </div>
        
        <div className='formacion__logo-container'>
          <img className="formacion__logo" src={logo} alt={`Logo de ${dataFormacion.institucio}`} />
        </div>
        
      </div>
    </Element>
  )
}

export default Formacion;
