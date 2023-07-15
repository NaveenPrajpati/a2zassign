
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');



exports.registerUser=async(req,res)=>{
    

    const{name,email,password}=req.body;

    if(!name || !email || !password ) {
       return res.status(400).json({
            success:false,
            message:"all field ara necessary"
        })
    }
    const userPresent=await userModel.findOne({email});
    if(userPresent){
       return res.status(400).json({
            success:false,
            message:"user already register go to login"
        })
    }
    const hashedPassword=await bcrypt.hash(password,10);

    const user=await userModel.create({name,email,password:hashedPassword});
    if(user){
       return res.status(201).json({
            success:true,
            message:'user registered',
            user:{ id:user._id,email:user.email,name:user.name}})
    }else{
       return res.status(400).json({
            success:false,
            message:"unable to register user"
        })
    }
   
}



exports.loginUser=async(req,res)=>{

    const {email,password}=req.body;
    console.log(req.body)
    if(!email || !password){
       return res.status(400).json({
            success:false,
            message:"all fields are required"
        })
    }
    const findUser=await userModel.findOne({email});
    
    if(!findUser){
       return res.status(400).json({
            success:false,
            message:"user not register"
        })  
    }
    //compare password with hashpassword
    if(await bcrypt.compare(password,findUser.password)){
     const user={
            name:findUser.name,
               
                id:findUser._id
        }
        

       return res.status(200).json({
            success:true,
            user
        });
    }
    else{
       return res.status(401).json({
            success:false,
        message:"email or password invalid"
    })
    }
}


//access private
exports.createPassword=async (req,res)=>{
    const {email,newPassword,confNewPassword}=req.body;

    const check=await userModel.findOne({email});

    if(!check) {
       return res.status(400).json({
            success: false,
            message: 'invalid Email address'
        })
    }
        if(newPassword !== confNewPassword){
           return res.status(400).json({
                status:false,
                message:'password and confirm password mismatch'
            })
        }

        //hash password
        const hashedPassword=await bcrypt.hash(newPassword,10);


        await userModel.findOneAndUpdate({email:check.email},{password:hashedPassword},{new:true})
            .then(response=>{
                res.status(201).json({
                    success:true,
                    message:'password changed successfully'
                })
            })
            .catch(err=>{
                console.log(err)
            })


}

exports.getAllUsers=async(req,res)=>{
    try {
        const po=await userModel.find({role:"user"})
        let users=[]
        po.forEach(it=>{
            users.push({
                id:it._id,
                name:it.name
            })
        })
        if(po==[]){
           return res.status(400).json({
                seuccess:false,
                message:'User not found'
            })
        }else
        return res.status(200).json({
            success:true,
            users:users
         })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success:false,
            message:'problem in getting users'
         })
    }
}
