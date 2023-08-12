import { MongoClient } from "mongodb";
export default async function loginHandler(req,res)
{
    if(req.method==='POST')
    {
        const data= req.body;
        const email=data.email;
        const password=data.password
        const client=await MongoClient.connect('mongodb+srv://aryanthapak8:367IVGvvJCun7WDu@cluster0.8s3by7c.mongodb.net/?retryWrites=true&w=majority')
        const db=client.db()
        const credentials=db.collection('credentials');
        const result=await credentials.findOne({email:email});
        if(!result)
        {
            return res.status(422).json({message:"Email not valid"})
        }

        const correctPassword=result.password;

        if(correctPassword===password)
        {
            return res.status(200).json({username:`${result.firstName}.${result.lastName}`})
        }
        else {
            return res.status(401).json({ message: "Incorrect password" });
        }

    }
    
}