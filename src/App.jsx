import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const [showLogin, setShowLogin] = useState(true);

const handleToggle = () => {
  setShowLogin(!showLogin); 
};

  return (
    <div className=" custom-bg">
      <div>
         <h1 className="title">KIDsConnect</h1>
      </div>

     <div>
        {showLogin ? <Login /> : <Register />}
      <button onClick={handleToggle}>
        {showLogin ? "Switch to Register" : "Switch to Login"}
      </button>
    </div>
   </div>
 
  )
}

export default App
