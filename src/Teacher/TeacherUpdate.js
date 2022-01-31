import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { findByIdTeacher, updateTeacher} from '../service/TeacherService'
import './Teacher.css'

function Teacherpage () {
    const { teacherId } = useParams();
    const [teacher, setTeacher] = useState({nombre:'', apellido:'',email:'',num_cedula:'',profesion:'',cargo:''});

    const onSubmit = (event) => {
        event.preventDefault();
        updateTeacher(teacher);
    }

    const onChange = (event) =>{
        if(event.target.name==='nombre')
        setTeacher({...teacher,nombre:event.target.value})    
        
        if(event.target.name==='apellido')    
        setTeacher({...teacher,apellido:event.target.value})
        
        if(event.target.name==='email')
        setTeacher({...teacher,email:event.target.value})

        if(event.target.name==='num_cedula')
        setTeacher({...teacher,num_cedula:event.target.value})

        if(event.target.name==='profesion')
        setTeacher({...teacher,profesion:event.target.value})

        if(event.target.name==='cargo')
        setTeacher({...teacher,cargo:event.target.value})
    }

    useEffect(() => {    
        findByIdTeacher(teacherId).then(data => {
          setTeacher(data);  
        }
        );
    }, [teacherId]);

    return (
        <div className="boxUpdate">
            <form onSubmit={onSubmit} className="boxFormUpdate">
                <h2> Actualizar Datos de Profesor </h2>

                <input 
                    className="formUpdateInput"
                    name="nombre"
                    placeholder="Nombre" 
                    value={teacher.nombre}
                    onChange={onChange}
                />
  
                <input 
                    className="formUpdateInput" 
                    name="apellido"
                    placeholder="Apellido"
                    value={teacher.apellido}
                    onChange={onChange}
                />
        
                <input 
                    className="formUpdateInput"
                    name="email"
                    placeholder="Email"
                    value={teacher.email}
                    onChange={onChange}
                />

                <input 
                    className="formUpdateInput"
                    name="num_cedula"
                    placeholder="# Cedula"
                    value={teacher.num_cedula}
                    onChange={onChange}
                />

                <input 
                    className="formUpdateInput"
                    name="profesion"
                    placeholder="Profesion"
                    value={teacher.profesion}
                    onChange={onChange}
                />

                <input 
                    className="formUpdateInput"
                    name="cargo"
                    placeholder="Cargo"
                    value={teacher.cargo}
                    onChange={onChange}
                />

                <button type="submit" className="formUpdateBtn" >Guardar</button>

            </form>
            
        
            

        </div>
    );
}
export default Teacherpage;