import Forgotpassword from "@/Components/Forgotpassword";
import { headers } from "@/next.config";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useState } from "react";

const forgot = () => {
  const router=useRouter()
    const [valid,setValid]=useState()
    const forgotHandler=async (email)=>{
     const res=await fetch(("/api/forgot"),{
        method:"POST",
        body:JSON.stringify(email),
        headers:{
            "Content-Type":"application/json"
        }
     })
     
     
     if(res.ok)
     {
        const result=await res.json()
        setValid(true)
     }

     else
     {
      setValid(false)
     }
    }
    const passwordChangeHandler=async(password,email)=>
    {
   
        const res=await fetch(('/api/forgot'),{
            method:"PUT",
            body:JSON.stringify({password,email}),
            headers:{
                "Content-Type":"application/json"
            }
        })

        if(res.ok)
        {
          router.push('/')
        }

    }
  return (
    <>
      <Forgotpassword emailChecker={forgotHandler} passwordHandler={passwordChangeHandler} valid={valid}/>
    </>
  );
};

export default forgot;
