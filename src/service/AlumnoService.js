const urlCrud = 'http://localhost:3001';

const getListAlumno = async () => {
    const response = await fetch(`${urlCrud}/alumno`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const createAlumno = async (alumno) => {
    console.log(alumno);
const resp = await fetch(`${urlCrud}/alumno`, {
    method: 'POST',
    body: JSON.stringify(alumno),
    headers: {
        'Content-type': 'application/json'
    }
});
return await resp.json();
}

//Obtener solo una id
const findByIdAlumno = async (alumnoId) => {
    const response = await fetch(`${urlCrud}/alumno/${alumnoId}`);  
    const data = await response.json();     
    return  data;
}

const updateAlumno = async (alumno) => {
  
    const resp = await fetch(`${urlCrud}/alumno`, {
        method: 'PUT',
        body: JSON.stringify(alumno),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListAlumno,
    createAlumno,
    findByIdAlumno,
    updateAlumno
}