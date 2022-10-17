// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword,email,password} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyCpwEeTtNlkXfuCl-zIkFQfPgwlv5P8iU8",
  authDomain: "newlogin-636a6.firebaseapp.com",
  projectId: "newlogin-636a6",
  storageBucket: "newlogin-636a6.appspot.com",
  messagingSenderId: "424865246891",
  appId: "1:424865246891:web:437ce8dfccd4e88078d1ee",
  measurementId: "G-GCXQ0W1MK2"
};
const app=initializeApp(firebaseConfig)
export const auth =getAuth(app)
const provider=new GoogleAuthProvider();


// singup
// export const singUpwithGoole=()=>{
//   signInWithEmailAndPassword(auth, email, password)


// }






// Initialize Firebas
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
     

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      
    })
    .catch((error) => {
      console.log(error);
    });
};