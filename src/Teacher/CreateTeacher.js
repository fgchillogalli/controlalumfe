import React, {useState} from "react";
import { createTeacher } from "../service/TeacherService";
import './TituloTeacher.css'

function CreateTeacher () {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState ('');
    const [email, setEmail] = useState('');
    const [num_cedula, setNum_cedula] = useState('');
    const [profesion, setProfesion] = useState('');
    const [cargo, setCargo] = useState('');

    const onSubmit = (event) => {
        event.preventDefault ();
        
        const objeto = { 
          nombre: nombre,
          apellido: apellido,
          email: email,
          num_cedula: num_cedula,
          profesion: profesion,
          cargo: cargo,
        }
        createTeacher(objeto);   
    }

    const onChange = (event) => {
        
        if (event.target.name ==='nombre')
        setNombre(event.target.value)

        if (event.target.name ==='apellido')
        setApellido(event.target.value)
    
        if (event.target.name ==='email')
        setEmail(event.target.value)

        if (event.target.name ==='num_cedula')
        setNum_cedula(event.target.value)

        if (event.target.name ==='profesion')
        setProfesion(event.target.value)

        if (event.target.name ==='cargo')
        setCargo(event.target.value)
    }

    return (
        <div>
            <h2> Ingresar Nuevos Profesores </h2>
            <form className='datosEntrada' onSubmit={onSubmit} > 
                <label>
                    Nombre:
                    <input className="cuadros"
                        name='nombre'
                        value={nombre}
                        onChange={onChange}
                    />
                </label> 

                <label>
                    Apellido:
                    <input className="cuadros"
                        name="apellido"
                        value={apellido}
                        onChange={onChange}                    
                    />
                </label>

                <label>
                    Email:
                    <input className="cuadros"
                        name='email'
                        value={email}
                        onChange={onChange}
                    />
                </label>

                <label>
                    # Cedula:
                    <input className="cuadros"
                        name='num_cedula'
                        value={num_cedula}
                        onChange={onChange}
                    />
                </label>

                <label>
                    profesion:
                    <input className="cuadros"
                        name='profesion'
                        value={profesion}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Cargo:
                    <input className="cuadros"
                        name='cargo'
                        value={cargo}
                        onChange={onChange}
                    />
                </label>
      
                <button className="button" type='submit'> Guardar </button>
            </form>
        </div>
    );
}

export default CreateTeacher;