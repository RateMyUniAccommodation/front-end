import React, { useState } from 'react';
import styles from './Auth.module.css';
import Err from './SubComponents/Error';
import { checkEmailExists, checkUsernameExists } from '../../api/api';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [loginError, setLoginError] = useState(false);

  const [invalidPasswordFormat, setinvalidPasswordFormat] = useState(false);
  const [invalidUsernameFormat, setinvalidUsernameFormat] = useState(false);
  const [usernameExists, setusernameExists] = useState(false);
  const [invalidEmailFormat, setinvalidEmailFormat] = useState(false);
  const [emailExists, setemailExists] = useState(false);
  const [signupError, setsignupError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  function checkUsername() {
    if (username.length <= 4) {
      setinvalidUsernameFormat(true);
      return false;
    }
    if (checkUsernameExists(username)) {
      setusernameExists(true);
      return false;
    }
    return true;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function checkEmail() {
    if (emailPattern.test(email) === false) {
      setinvalidEmailFormat(true);
      return false;
    }
    if (checkEmailExists(email)) {
      setemailExists(true);
      return false;
    }
    return true;
  }

  function checkPassword() {
    if (password.length <= 6) {
      setinvalidPasswordFormat(true);
      return false;
    }
    return true;
  }

  const handleSignupSubmit = (e) => {
    resetErrors();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Username:', username);
    e.preventDefault();
    if(checkEmail() || checkUsername() || checkPassword()) {
      console.log('Invalid signup');
    }
  }

  function resetErrors() {
    setLoginError(false);
    setinvalidPasswordFormat(false);
    setinvalidUsernameFormat(false);
    setusernameExists(false);
    setinvalidEmailFormat(false);
    setemailExists(false);
    setsignupError(false);
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    resetErrors()
    // Send email and password to backend for authentication
    console.log('Email:', email);
    console.log('Password:', password);
    //succesful login
    if (true) {
      setLoginError(true);
    }
    else {

    }
  }

  const toggleForm = () => {
    setIsLogin(!isLogin);
    resetErrors();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.authContainer}>
        {isLogin ? <>
          <h1>Login</h1>
          <form onSubmit={handleLoginSubmit}>

          
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
            <br />

            
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
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
            <input type="text" id="username" value={username} onChange={handleUsernameChange} onBlur={checkUsername} />
            <br />
            {invalidUsernameFormat && <Err errMsg="Invalid username, must be four or more characters" />}
            {usernameExists && <Err errMsg="Username already exists" />}


            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} onBlur={checkEmail} />
            <br />
            {invalidEmailFormat && <Err errMsg="Invalid email format" />}
            {emailExists && <Err errMsg="Email already exists" />}


            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} onBlur={checkPassword}/>
            <br />
            {invalidPasswordFormat && <Err errMsg="Invalid password, must be 6 or more characters" />}

            {signupError && <Err errMsg="An error occurred during signup, try again" />}
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