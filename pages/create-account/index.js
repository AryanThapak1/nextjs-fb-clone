import SignUp from "@/Components/SignUp";
import { useRouter } from "next/router";

function index()
{
    const router=useRouter();
   const onAddaccount=async(data)=>
   {
      const response=await fetch(('/api/hello'),
      {
         method:'POST',
         body:JSON.stringify(data),
         headers:{
            'Content-Type':'application/json'
         }
      });
      if (response.status === 201) {
        console.log("Data inserted successfully");
        router.push("/");
     }

   }

   return <SignUp onAddHandler={onAddaccount}/>
}

export default index;