import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Task1 from './pages/Task1'
import NotFound from './pages/NotFound'
import Task2 from './pages/Task2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/' element={<Task1/>}/>
      <Route path='/task2' element={<Task2/>}/>
    </Routes>
  )
}

export default App
