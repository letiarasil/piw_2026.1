import { useState } from "react";
import './FormularioAluno.css'

function FormularioAluno() {

    const [aluno, setAluno] = useState(
        {
            nome: "",
            sobrenome: "",
            idade: 18,
            universidade: "",
            curso: "", //radio button
            areas_interesse: {"mat":false, "deg":false, "des":false} //checkbox
        }
    )

    const onHandleChange = (event) => {
        const {name, value} = event.target //pega os atributos name e value através do target 
        setAluno({...aluno, [name]:value}) //[name] pegar o valor do atributo/propriedade name de cada input e coloca o valor recebido no campo
    }

    const onHandleCheckbox = (event) => {
        const {value, checked} = event.target //pega os atributos name e value através do target 
        setAluno({
            ...aluno,
            areas_interesse:{
                ...aluno.areas_interesse,
                [value]:checked
            }
        })
    }
 
    const handleSubmit = (event)  => {
        event.preventDefault();
        alert("Submetido!")
    }
    
    return (
        <div className="form-wrapper">
            <div className="form-card">
                <h1>Formulário - Aluno</h1>
                <p className="form-subtitle">Preencha os dados abaixo</p>
            </div>
            <div className="form-debug">
                {
                    JSON.stringify(aluno)
                }
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group"> 
                    <label htmlFor="nome">Nome: </label>
                    <input 
                        id="nome"
                        type="text"
                        name="nome"
                        value={aluno.nome}
                        placeholder="Insira seu nome"
                        onChange={onHandleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="sobrenome">Sobrenome: </label>
                    <input 
                        id="sobrenome"
                        type="text"
                        name="sobrenome"
                        value={aluno.sobrenome}
                        placeholder="Insira seu sobrenome"
                        onChange={onHandleChange}
                    />
                </div>

                <div className="form-group"> 
                    <label htmlFor="idade">Idade: </label>
                    <input 
                        id="idade"
                        type="number"
                        name="idade"
                        value={aluno.idade}
                        onChange={onHandleChange}
                    />
                </div>

                <div className="form-group"> 
                    <label htmlFor="universidade">Universidade: </label>
                    <select 
                        id="universidade"
                        name="universidade"
                        value={aluno.universidade}
                        onChange={(e) => setAluno({ ...aluno, universidade: e.target.value })}
                    >
                        <option value="vazio"></option>
                        <option value="ufc">Universidade Federal do Ceará - UFC</option>
                        <option value="uece">Universidade Estadual do Ceará - UECE</option>
                        <option value="ifce">Instituto Federal do Ceará - IFCE</option>
                    
                    </select>
                </div>

                <div className="radio-group">
                    <label htmlFor="curso">Curso:</label>
                    <div className="radio-options">
                        <label className="radio-option">Design Digital
                            <input 
                                type="radio" 
                                name="curso" 
                                value="dd" 
                                onChange={onHandleChange} 
                                checked={aluno.curso == "dd"} 
                            />
                        </label>
                        
                        <label className="radio-option">Ciência da Computação
                            <input 
                                type="radio" 
                                name="curso" 
                                value="cc" 
                                onChange={onHandleChange} 
                                checked={aluno.curso == "cc"} 
                            />
                        </label>

                        <label className="radio-option">Engenharia de Software
                            <input 
                                type="radio" 
                                name="curso" 
                                value="es" 
                                onChange={onHandleChange} 
                                checked={aluno.curso == "es"}
                            />
                        </label>

                        <label className="radio-option">Engenharia da Computação
                            <input 
                                type="radio" 
                                name="curso" 
                                value="ec" 
                                onChange={onHandleChange} 
                                checked={aluno.curso == "ec"} 
                            />
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="areas">Áreas de Interesse:</label>
                        <label className="radio-option">Experiência do Usuário
                            <input 
                                type="checkbox" 
                                name="areas" 
                                value="dd" 
                                onChange={onHandleCheckbox} 
                                checked="true"
                            />
                        </label>
                </div>

                <div>
                    <button className="btn-submit" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default FormularioAluno