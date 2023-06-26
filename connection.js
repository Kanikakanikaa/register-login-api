const { Sequelize, DataTypes } = require("sequelize");

//scemA OF DB
const sequelize = new Sequelize("test", "root", "admin123", {
  host: "localhost",
  dialect: "mysql",
  //to remove the unacessery line in terminal
  logging:false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,

  },
});

//check db connet or not
sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("Some error accured");
  });

// to sync the models
sequelize
  .sync({ alter: false })
  .then(() => {
    console.log("All Models synced succesfully:");
  })
  .catch((error) => {
    console.log("Error syncing db models: ", error);
  });

//only false when db is match name test
// db.sequelize.sync({force:true , match:/-test$/})
//     .then(()=>{
//       console.log("yes re sync"  )

// })

// const db = {};
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// db.user = require("./scehma/model");
// console.log(db.user,"user")

module.exports = sequelize;
