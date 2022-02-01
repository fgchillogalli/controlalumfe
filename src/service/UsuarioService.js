const urlCrud = 'http://localhost:3001';

const getListUsuario = async () => {
    const response = await fetch(`${urlCrud}/usuario`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

export {
    getListUsuario,
}