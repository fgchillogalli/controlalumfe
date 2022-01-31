
function AlumnoList(props){
   
    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th># Cedula</th>
                    <th>Curso</th>
                    <th># Celular</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    );
}   
export default AlumnoList;