import "../scss/App.scss";

import Header from "./Header";
import SobreMi from "./SobreMi";
import Proyectos from "./Proyectos";
import Formacion from "./Formacion";
import Contacto from "./Contacto"
import Home from "./Home";
import DarkmodeT from "./DarkmodeT";
import { useState } from "react";

function App() {

    const [mode, setMode] = useState(true);  //true modo claro, folse modo oscuro

    const handleClick = () => {
            if(mode == true){
                setMode(false);
            } else{
                setMode(true);
            }
    }
    const classMode = mode ? "light" : "dark";
    return (
        <> 
        <Header />
        <DarkmodeT onClick={handleClick}/>
        <div className={classMode}> 
       
        <main>

            
            <Home />
            <SobreMi/>
            <Proyectos/>
            <Formacion/>
            <Contacto/>

        </main>
        </div>
        </>
    )

}

export default App