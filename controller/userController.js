const { response } = require("express");
const User = require("../scehma/loginModal")


const addUser=async(req,res)=>{
    try {
        const { email, password } = req;
        const user= await User.create({
            email,
            password
            });
            console.log(user,"user")
            return user ;
        // if(user){
        //     return res.status(200).send({ error:false, message:'success'});
           
        // }
    } catch (error) {
     console.log("error", error)
    //  return { error:true, message:'Failed'};
    // return  res.status(400).send ({ error:true, message:error.message});
    }

    
}

module.exports={addUser}