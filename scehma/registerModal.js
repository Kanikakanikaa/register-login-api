const { DataTypes } = require("sequelize");
const sequelize = require("../connection");



const NewUser = sequelize.define("addUser", {
    name:{
        type:DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
      
    } 
  }
  ,{
    timestamps:false
});
  module.exports= NewUser