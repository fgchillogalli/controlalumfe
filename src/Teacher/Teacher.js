import { Link } from "react-router-dom";
import './Teacher.css'

function Teacher(props){
    return(
        <tr>
            <td>{props.itemTeacher.id}</td> 
            <td>{props.itemTeacher.nombre}</td> 
            <td>{props.itemTeacher.apellido}</td> 
            <td>{props.itemTeacher.email}</td>
            <td>{props.itemTeacher.num_cedula}</td>
            <td>{props.itemTeacher.profesion}</td>
            <td>{props.itemTeacher.cargo}</td> 
            <td><Link to={`/updateteacher/${props.itemTeacher.id}`}>Edit</Link></td>
        </tr>
    );
}

export default Teacher;