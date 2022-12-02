import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

        const auth = getAuth(); // FIREBASE STUFF
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // window.alert("signed up");
                // ...
                props.onFormSwitch('game') // if sign up works, moves them to game screen
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert("ERROR: " + errorMessage);
                // ..
        });
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full Name" />

            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password" />

            <button type="submit">Sign Up!</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}