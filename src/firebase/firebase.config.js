// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWqMqoU6utrMDdfSqF7pjhhb3sRjnYm5U",
    authDomain: "react-dragon-news-9cae8.firebaseapp.com",
    projectId: "react-dragon-news-9cae8",
    storageBucket: "react-dragon-news-9cae8.appspot.com",
    messagingSenderId: "780329189553",
    appId: "1:780329189553:web:2175348bf132f127ca6290"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;