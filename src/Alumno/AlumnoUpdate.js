import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { findByIdAlumno, updateAlumno} from '../service/AlumnoService'
import './Alumno.css'

function Alumnopage () {
    const { alumnoId } = useParams();
    const [alumno, setAlumno] = useState({nombre:'',apellido:'',num_cedula:'',curso:'',num_celular:''});

    const onSubmit = (event) => {
        event.preventDefault();
        updateAlumno(alumno);
    }

    const onChange = (event) =>{
        if(event.target.name==='nombres')
        setAlumno({...alumno,nombre:event.target.value})    
        
        if(event.target.name==='apellido')    
        setAlumno({...alumno,apellido:event.target.value})
        
        if(event.target.name==='num_cedula')
        setAlumno({...alumno,num_cedula:event.target.value})

        if(event.target.name==='curso')
        setAlumno({...alumno,curso:event.target.value})

        if(event.target.name==='num_celular')
        setAlumno({...alumno,num_celular:event.target.value})
    }

    useEffect(() => {    
        findByIdAlumno(alumnoId).then(data => {
          setAlumno(data);  
        }
        );
    }, [alumnoId]);

    return (
        <div className="boxUpdate">
            <form onSubmit={onSubmit} className="boxFormUpdate" >
                <h2> Actualizar Tabla de Alumnos </h2>

                <input
                    className="formUpdateInput"
                    name="nombre"
                    placeholder="Nombre" 
                    value={alumno.nombre}
                    onChange={onChange}
                />

                <input
                    className="formUpdateInput"
                    name="apellido"
                    placeholder="Apellido" 
                    value={alumno.apellido}
                    onChange={onChange}
                />

                <input
                    className="formUpdateInput"
                    name="num_cedula"
                    placeholder="Cedula" 
                    value={alumno.num_cedula}
                    onChange={onChange}
                />

                <input
                    className="formUpdateInput"
                    name="curso"
                    placeholder="Curso" 
                    value={alumno.curso}
                    onChange={onChange}
                />

                <input
                    className="formUpdateInput"
                    name="num_celular"
                    placeholder="Celular" 
                    value={alumno.num_celular}
                    onChange={onChange}
                />


                <button type="submit" className="formUpdateBtn">Guardar</button>
            </form>

        </div>
    );

}
export default Alumnopage;