import React, {useState, useEffect} from 'react';
import UsuarioList from './UsuarioList';
import { getListUsuario} from '../service/UsuarioService';
import Usuario from './Usuario';


function UsuarioPage (){
    const [usuario, setUsuario] = useState ([]);

    useEffect(() => {
        getListUsuario().then(data => {
          setUsuario(data);
        }
        );
    }, []);

    return (
        <div>
            <h1>***Lista de Usuarios***</h1>
            <UsuarioList>
                {
                    usuario.map(item =>
                        <Usuario
                            key = {item.id}
                            itemUsuario = {item}
                        />  
                    )
                }

            </UsuarioList>

        </div>

    );

}
export default UsuarioPage;