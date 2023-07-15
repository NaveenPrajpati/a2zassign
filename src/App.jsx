import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Task1 from './pages/Task1'
import NotFound from './pages/NotFound'
import Task2 from './pages/Task2'
import Task3 from './pages/Task3'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

export const Mycontext=createContext()
function App() {
  const [showData, setShowData] = useState({})
  const [userData, setUserData] = useState({})
  let values={
    showData,setShowData,userData,setUserData
  }

  return (
    <Mycontext.Provider value={values}>

    <Routes>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/' element={<Task1/>}/>
      <Route path='/task2' element={<Task2/>}/>
      <Route path='/task3' element={<Task3/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </Mycontext.Provider>
  )
}

export default App
