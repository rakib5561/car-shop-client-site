import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseAuthentication from '../../Firebase/firebase.init';

firebaseAuthentication();

const Login = () => {

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
    
  
    const googleHandle = () =>{
        signInWithPopup(auth, googleProvider)
            .then(result =>{
                console.log(result.user);
            })
    }

    return (
        <div className="login-wrapper">
            <div className="login-form">
                
            <h1>Please,login</h1>
           <form className="form-style" action="">
            <input type="email" placeholder="your email"/>
            <input type="text"  placeholder="your password"/>
            <Link><p>forget password?</p></Link>
            <input type="submit" value="login"/>
           </form>
                <h6>OR</h6>
            <div>
            <button onClick={googleHandle} className="btn-style">Google</button>
            </div>
            </div>
        </div>
    );
};

export default Login;