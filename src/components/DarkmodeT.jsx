import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import "../scss/layout/DarkmodeT.scss";
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'ca', label: 'CAT' },
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'ENG' },
];

const DarkmodeT = ({ onClick }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const activeLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="fixed-panel" ref={ref}>

      {/* Botó de lluna */}
      <span className="toggle-darkmode" onClick={onClick}>
        <FontAwesomeIcon icon={faMoon} />
      </span>

      
      <button className="lang-toggle" onClick={() => setOpen(!open)}>
        {activeLang.label}
      </button>

      
      {open && (
        <div className="lang-dropdown">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DarkmodeT;
