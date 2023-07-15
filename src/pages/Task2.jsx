import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Mycontext } from '../App'

export default function Task2() {
  const location = useLocation()
  const { length } = location.state
  const [arr, setArr] = useState([]);
  const {setShowData}=useContext(Mycontext)
  const navigation=useNavigate()

  async function getData() {
    try {
      let tempArr = [];
      for (let i = 0; i < length; i++) {
        const response = await axios.get('https://random-data-api.com/api/v2/users');
        console.log(response.data)
        tempArr.push(response.data);
      }
      setArr(tempArr);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function gottopage(it){
    setShowData(it)
navigation('/task3')
  }

  return (
    <div>
      <div className='grid sm:grid-cols-3 grid-cols-1 mx-auto'>
        {arr.map((it, index) => (
          <div key={index} className='bg-slate-100 p-4 m-2 w-fit cursor-pointer hover:shadow-xl active:scale-105' onClick={()=>gottopage(it)}>
            <p className=' border-b-2'>{it.username}</p>
            <img src={it.avatar} alt="" className='w-[200px] h-[150px]'/>
            <p><span className='font-bold'>ID: </span>{it.id}</p>
            <p><span className='font-bold'>Full Name: </span>{it.first_name} {it.last_name}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
