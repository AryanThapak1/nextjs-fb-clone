import Profile from "@/Components/Profile";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProfileView=()=>
{
    const router=useRouter()
    useEffect(()=>{
        if(localStorage.getItem('access')!=='true')
        {
            router.push('/')
        }

    },[])

    const LogOutHandler=()=>
    {
        localStorage.removeItem("access");
        router.push('/')
    }
    
    return <>
    <Profile logoutHandler={LogOutHandler}/> 
    </>

}


export default ProfileView;