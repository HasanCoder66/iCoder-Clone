// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

//                           'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
const firebaseConfig = {
    apiKey: "AIzaSyCHifPSVebmZQLH3qGbKAs0E-I9DLNVghA",
    authDomain: "icoderclone.firebaseapp.com",
    projectId: "icoderclone",
    storageBucket: "icoderclone.appspot.com",
    messagingSenderId: "566909760138",
    appId: "1:566909760138:web:4f697960a94aa5db3b7373",
    measurementId: "G-H2GL83EJSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



// get Elements into HTML

const firstName = document.querySelector('#firstName ')
// console.log(firstName)
const surName = document.querySelector('#surName')
// console.log(surName)
const signupEmail = document.querySelector('#signup-Email')
// console.log(signupEmail.value)
const signupPassword = document.querySelector('#signup-Password')
// console.log(signupPassword.value)
const cPassword = document.querySelector('#C-Password')
// console.log(cPassword)
const signupBtn = document.querySelector('#signup-btn')
// console.log(signupBtn)
const loginBtn = document.querySelector('#loginBtn')
// console.log(loginBtn)
const loginEmail = document.querySelector('#loginEmail')
// console.log(loginEmail)
const loginPassword = document.querySelector('#loginPassword')
// console.log(loginPassword)



function loginHandler() {
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(loginEmail.value)
            console.log(loginPassword.value)
            if (user) {
                alert('User mil gaya')
                window.location.href = './services.html'
            } else {
                alert('bhai nhi mil raha to kahan chala gaya')
            }
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;


            // console.log(errorCode);
            // console.log(errorMessage);
        });
}

function signupHandler() {
    createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if (user) {
                // console.log(user)
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorCode)
            // console.log(errorMessage)

        })
}



signupBtn.addEventListener('click', signupHandler)
loginBtn.addEventListener('click', loginHandler)