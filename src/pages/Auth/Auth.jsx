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
    <div></div>
  );
}

export default Auth;