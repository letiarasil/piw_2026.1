import { useEffect, useState } from "react"

function CarregarPokemon() {

    const [nomePokemon, setNomePokemon] = useState("")
    const [imgPokemon, setImgPokemon] = useState("")

    useEffect(
        () => {
            fetch("https://pokeapi.co/api/v2/pokemon/1")
            .then(
                (response) => {
                    return response.json()
                }
            )
            .then(
                (dados) => {
                    setNomePokemon(dados.name)
                    setImgPokemon(dados.sprites.front_default)
                }
            )
            .catch(error => console.log(error))
        }, [] //sem informação, porque quando for carregado a página, já vai ser disparado
    )

    return(
        <>
            <h1>Pokemon: </h1>
            <h3>{nomePokemon}</h3>
            <img src={imgPokemon} width={300}/>
        </>
    )
}

export default CarregarPokemon