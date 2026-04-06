import { useState } from "react";

function PokemonPages() {
    const [pokemonId, setPokemonId] = useState(1);

    function voltarPokemon() {
        if(pokemonId - 1 > 0) {
            setPokemonId((estadoAnteriorPokemonId) => estadoAnteriorPokemonId - 1);
        }
    }

    function passarPokemon() {
        if(pokemonId + 1 <= 30) {
            setPokemonId((estadoAnteriorPokemonId) => estadoAnteriorPokemonId + 1);
        }
    }

    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Pokemon Pages</a>
                </div>
            </nav>

            <main style={{paddingTop: 50}}>
                <div className="card" style={{width: "18rem", paddingTop: 20}}>
                    <img style={{padding: 30}} 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`} 
                        class="card-img-top" alt="Pokemon" 
                    />
                    <div className="card-body">
                        <h5 class="card-title">Nome do Pokemon: {pokemonId}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div style={{display:"flex", justifyContent: "space-around", paddingBottom: 20}}>
                        <button className="btn btn-primary" onClick={voltarPokemon}>Diminuir</button>
                        <button className="btn btn-primary" onClick={passarPokemon}>Aumentar</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default PokemonPages