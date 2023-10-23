import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyABpF5Aq3pvwYfqSGd4A1LfyhjgKApnFmE",
    authDomain: "test-project-2b.firebaseapp.com",
    projectId: "test-project-2b",
    storageBucket: "test-project-2b.appspot.com",
    messagingSenderId: "545460196890",
    appId: "1:545460196890:web:c8718f9b0776412ddaa3a3",
    measurementId: "G-24X003ETZV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

let lemail = document.querySelector("#lemail");
let lpassword = document.querySelector("#lpassword");
let lbtn = document.querySelector("#lbtn");


lbtn.addEventListener("click", () => {

    signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            location.href = "./index.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
})

lpassword.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        lbtn.click()
    }
})