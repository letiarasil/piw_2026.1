import "./CardCidade.css"

function CardCidade( {nome, imgSrc, votos} ) {
    return (
        <div className="card">
            <div className="nome">
                <h2>{nome}</h2>
            </div>

            <div className="imagem">
                <img src={imgSrc} width={"300px"} alt={`Foto da cidade ${nome}`} />
            </div>

            <div className="votos">
                <p>Votos: {votos}</p>
            </div>

        </div>
    )
}

export default CardCidade
