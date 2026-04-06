import { useEffect, useState } from "react";

function MeuContador() {
    
    const [contador, setContador] = useState(0)
    const [paridade, setParidade] = useState(true)

    useEffect(
        () => {
            if(contador % 2 == 0) setParidade(true)
            else setParidade(false)
        }, [contador] //variável de estado que modifica o efeito
    )

    function contar() {
        setContador((contadorAnterior) => contadorAnterior + 1)
    }

    function testeParidade() {
        if(paridade == true) return "PAR"
        else return "ÍMPAR"
    }

    return (
        <div 
            style={{
                display: "flex", 
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "4em",
            }}
        >
            <h1>Contador: {contador}</h1>
            <h2>Paridade: {testeParidade()}</h2>
            <button 
                onClick={contar} 
                style={{
                    borderRadius: "4px"
                }}
            >CONTAR</button>

        </div>
    )
}

export default MeuContador