import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeacherPage from "./Teacher/TeacherPage";
import AlumnoPage from "./Alumno/AlumnoPage";
import AlumnoUpdate from "./Alumno/AlumnoUpdate"
import CreateTeacher from "./Teacher/CreateTeacher";
import TeacherUpdate from "./Teacher/TeacherUpdate";
import Navbar from "./Components/Navbar";
import CreateAlumno from "./Alumno/CreateAlumno";
import UsuarioPage from "./Usuarios/UsuarioPage";



function App() {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path = '/teacher' element = {< TeacherPage />} />
                <Route path = '/alumno' element = {< AlumnoPage />} />
                <Route path = '/createteacher' element = {< CreateTeacher />} />
                <Route path = '/createalumno' element = {< CreateAlumno />} />
                <Route path = '/updateteacher/:teacherId' element = { <TeacherUpdate />} /> 
                <Route path = '/updatealumno/:alumnoId' element = {<AlumnoUpdate />} />
                <Route path = '/usuario' element = {< UsuarioPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
