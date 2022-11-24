import React from "react";
import "./SignupPage.css";
import Add from "./images/Add.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/firebase";

function SignupPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
  };

  // createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         // ...
  //     })
  //     .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         // ..
  //     });

  return (
    <div className="container__signUp">
      <div className="form__wrap">
        <h2>Easy~chat</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Enter your password" />
          <input type="file" id="fetch__file" placeholder="insert an image" />
          <label htmlFor="fetch__file">
            <img src={Add} alt="" />
            <small>Add an image for avatar</small>
          </label>
          <button type="submit">Continue</button>
          <p>Aready have an account? Login</p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
