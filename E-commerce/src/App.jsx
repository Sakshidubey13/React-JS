import React from 'react'
import {Routes, Route} from 'react-router'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

export default function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/navbar' element={<Navbar/>}/> 
      </Routes>
    </div>
  )
}
