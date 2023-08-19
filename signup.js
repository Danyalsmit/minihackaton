import { auth } from "./firebase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


let btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("scenod").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let repeatPassword = document.getElementById("repeatpassword").value;
``
  // Clear any previous error messages
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = "";

  if (firstName.length < 3) {
    event.preventDefault();
    alert("First name should be at least 3 characters.");
    return;
  }

  if (lastName.length <= 1) {
    event.preventDefault();
    alert("Last name should be exactly 1 character.");
    return;
  }

  if (firstName.length > 20 || lastName.length > 20) {
    event.preventDefault();
   alert("First name and last name should not exceed 20 characters.");
    return;
  }

  if (!password.match(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
    event.preventDefault();
    alert("Password must be at least 8 characters and include both uppercase and lowercase letters.");
    return;
  }

  if (password !== repeatPassword) {
    event.preventDefault();
    alert("Passwords do not match.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      window.location.href = "./login.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error.code", errorCode);
      console.log("errorMessage", errorMessage);
    });
});
