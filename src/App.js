import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Game } from "./Game";
import { Random } from "./Random";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function App() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC2VQ9zRyv9llHCmPfNXEZL3D_7o243KqU",
    authDomain: "tictactoe-web-auth.firebaseapp.com",
    projectId: "tictactoe-web-auth",
    storageBucket: "tictactoe-web-auth.appspot.com",
    messagingSenderId: "1092873053832",
    appId: "1:1092873053832:web:8f9b9aeb8110fe57c5e13d",
    measurementId: "G-P3WP4YB030"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> 
        : currentForm === "register" ? <Register onFormSwitch={toggleForm} /> 
        : currentForm === "game" ? <Game onFormSwitch={toggleForm} />
        : <Random onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
