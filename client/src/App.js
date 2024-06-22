import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./elements/Home";
import Edit from "./elements/Edit";
import Create from "./elements/Create";
import Read from "./elements/Read";
import Login from './elements/Login';
import Register from './elements/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/read/:id' element={<Read/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App