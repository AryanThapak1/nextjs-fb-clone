import React,{useRef} from "react";
import classes from "./SignUp.module.css";

const SignUp = (props) => {
  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from(
    { length: 50 },
    (_, index) => new Date().getFullYear() - index
  );
  
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler= (event)=>
  {
    event.preventDefault()
    const data={
      firstName:firstNameRef.current.value,
      lastName:lastNameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value
    }
    props.onAddHandler(data)
  }

  return (
    <div className={classes.container}>
      <div>
        <h1>Sign Up</h1>
        <p>It is quite easy</p>
      </div>

      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.details}>
          <div className={classes.username}>
            <input
              type="text"
              className={classes.name}
              placeholder="First Name"
              name="FirstName"
              ref={firstNameRef}
              required
            />
            <input
              type="text"
              className={classes.name}
              placeholder="Last Name"
              ref={lastNameRef}
              required
            />
          </div>
          <input
            type="text"
            className={classes["more-data"]}
            placeholder="Mobile Number or Email Address"
            ref={emailRef}
            required
          />
          <input
            type="password"
            className={classes["more-data"]}
            placeholder="New Password"
            ref={passwordRef}
            required
          />
        </div>
        <div className={classes.other}>
          <p>Date of Birth</p>
          <div className={classes.dateSelect}>
            <select title="day" className={classes.otherdata} required>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <select title="month" className={classes.otherdata} required>
              {months.map((month, index) => (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
            <select title="year" className={classes.otherdata} required>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p>Gender :</p>
        <div className={classes.other}>
          <label className={classes.gender}>
            <input type="radio" name="gender" value="male" required/>
            Male
          </label>
          <label className={classes.gender}>
            <input type="radio" name="gender" value="female" required/>
            Female
          </label>
          <label className={classes.gender}>
            <input type="radio" name="gender" value="other" required/> Other
          </label>
        </div>
        <button className={`${classes.button} ${classes.create}`}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;