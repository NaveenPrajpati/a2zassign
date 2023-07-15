import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Task2() {
    const location = useLocation()
  const { length } = location.state
let arr=[]
  useEffect(()=>{
    for(let i=1;i<=length;i++){
const data=fetch('https://random-data-api.com/api/v2/users')
console.log(data)
    }
  },[])


  return (
    <div>
    <div></div>
        <p>{length}</p>
    </div>
  )
}
