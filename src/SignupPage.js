import React, { useState } from "react";
import "./SignupPage.css";
import Add from "./images/Add.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../src/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

function SignupPage() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update the profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore db
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

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
          <button disabled={loading} type="submit">
            Continue
          </button>
          <p>
            Aready have an account? <Link to="/login">Login</Link>
          </p>
          {loading && "Uploading image please wait... -_-"}
          {err && <span>Something went wrong</span>}
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
