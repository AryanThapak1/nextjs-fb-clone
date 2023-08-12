import Home from "@/Components/Home";
import { useRouter} from "next/router";
import { useState } from "react";

function HomePage()
{    const[eIsinvalid,setEisInvalid]=useState()
    const router=useRouter();
    const loginHandler=async (credentials)=>
    {
    
        const response=await fetch(("/api/login"),
        {
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(credentials)
        }
        )

        if(response.ok)
        { 
             const username=await response.json()
            setEisInvalid(false)
            router.push(`/profile/${username.username}`);
            localStorage.setItem("access","true")
        }
        else
        {
         setEisInvalid(true); 
        }
        
      
    }
    return<>
    <Home loginHandler={loginHandler} eIsinvalid={eIsinvalid}/>
    </>
}



export default HomePage;
