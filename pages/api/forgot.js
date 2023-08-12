import { MongoClient, ObjectId } from "mongodb";

export default async function forgotHandler(req,res)
{
    if(req.method==="POST"){
        
  const email=req.body;
  
  const client=await MongoClient.connect("put your mongo client here");
  const db=client.db();
  const credentials=db.collection('credentials')
  const result=await credentials.findOne({email:email});
  if(!result)
  {
    return res.status(422).json({message:"email not valid"})
  }

  else
  {
    return res.status(200).json({message:"verified"})
  }
    }
  
  if(req.method==="PUT")
  {
    const password=req.body.password;
    const email=req.body.email
    const client=await MongoClient.connect("mongodb+srv://aryanthapak8:367IVGvvJCun7WDu@cluster0.8s3by7c.mongodb.net/?retryWrites=true&w=majority");
    const db=client.db();
    const credentials=db.collection('credentials')
    const result = await credentials.updateOne(
      { email:email },
      { $set: { password: password } }
    );
    if(result.acknowledged)
    { 
      res.status(200)
    }
    else
    res.status(500)
    
  }
   


}
