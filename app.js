import { db } from "./firebase.mjs"
import { addDoc, collection,getDocs} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

let pub=document.getElementById("pub")

pub.addEventListener("click",async()=>
{
    let plc=document.getElementById("plc").value
let main=document.getElementById("main").value
    try {
        const docRef = await addDoc(collection(db, "users"), {
          text: main,
          description:plc
          
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
})
window.abc=async()=>{
    
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
 console.log(doc.data());
 console.log(doc.id);
});}
abc()





