const { DataTypes } = require("sequelize");
const sequelize = require("../connection");



const User = sequelize.define("newUser", {
    email:{
        type: DataTypes.STRING,
        unique:true,
        isEmail: true, 
    },
    password:{
        type: DataTypes.STRING,
      
    } 
  }
  ,{
    timestamps:false
});
        // User.hasOne(addUser); 
        //   addUser.belongsTo(User);

  module.exports= User