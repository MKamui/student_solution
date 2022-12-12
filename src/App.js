import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Error from './components/Error'
import List from './components/List'
import Courses from './components/Courses';
import Detail from './components/Detail';
import AddRemove from './components/AddRemove';
import About from './components/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/students' element={<List/>}/>
        <Route path='/students/:id' element={<Detail/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/students/:id/addremove' element={<AddRemove/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
