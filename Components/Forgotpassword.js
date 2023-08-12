import { useEffect, useRef, useState } from "react";
import classes from "./Forgot.module.css"

const Forgotpassword=(props)=>
{
    const[valid,setValid]=useState();
    const email=useRef();
    const pass=useRef();
    const submitHandler=(event)=>{
    event.preventDefault()
    props.emailChecker(email.current.value)
    
    if(!props.valid)
    {
        return
    }

    }
    useEffect(()=>{
        setValid(props.valid)
    },[props.valid])
    const changeHandler=(event)=>{
        event.preventDefault()
        props.passwordHandler(pass.current.value,email.current.value)
    }
    return(<>
    <div className={classes.nav}>
    <h1 className={classes.heading}>facebook</h1>
    </div>
    <div className={classes.card}>
    <h2 className={classes.h2}>Find Your Account</h2>
    <div className={classes.form}>
    
    <label htmlFor="recovery" className={classes.description}>Please enter your mobile number to search for your account.</label> 
    
    <input type="text" id="recovery" className={classes.input} ref={email}/>
    </div>
    <div className={classes["button-container"]}>
    <button className={classes.button}>Cancel</button>
    <button className={`${classes.button} ${classes.search}` } onClick={submitHandler}>Search</button>
     
    </div>
    {valid&& <div>
        <input type="text" id="recovery" className={classes.input} ref={pass}/>
        <button className={`${classes.button} ${classes.search}` } onClick={changeHandler}>Change</button>
     </div>
     }
    </div>
    </>
    )

}

export default Forgotpassword;