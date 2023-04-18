import React, { useReducer } from "react";
import styles from "./Auth.module.css";

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

const Auth = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_REQUEST" });

    // Simulate API request
    setTimeout(() => {
      if (state.email === "test@test.com" && state.password === "password") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { errorMessage: "Invalid email or password" },
        });
      }
    }, 2000);
  };

  return (
    <div className={styles["login-container"]}>
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <h1 className={styles["login-title"]}>Login</h1>
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
      </form>
    </div>
  );
};

export default Auth;
