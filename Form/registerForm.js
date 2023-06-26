const new_user = require("../scehma/registerModal")
const bcrypt = require('bcrypt');
const saltRounds = 4;


const addUser=async(req,res)=>{
        const { email, password,name } = req;
        try {

            const salt =await bcrypt.genSalt(saltRounds);
            const hashPass= await bcrypt.hash(password,salt)
            console.log(hashPass,"hashPass")
            const user= await new_user.create({
                name,
                email,
                password:hashPass
                });
                console.log(user,"user")
                return res.status(200).send({
                    message: "Register Successfully",
                  });
        } catch (error) {
            return res.status(400).send({
                message: error.message,
              });
        }
      
}

module.exports={addUser}