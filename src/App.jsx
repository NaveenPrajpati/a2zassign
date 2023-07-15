import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Task1 from './pages/Task1'
import NotFound from './pages/NotFound'
import Task2 from './pages/Task2'
import Task3 from './pages/Task3'

export const Mycontext=createContext()
function App() {
  const [showData, setShowData] = useState({})
  let values={
    showData,setShowData
  }

  return (
    <Mycontext.Provider value={values}>

    <Routes>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/' element={<Task1/>}/>
      <Route path='/task2' element={<Task2/>}/>
      <Route path='/task3' element={<Task3/>}/>
    </Routes>
    </Mycontext.Provider>
  )
}

export default App
