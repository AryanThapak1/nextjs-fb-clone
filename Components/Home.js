import classes from "./Home.module.css";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

const Home = (props) => {
  const [invalidEmail, setInvalidEmail] = useState(props.eIsinvalid);
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  useEffect(() => {
    setInvalidEmail(props.eIsinvalid); // Update invalidEmail when props.eIsinvalid changes
  }, [props.eIsinvalid]);

  const createAccountHandler = () => {
    router.push("/create-account");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    props.loginHandler(credentials);
  };

  return (
    <div className={classes.card}>
      <h1 className={classes.heading}>facebook</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        {invalidEmail && (
          <p className={classes.invalid}>Wrong Email Address or password</p>
        )}
        <div>
          <input
            type="text"
            className={classes.input}
            placeholder="Email Address or mobile number"
            ref={emailRef}
            required
          />
        </div>
        <div>
          <input
            type="password"
            className={classes.input}
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </div>
        <button className={classes.button}>Log in</button>
        <a href="/forgot-password" className={classes.forgot}>
          Forgotten Password ?
        </a>
        <button
          className={`${classes.button} ${classes.create}`}
          onClick={createAccountHandler}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Home;
