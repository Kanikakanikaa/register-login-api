const User = require("../scehma/loginModal");
const loginValidationRules = require("../Validations/loginValidation");
const registerUsers = require("../scehma/registerModal");
const bcrypt = require("bcrypt");
const { Token } = require("../jsonToken");
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, "email");
    let checkExist = await registerUsers.findOne({
      where: {
        email,
      },
    });
     console.log(checkExist?.dataValues?.email,"checkExist")

    if (checkExist?.dataValues?.email !== undefined) {

      const token= await Token(checkExist?.dataValues?.email)
      // console.log(token,"token")
      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(
        password,
        checkExist?.dataValues?.password
      );
      console.log(passwordMatch, "passwordMatch");
      if (passwordMatch) {
        await User.create({
          email,
          password: checkExist?.dataValues?.password,
        });

        if (res.status === 200) {
          app.get("/", function (req, resp) {
            resp.send("welcome");
          });
        }
        return res.status(200).send({
          data:token,
          message: "login Successfully",
        });
      } else {
        return res.status(400).send({
          message: "incorrect email password",
        });
      }
    } 
    
    else {
      return res.status(400).send({
        message: "user not exist IN OUR LIST",
      });
    }
  
  
  }
   catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

module.exports = { loginUser };
