import initializeFirebase from "../../firebase/firbase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
} from "firebase/auth";
import { useState } from "react/cjs/react.development";

initializeFirebase();
const Login = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const auth = getAuth();
  const signInWithEmailPass = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  const handleInputField = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordField = (e) => {
    setPassword(e.target.value);
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
      const { email, displayName, photoURL } = result.user;
      const userInfo = {
        names: displayName,
        email: email,
        photo: photoURL,
      };
      setUser(userInfo);
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
    const signInWithFacebook = () => {
      const auth = getAuth();
      signInWithPopup(auth, facebookProvider).then((result) => {
        const user = result.user;
        console.log(user);
        const { email, displayName, photoURL } = result.user;
        const userInfo = {
          names: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(userInfo);
      });
    };
  return (
    <div className="container">
      <div>
        <img src={user?.photo} alt="" />
        <h2>{user?.names}</h2>
        <h2>{user?.email}</h2>
      </div>
      <h2 className="text-white">Please Login</h2>
      <form onSubmit={signInWithEmailPass} className="my-4">
        <div className="row mb-3 ">
          <label
            htmlFor="inputEmail35"
            className="col-sm-2 col-form-label text-white"
          >
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleInputField}
              type="email"
              className="form-control"
              id="inputEmail35"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="inputPassword35"
            className="col-sm-2 col-form-label text-white"
          >
            Password
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handlePasswordField}
              type="password"
              className="form-control"
              id="inputPassword35"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Sign in
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

export default Login;
