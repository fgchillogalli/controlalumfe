const urlCrud = 'http://localhost:3001';

const getListTeacher = async () => {
    const response = await fetch(`${urlCrud}/teacher`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const createTeacher = async (teacher) => {
        console.log(teacher);
    const resp = await fetch(`${urlCrud}/teacher`, {
        method: 'POST',
        body: JSON.stringify(teacher),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

//Obtener solo un id
const findByIdTeacher = async (teacherId) => {
    const response = await fetch(`${urlCrud}/teacher/${teacherId}`);  
    const data = await response.json();     
    return  data;
}

const updateTeacher = async (teacher) => {
  
    const resp = await fetch(`${urlCrud}/teacher`, {
        method: 'PUT',
        body: JSON.stringify(teacher),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListTeacher,
    createTeacher,
    updateTeacher,
    findByIdTeacher

}

