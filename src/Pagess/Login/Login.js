import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Login.css';

const Login = () => {

    const { loginWithGoogle, LogInUser,handleEmail,handlePassword } = useAuth()
    return (

        <div className="login-wrapper">
            <div className="login-form">
            <h1>Please,login</h1>
           <form className="form-style" onSubmit={LogInUser}>
            <input onBlur={handleEmail} type="email" placeholder="your email"/>
            <input onBlur={handlePassword} type="password"  placeholder="your password"/>
            <p className="forget-pass"><Link>forget password?</Link></p>
            <input type="submit" value="login"/>
            <p className="go-register">Not registered? <Link to='/register'>Create an account</Link></p>
           </form>

                <h6>OR</h6>
            <div>
            <button onClick={loginWithGoogle} className="btn-style">Google</button>
            </div>
            </div>
        </div>
    );
};

export default Login;