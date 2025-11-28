import "../scss/App.scss";

import Header from "./Header";
import SobreMi from "./SobreMi";
import Proyectos from "./Proyectos";
import Formacion from "./Formacion";
import Contacto from "./Contacto"
import Home from "./Home";
import DarkmodeT from "./DarkmodeT";
import Footer from "./Footer";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState(true); // true = light, false = dark

  const handleClick = () => setMode(!mode);
  const classMode = mode ? "light" : "dark";

  return (
    <div className={classMode}> 
      <Header />
      
      <main>
        <Home />
        <SobreMi/>
        <Proyectos/>
        <Formacion/>
        <Contacto/>
        <Footer />
        <DarkmodeT onClick={handleClick} currentMode={classMode} />
      </main>
    </div>
  );
}

export default App;
