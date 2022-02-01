function Usuario (props){
    return(
        <div>
            <li>
                {props.itemUsuaio.id}
                {props.itemUsuaio.username}
                {props.itemUsuaio.password}
                {props.itemUsuaio.status}
            </li>
            
        </div>
    );
}

export default Usuario;