import "../scss/App.scss";
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
       
        <div className={classMode}> 
        <header><h1 className="title">portfolio</h1></header>
        <main>

            <button onClick={handleClick} >darkmode</button>
            <p>Me gustan los catalanes porque hacen cosas, por lo tanto, este estadio de fútbol en el que se va a despedir a Mandela es el estadio donde España además se proclamó Campeón del Mundo en su día frente a Holanda de fútbol ¿no? Con lo cual es realmente un momento muy bonito y muy emocionante, por añadidura, quiero transmitir a los españoles un mensaje de esperanza. ETA es una gran nación; España perdón es una gran nación, dicho de otro modo, las medidas que tomamos hacen daño a la gente pero son imprescindibles, es el alcalde el que elige al alcalde y es el alcalde el que quiere que sean los vecinos el alcalde.</p>

        </main>
        </div>
       
    )

}

export default App