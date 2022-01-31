import { Link } from "react-router-dom";
import "./Alumno.css"


function Alumno(props){
    return(
      <tr>
            <td>{props.itemAlumno.id}</td> 
            <td>{props.itemAlumno.nombre}</td> 
            <td>{props.itemAlumno.apellido}</td> 
            <td>{props.itemAlumno.num_cedula}</td>
            <td>{props.itemAlumno.curso}</td>   
            <td>{props.itemAlumno.num_celular}</td>   
            <td><Link to={`/updatealumno/${props.itemAlumno.id}`}>Edit</Link></td>

      </tr>
    );
}

export default Alumno;