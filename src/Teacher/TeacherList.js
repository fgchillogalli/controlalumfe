function TeacherList(props){
    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>email</th>
                    <th># Cedula</th>
                    <th>Profesion</th>
                    <th>Cargo</th>
                    
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>

        </table>
    );
}   
export default TeacherList
