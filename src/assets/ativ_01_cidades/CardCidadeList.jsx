import CardCidade from "./CardCidade"
import "./CardCidade.css"

function CardCidadeList() {
    const CidadeDataBase = [
        {nome: "Quixadá",
         imgSrc: "https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640",
         votos: ""
        },

        {nome: "Iguatu",
         imgSrc: "https://s3.amazonaws.com/portalleg-producao/ce_pm_iguatu/dji0234.png",
         votos: ""
        },

        {nome: "Quixeramobim",
         imgSrc: "https://reporterceara.com.br/wp-content/uploads/2023/08/Snapinsta.app_346013415_1058367938474177_382983154268917231_n_1080.jpg",
         votos: ""
        },

        {nome: "Banabuiú",
         imgSrc: "https://www.crede12.seduc.ce.gov.br/wp-content/uploads/sites/109/2021/10/Banabuiu-ce.jpg",
         votos: ""
        },
    ]    
    
    return (
        <>
            {
                CidadeDataBase.map((cidade) => <CardCidade 
                    nome = {cidade.nome}
                    imgSrc={cidade.imgSrc}
                    votos={cidade.votos}
                />)
            }
        </>
    )
}

export default CardCidadeList