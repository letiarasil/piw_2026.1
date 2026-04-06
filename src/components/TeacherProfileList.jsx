import TeacherProfile from "./TeacherProfile"
import "./StudentProfile.css"

function TeacherProfileList() {
    const teacherDataBase = [
        {name: "Diana Medina",
         titulo: "doutora",
         imgSrc: "https://www.quixada.ufc.br/wp-content/uploads/2015/11/Diana-Medina-e1730202955582-250x300.jpeg",
         description: "Como artista desenvolve projetos relacionados à arte urbana como; criação de painéis, instalações e caminhadas experimentais."
        },

        {name: "Ingrid Teixeira",
         titulo: "doutora",
         imgSrc: "https://www.quixada.ufc.br/wp-content/uploads/2015/05/ingrid-azulejo-300x300.jpeg",
         description: "Tem experiência na área de Ciência da Computação, com ênfase em Interação Humano-Computador e Engenharia Semiótica."
        },

        {name: "Leonara Braz",
         titulo: "doutora",
         imgSrc: "https://www.quixada.ufc.br/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-08-at-16.03.32-e1744140515393-254x300.jpeg",
         description: "Possui experiência com gerenciamento de projetos ágeis, atuando principalmente como Product Owner, entregando produtos acessíveis."
        },
        
        {name: "Rochelle Silveira",
         titulo: "doutoranda",
         imgSrc: "https://www.quixada.ufc.br/wp-content/uploads/2026/02/ROCHELLE-768x1024.jpg",
         description: "Sua produção acadêmica abrange metodologias e processos de projeto em design, identidade visual, arte e tecnologia, internet das coisas (IoT)."
        },
    ]    
    
    return (
        <>
            {
                teacherDataBase.map((teacher) => <TeacherProfile 
                    name = {teacher.name}
                    titulo={teacher.titulo}
                    imgSrc={teacher.imgSrc}
                    description={teacher.description}
                />)
            }
         
        </>
    )
}

export default TeacherProfileList