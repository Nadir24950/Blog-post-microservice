import React from "react";

const Login = () => {
  return (
    <div className="login-wrapper">
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
