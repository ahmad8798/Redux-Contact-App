import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import GridSysytem from './components/GridSysytem'
import AlertComponent from './components/AlertComponent'
import EditContact from './components/EditContact'
// import TextField from '@mui/material/TextField'
import AddContact from './components/AddContact'
import { ToastContainer} from 'react-toastify';
import Home from './components/Home'
import Nav from './components/Nav'
import './app.css'
const App = () => {
 
  return (
      <>
      <ToastContainer/>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<AddContact/>}/>
            <Route path='/edit/:id' element={<EditContact/>} />
        </Routes>
      </>
  )
}

export default App
