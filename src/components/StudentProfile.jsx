import "./StudentProfile.css"

const StudentProfile = ( {name, imgSrc, description} ) =>
    <div className="card">
        <div className="name">
            <h2>{name}</h2>
        </div>

        <div className="picture">
            <img src = {imgSrc} 
                alt={`Foto do(a) estudante ${name}`} 
            />
        </div>

        <div className="description">
            <p>{description}</p>
        </div>
    </div>

export default StudentProfile