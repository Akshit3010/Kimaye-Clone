import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

export const Login = ({setState}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpdata, setsignUpdata] = useState({});
  const [togle, setTogle] = useState(false);

  const handleLogin = () => {
    console.log({ email, password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignUpdata({ ...signUpdata, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(signUpdata);
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.heading}>
        <h3>SIGN IN</h3>
        <p onClick={()=>setState(false)}>
          close <i className="fa-solid fa-xmark"></i>
        </p>
      </div>
      {!togle && (
        <div className={styles.inputDiv}>
          <div>
            <label htmlFor="email">Email Adderes*</label>
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password*</label>
            <br />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className={styles.forgotPassword}>
            <i className="fa-solid fa-spider-web"></i>forgot password?
          </p>
          <div className={styles.loginBtn} onClick={handleLogin}>
            LOGIN
          </div>
        </div>
      )}

      <div
        onClick={() => window.open("https://www.facebook.com", "_blank")}
        className={styles.commonbtn}
        style={{ backgroundColor: "rgb(98, 98, 209)" }}
      >
        SIGN IN WITH FACEBOOK
        <i className="fa-brands fa-facebook-square"></i>
      </div>
      <div
        onClick={() => window.open("https://accounts.google.com/", "_blank")}
        className={styles.commonbtn}
        style={{ backgroundColor: "hwb(0 28% 0%)" }}
      >
        SIGN IN WITH GOOGLE
        <i className="fa-brands fa-google"></i>
      </div>
      {togle && (
        <div className={styles.inputDiv}>
          <form action="">
            <div>
              <label htmlFor="First Name">First Name*</label>
              <br />
              <input name="firstName" type="text" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="last name">Last Name*</label>
              <br />
              <input name="lastName" type="text" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">Email id*</label>
              <br />
              <input name="email" type="email" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">Password*</label>
              <br />
              <input name="password" type="password" onChange={handleChange} />
            </div>
            <div className={styles.loginBtn} onClick={handleSignup}>
              SIGNUP
            </div>
          </form>
        </div>
      )}

      <div className={styles.createAdiv}>
        <i className="fa-solid fa-user-large"></i>
        <h4>No account yet?</h4>
        <p>
          Welcome to Kimaye! Help us with a few details to know you better as
          you take the journey of enjoying our safe and tasty fruits.
        </p>
        {!togle ? (
          <button onClick={() => setTogle(!togle)}>Create An Account</button>
        ) : (
          <button onClick={() => setTogle(!togle)}>LOGIN</button>
        )}
      </div>
    </div>
  );
};
