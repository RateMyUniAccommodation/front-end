import React, { useReducer } from "react";
import styles from "./Form.module.css";
import { login } from "../../../api/api"

const initialState = {
  email: "",
  password: "",
  isSubmitting: false,
  errorMessage: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload.email,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload.password,
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        isSubmitting: true,
        errorMessage: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isSubmitting: false,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isSubmitting: false,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEmailChange = (event) => {
    dispatch({
      type: "SET_EMAIL",
      payload: { email: event.target.value },
    });
  };

  const handlePasswordChange = (event) => {
    dispatch({
      type: "SET_PASSWORD",
      payload: { password: event.target.value },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_REQUEST" });
    
    try {
      // Call the login API function
      const response = await login(state.email, state.password);
      if (response.status === 200) {
        dispatch({ type: "LOGIN_SUCCESS" });
        console.log("Login successful" + response.data)
        // Redirect to the dashboard or some other page
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { errorMessage: "Invalid email or password" },
        });
      }
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: { errorMessage: "Something went wrong. Please try again." },
      });
    }
  };

  return (
    <div className={styles["login-container"]}>
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <h1>Welcome back</h1>
        <p>Welcome back! Please enter you details</p>
        {state.errorMessage && (
          <div className={styles["login-error"]}>{state.errorMessage}</div>
        )}
        <div className={styles["login-input-container"]}>
          <label htmlFor="email" className={styles["login-label"]}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={styles["login-input"]}
            value={state.email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className={styles["login-input-container"]}>
          <label htmlFor="password" className={styles["login-label"]}>
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className={styles["login-input"]}
            value={state.password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          type="submit"
          className={`${styles["login-submit"]} ${
            state.isSubmitting ? styles["login-submitting"] : ""
          }`}
          disabled={state.isSubmitting}
        >
          {state.isSubmitting ? "Logging in..." : "Login"}
        </button>
        <div className={styles["signup-link-container"]}>
          <p>Don't have an account?</p>
          <a href="#" className={styles["signup-link"]}>
            Sign up!
          </a>
        </div>
      </form>
    </div>
  );
};

export default Form;
