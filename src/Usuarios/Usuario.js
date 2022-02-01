function Usuario (props){
    return(
        <tr>
            
            <ul>{props.itemUsuaio.id}</ul>
            <ul>{props.itemUsuaio.username}</ul>
            <ul>{props.itemUsuaio.password}</ul>
            <ul>{props.itemUsuaio.status}</ul>
        </tr>
    );
}

export default Usuario;