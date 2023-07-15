import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../services/UserService';
import { toast } from 'react-hot-toast';



function Signup() {
    const [isActive, setIsActive] = useState(true);
    const navigate=useNavigate()
    const[otpbtn,setOtpbtn]=useState(false)
    const [signupData,setSignupData]=useState({
        name:"",
        email:"",
        password:""
    })

    function handleChange(event){
        setSignupData({...signupData,[event.target.name]:event.target.value});
      
        
    }




    function savehandle(event){
        event.preventDefault();


    registerUser(signupData)
    .then(res=>{
        if(res.status===201)
        toast('user registered successfully')
        console.log(res.data.message)

        setSignupData({
          name:"",
          email:"",
        
          password:""
      })
        navigate('/login')
    })
    .catch(error=>{
        console.log(error)
    })
    }


 
  return (
    <div>
    <div className="mt-20 flex flex-col">
            <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form onSubmit={savehandle} className=" px-6 py-6 rounded shadow-md text-black w-full">
           
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Signup Here
          </h2>

                

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-2 rounded my-4 "
                        name="name"
                        placeholder="Name" 
                        required
                        value={signupData.name}
                        onChange={handleChange}
                        />
                    

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-2 rounded mb-4"
                        name="email"
                        required
                        onChange={handleChange}
                        value={signupData.email}
                        placeholder="add any fake email" />


                   

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-2 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        required
                        value={signupData.password}
                        onChange={handleChange}
                         />
                        
                        
                     
                    <button
                       type='submit'
                        className="w-full text-center py-2 rounded bg-green text-white bg-green-400 focus:outline-none my-1"
                    >Create Account</button>
              
             

                    
                </form>
                

                <div className="text-grey-dark mt-4">
                    Already have an account? 
                    <Link className="no-underline border-b border-blue text-blue-600" to={"/login"}>
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
        </div>
  )
}

export default Signup