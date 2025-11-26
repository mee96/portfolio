import '../scss/layout/DarkmodeT.scss';


const DarkmodeT = ({ onClick }) => {
  return (
    
    <button onClick={onClick} className="fixed-toggle">
      🌓
    </button>
  );
};

export default DarkmodeT;
