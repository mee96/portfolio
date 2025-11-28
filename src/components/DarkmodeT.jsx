import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import "../scss/layout/DarkmodeT.scss";

const DarkmodeT = ({ onClick }) => {
  return (
    <span className="fixed-toggle" onClick={onClick}>
      <FontAwesomeIcon icon={faMoon} />
    </span>
  );
};

export default DarkmodeT;