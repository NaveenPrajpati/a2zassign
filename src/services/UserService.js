import axios from "axios";

// const BaseUrl='http://localhost:4000/user';
const BaseUrl='https://a2zassignmentback.onrender.com/user';

 export const registerUser=(user)=>{
        return axios.post(BaseUrl+"/register",user);
    }
 export const loginUser=(user)=>{
        return axios.post(BaseUrl+"/login",user);
    }
 export const createNewPassword=(user)=>{
        return axios.put(BaseUrl+"/forget",user);
    }




