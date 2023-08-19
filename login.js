import { auth } from "./firebase.mjs"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
let btn = document.getElementById("btn")
btn.addEventListener("click", () => {

  let email = document.getElementById("email").value
  let password = document.getElementById("password").value


  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      window.location.href = "./index.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});