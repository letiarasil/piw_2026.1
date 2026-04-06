import "./StudentProfile.css"

const TeacherProfile = ( {name, imgSrc, titulo, description} ) =>
    <div className="card">
        <div className="picture">
            <img src = {imgSrc} 
                alt={`Foto da professora ${name}`} 
            />
        </div>

        <div className="name">
            <h2>{name}</h2>
            <p className="titulo">{titulo}</p>
        </div>

        <div className="description">
            <p>{description}</p>
        </div>
    </div>

export default TeacherProfile