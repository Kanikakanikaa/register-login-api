const express = require("express");
const cors = require("cors");
require("./connection");
const app = express();
const port = 8081;
const ctrl = require("./controller/userController");
const register = require("./Form/registerForm");
const login = require("./Form/loginForm");
const {
  loginValidationRules,
  validate,
} = require("./Validations/loginValidation");
const { Token, verifyToken } = require("./jsonToken");
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",verifyToken, function (req, resp) {
  resp.send("home");
});
app.post("/loginn", async (req, res) => {
  console.log("request", req.body);
  const data = await ctrl.addUser(req.body);
  res.status(200).send(JSON.stringify(data));
});

app.post("/login", loginValidationRules, validate, async (req, res) => {
  await login.loginUser(req, res);
});
app.post("/register", async (req, res) => {
  await register.addUser(req.body, res);
});
app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
