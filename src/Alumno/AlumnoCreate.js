import React, {useState} from "react";
import { createAlumno } from "../service/AlumnoService";
import './Titulo.css'

function CreateAlumno (){
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState ('');
    const [num_cedula, setNum_cedula] = useState('');
    const [curso, setCurso] = useState('');
    const [num_celular, setNum_ceular] = useState('');

    const onSubmit = (event) => {
        event.preventDefault ();
        
        const objeto={ 
          nombre: nombre,
          apellido: apellido,
          num_cedula: num_cedula,
          curso: curso,
          num_celular: num_celular,
          
        }
        createAlumno(objeto);   
    }

    const onChange = (event) => {
        if (event.target.name ==='nombre')
        setNombre(event.target.value)

        if (event.target.name ==='apellido')
        setApellido(event.target.value)
    
        if (event.target.name ==='num_cedula')
        setNum_cedula(event.target.value)
        
        if (event.target.name ==='curso')
        setCurso(event.target.value)

        if (event.target.name ==='num_celular')
        setNum_ceular(event.target.value)
    }

    return (

        <div> 
            <h2 className="headerRegister"> ***Alumnos*** </h2>
            <form className="cuadro" onSubmit={onSubmit}>
                <label>
                    Nombre: 
                    <input className="datos"
                        name="nombre"
                        value={nombre}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Apellido:
                    <input className="datos" 
                        name="apellido"
                        value={apellido}
                        onChange={onChange}
                    />
                </label>

                <label>
                    # Cedula:
                    <input className="datos"
                        name="num_cedula"
                        value={num_cedula}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Curso:
                    <input className="datos"
                        name="curso"
                        value={curso}
                        onChange={onChange}
                    />
                </label>

                <label>
                    # Celular:
                    <input className="datos"
                        name="num_celular"
                        value={num_celular}
                        onChange={onChange}
                    />
                </label>
                <button className="button" type="submit">Guardar</button>
            </form>
        </div>
    );
};
export default CreateAlumno;