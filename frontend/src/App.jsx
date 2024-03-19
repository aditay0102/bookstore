import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Details from './pages/Details';
import Delete from './pages/Delete';
import Create from './pages/Create';


 
 // const [loading,setLoading] = useState(false);




const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/books/details/:id' element={<Details/>} />
    <Route path='/books/edit/:id' element={<Edit/>} />
    <Route path='/books/delete/:id' element={<Delete/>} />
    <Route path='/books/create' element={<Create/>} />
    </Routes>
  )
}

export default App;





