import React, { useState, useEffect } from "react";
import Alumno from "./Alumno"
import { Link } from "react-router-dom";
import AlumnoList from "./AlumnoList"
import { getListAlumno} from '../service/AlumnoService';
import "./Titulo.css"


function Alumnopage () {

    const [alumno, setAlumno] = useState([]);

    useEffect(() => {
        getListAlumno().then(data => {
          setAlumno(data);
        }
        );
    }, []);

    return (
        <div>
            <h1 className="header">*** Listado de Alumnos ***</h1>
            <Link className="button2" to='/createalumno'>
                Crear
            </Link>
            
            
            <AlumnoList>
                {
                    alumno.map (item =>

                        <Alumno 
                            key={item.id}
                            itemAlumno = {item}

                        />                       
                    )

                }
            </AlumnoList>
        </div>
    );

};

export default Alumnopage;
