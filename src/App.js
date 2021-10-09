import { useState } from "react/cjs/react.development";
import "./App.css";
import Login from "./component/Login/Login";
import Regester from "./component/Regester/Regester";

function App() {

  const [toggle, setToggle] = useState(false);
  return (
    <div className="App ">
      {toggle ? <Login></Login> : <Regester></Regester>}
      <div className="my-3">
        { toggle ?<button
          className="btn btn-warning mx-2 "
          onClick={() => setToggle(false)}
        >
          Please Regester
        </button>
          :
         <button
          className="btn btn-warning mx-2 "
          onClick={() => setToggle(true)}
        >
          Already Have an acccount?
        </button> }
        
      </div>
    </div>
  );
}

export default App;
