import React, { useState } from "react";
import './index.js';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const Login = (props) => {
    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     const uid = user.uid;
    //     // ...
    //   } else {
    //     // User is signed out
    //     // ...
    //   }
    // });
    
    const [email, setEmail] = useState('');
    // const email_import = (email_child) => {
    //     setEmail(email_child)
    // }

    const [pass, setPass] = useState('');
    // const pass_import = (pass_child) => {
    //     setPass(pass_child)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

        const auth = getAuth(); // FIREBASE STUFF
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // window.alert(user + " logged in");
                // ...
                props.onFormSwitch('game'); // If the sign in is valid, the screen switchs to the game screen
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert("ERROR: " + errorMessage);
            });
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password" />

                <button type="submit">Log In</button>
            </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}