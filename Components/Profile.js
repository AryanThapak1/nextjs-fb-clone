import classes from "./profile.module.css"

const Profile=(props)=>
{
    return(<><div className={classes.nav}>
    <h1 className={classes.heading}>facebook</h1>
    </div>
        <div className={classes.container}>
            <h1 className={classes.header}>Login Successful</h1>
            <p className={classes.message}>Welcome to your profile!</p>
            <button className={classes.button}onClick={props.logoutHandler}>Log Out</button>
        </div>
        </>
        
    )

}

export default Profile