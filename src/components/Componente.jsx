import React from "react";
import {sum} from "../utils/sum";

function Componente() {

    let result
    result = sum(2, 3)

    return (
        <div>
            <h1>Hola mundo</h1>
            <p>La suma de 2 + 3 es: {result}</p>
        </div>
    )
}

export default Componente;