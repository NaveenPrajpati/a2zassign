import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Task1() {

    const [circles, setCircles] = useState([{ id: 1, count: 0, color: '#FFFF00' }]);
const navigate=useNavigate()
  
    const handleButtonClick = (circleId) => {
      const updatedCircles = circles.map(circle => {
        if (circle.id === circleId) {
          const randomNumber = Math.floor(Math.random() * 16777215);
          const newColor = `#${randomNumber.toString(16).padStart(6, "0")}`;
          return { ...circle, count: circle.count + 1, color:newColor};
        }
 
        return circle;
      });
      
      setCircles(updatedCircles);
    };
  
    const handleDuplicateCircle = (circleId) => {
      if (circles.length >= 10) return;
  
      const duplicatedCircle = circles.find(circle => circle.id === circleId);
      if (duplicatedCircle) {
        const newCircle = { ...duplicatedCircle, id: circles.length + 1, count: 0 };
        setCircles([...circles, newCircle]);
      }
    };
  
    

  return (
    <div>
   <div className='flex justify-around'>
      <p className='bg-teal-400 text-white p-2'>Welcome Assignment1 </p>
      <p className='bg-teal-400 text-white p-2 cursor-pointer hover:bg-teal-300' onClick={()=>navigate('/signup')}>Go For Assignment 2</p>
    </div>
    <div className="flex flex-col items-center justify-center h-screen">
    <div className="flex gap-5 justify-center flex-wrap">
    
        {circles.map(circle => (
    <div key={circle.id} className=' text-center w-fit'>
    <div style={{backgroundColor:circle.color}}  className='w-24 h-24  rounded-full m-2 flex flex-col justify-center items-center mx-auto'>
    <div className=" text-xl mb-2">{circle.count}</div>
            <div className="text-white font-semibold">{circle.color}</div>
    </div>
    
            <div className="flex mt-5 gap-2 mx-auto">
            <button
              className="bg-blue-500 text-white text-sm font-semibold p-2 rounded"
              onClick={() => handleButtonClick(circle.id)}
            >
              Count+
            </button>
            <button
              className="bg-red-500 text-white text-sm font-semibold p-2 rounded"
              onClick={() => handleDuplicateCircle(circle.id)}
            >
              Copy 
            </button>
          </div>
    </div>))}
    </div>

    <Link to={'/task2'} state={{length:circles.length}} className=' py-2 bg-blue-400 px-5 mt-10 rounded-lg text-white font-semibold'>Go for task2</Link>
    
    </div>
  </div>
  )
}
