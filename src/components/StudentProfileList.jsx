import StudentProfile from "./StudentProfile"
import "./StudentProfile.css"

const StudentProfileList = () => {
    const studentDataBase = [
        {name: "Letícia de Araújo",
         imgSrc: "https://img.freepik.com/fotos-premium/uma-personagem-de-desenho-animado-com-uma-camisa-amarela-que-diz-b_1109459-10005.jpg?semt=ais_hybrid&w=740&q=80",
         description: "A mãezinha dos GLs e do IHC"
        },

        {name: "Júlia Laiza",
         imgSrc: "https://img.freepik.com/premium-photo/lively-cartoon-girl-with-long-black-hair-embodying-charm-simplicity-against-plain-backdrop_1283595-14660.jpg",
         description: "A mãezinha do Figma e da UX"
        },

        {name: "Samara Helen",
         imgSrc: "https://img.freepik.com/vetores-premium/a-retrato-e-avatar-de-menina-riso-e-alegria-sorriso-e-calma-diversidade-de-personagens_147933-11235.jpg?semt=ais_hybrid&w=740&q=80",
         description: "A mãezinha dos desenhos e do inglês"
        },

        {name: "Larissa Maia",
         imgSrc: "https://img.freepik.com/vetores-premium/menina-elegante-com-cabelo-castanho-ilustracao-vetorial_1323048-66130.jpg?semt=ais_related_payload_trends&w=740&q=80",
         description: "A mãezinha da identidade visual"
        },
    ]    
    
    return (
        <>
            {
                studentDataBase.map((student) => <StudentProfile 
                    name = {student.name}
                    imgSrc={student.imgSrc}
                    description={student.description}
                />)
            }
         
        </>
    )
}

export default StudentProfileList