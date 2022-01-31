import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Teacher from './Teacher'
import TeacherList from "./TeacherList";
import { getListTeacher} from '../service/TeacherService';
import './TituloTeacher.css'

function Teacherpage (){
    
    const [teacher, setTeacher] = useState([]);

    useEffect(() => {
        getListTeacher().then(data => {
          setTeacher(data);
        }
        );
    }, []);

    return (
        <div>
            <h1 className="header">*** Listado de Profesores ***</h1>
            <Link className="button2"   to='/createteacher'>
                Crear
            </Link>
            
            <TeacherList>
                {
                    teacher.map(item =>
                        <Teacher 
                            key = {item.id}
                            itemTeacher = {item}                          
                        />
                    )
                }
            </TeacherList>
        </div>
    );
}
export default Teacherpage;