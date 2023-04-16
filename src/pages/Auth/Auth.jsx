import React, { useState } from 'react';
import styles from './Auth.module.css';
import Err from './SubComponents/Error';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [loginError, setLoginError] = useState(false);

  const [invalidPasswordFormat, setinvalidPasswordFormat] = useState(false);
  const [invalidUsernameFormat, setinvalidUsernameFormat] = useState(false);
  const [usernameExists,  setusernameExists] = useState(false);
  const [invalidEmailFormat, setinvalidEmailFormat] = useState(false);
  const [emailExists, setemailExists] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

 function checkUsername(){
  
 }

 function checkEmail(){

 }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    // Send email and password to backend for authentication
    console.log('Email:', email);
    console.log('Password:', password);
    //succesful login
    if(true){
      setLoginError(true);
    }
    else{

    }
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Send email, password, and username to backend for user registration
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Username:', username);
    // You can make an HTTP request to your backend here to handle user registration
  }

  const toggleForm = () => {
    setIsLogin(!isLogin);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.authContainer}>
        {isLogin ? <>
          <h1>Login</h1>
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange}/>
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange}/>
            <br />
            {loginError && <Err errMsg="Incorrect email or password" />}
            <button type="submit">Login</button>
            <br />
          </form>
          <p>Dont have an account?&nbsp;
            <button type="button" onClick={toggleForm}>Signup</button>
          </p>
        </> : <>
          <h1>Signup</h1>
          <form onSubmit={handleSignupSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} onBlur={checkUsername}/>
            <br />
            {invalidUsernameFormat && <Err errMsg="Invalid username" />}
            {usernameExists && <Err errMsg="Username already exists" />}
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} onBlur={checkEmail
            }/>
            <br />
            {invalidEmailFormat && <Err errMsg="Invalid email format" />}
            {emailExists && <Err errMsg="Email already exists" />}
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            <br />
            {invalidPasswordFormat && <Err errMsg="Invalid password format" />}
            <button type="submit">Sign up</button>
          </form>
          <p>Have an account?&nbsp;
            <button type="button" onClick={toggleForm}>Log in</button>
          </p>
        </>}
      </div>
    </div>
  );
}

export default Auth;