import "../scss/App.scss";
import Header from "./Header";
import SobreMi from "./SobreMi";
import Home from "./Home";
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
        <div className={classMode}> 
       
        <main>

            <button onClick={handleClick} >darkmode</button>
            <Home />
            <SobreMi/>

        </main>
        </div>
        </>
    )

}

export default App