import './Navbar.css'
import { NavLink } from "react-router-dom"

export default function Navbar (){
    
    return (
        <div className='topnav'> 
            
            <div>    
                <NavLink to={'/teacher'} className='navlink' >
                    Profesores
                </NavLink>
            </div>
            
            <div>
                <NavLink to={'/alumno'} className={'navlink'} >
                    Alumnos
                </NavLink>
            </div>    
            

        </div>
    );

}
