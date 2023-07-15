import React, { useContext } from 'react'
import { Mycontext } from '../App'
import { useNavigate } from 'react-router-dom'

export default function Task3() {
  const {showData}=useContext(Mycontext)
  const navigation=useNavigate()

  return (
    <div>
        <div  className='bg-slate-100 p-4 m-2 w-fit mx-auto' >
        <div className='flex justify-between items-center'>
            <p className=' border-b-2'>{showData.username}</p>
            <p className='text-red-500 font-bold cursor-pointer' onClick={()=>navigation(-1)}>X</p>
        </div>
            <img src={showData.avatar} alt="" className=''/>
            <p><span className='font-bold'>ID: </span>{showData.id}</p>
            <p><span className='font-bold'>Full Name: </span>{showData.first_name} {showData.last_name}</p>
          </div>
    </div>
  )
}
