

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("btn");
 console.log(emailInput)
btn.addEventListener("click", () => {
  
  const email = emailInput.value;
  const password = passwordInput.value;

    axios.post("http://localhost:8081/login", {
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response);
    });
});