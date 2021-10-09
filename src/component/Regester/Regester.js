import React from "react";
import initializeFirebase from "../../firebase/firbase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,

} from "firebase/auth";
import { useState } from "react/cjs/react.development";

initializeFirebase();

const Regester = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const auth = getAuth();

  const regesterNewUser = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleInputField = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordField = (e) => {
    setPassword(e.target.value);
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const signInWithFacebook = ()=>{
    const auth = getAuth();
    signInWithPopup(auth,facebookProvider).then((result) => {
      
      const user = result.user;
      console.log(user);
    });
  }

  return (
    <div className="container">
      <h2 className="text-white">Please Regester</h2>
      <form onSubmit={regesterNewUser} className="my-4 ">
        <div className="row mb-3 ">
          <label
            htmlFor="inputEmail34"
            className="col-sm-2 col-form-label text-white"
          >
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleInputField}
              type="email"
              className="form-control"
              id="inputEmail3"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="inputPassword3"
            className="col-sm-2 col-form-label text-white"
          >
            Password
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handlePasswordField}
              type="password"
              className="form-control"
              id="inputPassword34"
              required
            />
          </div>
        </div>
        <div>
          <h4 className="text-warning">{error}</h4>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      <button
        onClick={signInWithGoogle}
        className="btn btn-outline-warning mx-2"
      >
        Google Sign In
      </button>
      <button
        onClick={signInWithGithub}
        className="btn btn-outline-warning mx-2"
      >
        GitHub Sign In
      </button>
      <button
        onClick={signInWithFacebook}
        className="btn btn-outline-warning mx-2"
      >
        Facebook Sign In
      </button>
    </div>
  );
};

export default Regester;
