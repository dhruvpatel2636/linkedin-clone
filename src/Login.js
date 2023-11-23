import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            dispatch(
              login({
                email: user.email,
                uid: user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          })
          .catch((updateProfileError) =>
            console.error("Error updating profile:", updateProfileError)
          );
      })
      .catch((error) => console.error("Error creating user:", error));
  };
  const loginToApp = (e) => {
    e.preventDefault();
    // Add your login logic here
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        })
      );
    }).catch((err)=>alert(err));
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
        alt="link"
      />
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name if registering"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional) "
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member ?{" "}
        <span className="login_register" onClick={register}>
          Register now{" "}
        </span>
      </p>
    </div>
  );
}
export default Login;
