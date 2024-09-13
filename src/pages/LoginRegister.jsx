import { useState } from 'react';
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';
import '../App.css';

export default function LoginRegister() {

    const [showLogin, setShowLogin] = useState(true);

    const handleToggle = () => {
    setShowLogin(!showLogin); 
    };
  return (
    <div className='login-container'>
        <div className="custom-bg">
      <div>
         <h1 className="title">KIDsConnect</h1>
      </div>

     <div className=''>
        {showLogin ? <Login /> : <Register />}
      <button className="btn btn-outline-primary w-40 mt-2" onClick={handleToggle}>
        {showLogin ? "Don't have an account? Register here" : "Switch to Login"}
      </button>
    </div>
   
    </div>
  </div>
  );
}
