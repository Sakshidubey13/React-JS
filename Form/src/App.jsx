import React  from "react"
import Form from "./components/Form/Form"
import Navbar from "./components/Navbar/Navbar"
import {Routes,Route} from 'react-router'


export default function App(){
  return(
    <div>
      <Routes>
        <Route path='/' element={<Form/>} />
        <Route path='/users' element={<User/>}/>
      </Routes>
      <Navbar/>
     <Form />
    
      </div>
  )
}

//routes ->way 