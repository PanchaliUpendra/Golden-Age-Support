import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import About from './Components/About/About';
import Contactus from './Components/Contactus/Contactus';
import MyContext from './MyContext';
import Profile from './Components/Profile/Profile';
import Createservice from './Components/Createservice/Createservice';
import Services from './Components/Services/Services';

function App() {
  const sharedvalue= useContext(MyContext);

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        {sharedvalue.isAuthed===false && <Route path='/login' element={<Login/>}/>}
        {sharedvalue.isAuthed===false && <Route path='/register' element={<Register/>}/>}
        {sharedvalue.isAuthed===true && <Route path='/profile' element={<Profile/>}/>}
        <Route path='/services' element={<Services/>}/>
        <Route path='/createservice' element={<Createservice/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contactus/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
