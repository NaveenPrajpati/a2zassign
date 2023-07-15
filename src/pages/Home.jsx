import React, { useContext, useEffect, useState } from 'react'
import { Mycontext } from '../App'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const {userData}=useContext(Mycontext)
  const[showcreateticket,setshowcreateticket]=useState(false)
  const navigate=useNavigate() 
    const [formData, setFormData] = useState({
      leadSource: '',
      name: '',
      contactNumber: '',
      email: '',
      vehicleMake: '',
      vehicleRegistrationNumber: '',
      breakdownIssue: '',
      location: '',
      serviceFee: '',
      assistanceTime: '',
      comments: '',
    });
   

  

    const handleChange = (event) => {
        const newValue = event.target.value.replace(/\s/g, "");
        setFormData({...formData,vehicleRegistrationNumber:newValue})
      };

    const hour = new Date().getHours();
  let greeting = '';

  if (hour >= 5 && hour < 12) {
    greeting = 'Good Morning';
  } else if (hour >= 12 && hour < 17) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
      console.log(formData)
      toast('New Task Created Successfully');
      setshowcreateticket(false)
    };

     useEffect(()=>{
     if(!userData?.user?.name){

         navigate('/login')   
        }
     },[])

  return (
    <div>
    {!showcreateticket &&  <div>

   
   <nav className='bg-slate-200 flex '>
        <p className='p-2 bg-blue-500 text-white mx-auto cursor-pointer w-fit rounded-lg' onClick={()=>setshowcreateticket(true)}>create new ticket</p>
        <p className='p-2 bg-blue-500 text-white mx-auto cursor-pointer w-fit rounded-lg' onClick={()=>navigate('/')}>go to assignment 1</p>
    </nav>

<p className='text-center font-semibold mt-10'>{greeting} Rescuer! How are 
you doing today {userData.user.name}</p>
    
    </div>}
    {showcreateticket && <div className="mt-5 container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <h1 className='font-semibold'>Create a New Ticket <span className='bg-red-400 rounded-md px-1 text-white cursor-pointer' onClick={()=>setshowcreateticket(false)}>X</span></h1>
      <form onSubmit={handleSubmit} className='px-6 py-6 rounded shadow-md text-black w-full'>
        <div>
          
          <select name="leadSource" id="leadSource" onChange={handleInputChange} className='font-semibold border border-grey-light w-full p-2' required>
            <option value="" >Select Lead Source</option>
            <option value="Web">Web</option>
            <option value="Chat">Chat</option>
            <option value="Call">Call</option>
          </select>
        </div>
        <input 
                        type="text"
                        className="block border border-grey-light w-full p-2 rounded my-4 "
                        name="name"
                        placeholder="Name" 
                        required
                        onChange={handleInputChange}
                        />
        <input 
                        type="tel"
                        className="block border border-grey-light w-full p-2 rounded my-4 "
                        name="contactNumber"
                        placeholder="Contact number" 
                        required
                        onChange={handleInputChange}
                        />
        <input 
                        type="email"
                        className="block border border-grey-light w-full p-2 rounded my-4 "
                        name="email"
                        placeholder="Email address" 
                        required
                        onChange={handleInputChange}
                        />
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-2 rounded my-4 "
                        name="vehicleMake"
                        placeholder="Vehicle Make" 
                        required
                        onChange={handleInputChange}
                        />
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-2 rounded my-4 uppercase whit"
                        value={formData.vehicleRegistrationNumber}
                        placeholder="Vehicle Registration Number" 
                        required
                        pattern='^[^ ]+$'
                        onChange={handleChange}
                        />
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-2 rounded my-4 "
                        name="breakdownIssue"
                        placeholder="Breakdown Issue" 
                        required
                        onChange={handleInputChange}
                        />
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-2 rounded my-4 "
                        name="location"
                        placeholder="Location" 
                        required
                        onChange={handleInputChange}
                        />
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-2 rounded my-4 "
                        name="serviceFee"
                        placeholder="Service Fee" 
                        onChange={handleInputChange}
                        />
                        <label htmlFor="" className='font-semibold'>Assistance Time</label>

                    <input 
                        type="datetime-local"
                        className="block border border-grey-light w-full p-2 rounded  mb-4 "
                        name="assistanceTime"
                        placeholder="Assistance Time" 
                        onChange={handleInputChange}
                        />
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-2 rounded my-4 "
                        name="comments"
                        placeholder="Comments" 
                        onChange={handleInputChange}
                        />
       
        <button type="submit" className='bg-blue-500 p-2 text-white rounded-md'>Submit</button>
      </form>
    </div>}
    </div>
  )
}
