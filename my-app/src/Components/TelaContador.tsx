import Numero from "./numero";
import Botao from "./botao";
import { useState } from "react";

function TelaContador() {
    const [valor, setValor] = useState(0);

    function aoClicar() {
        setValor(valor + 1);
    }

    return (
        <div>
            <Numero valor={valor} />
            <Botao texto='Inc' aoCliclar={aoClicar}/>
        </div>
    )
}

export default  TelaContador;