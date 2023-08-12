import { MongoClient } from "mongodb";


export default async function handler(req,res){
  if(req.method==='POST')
  {
     const data=req.body;
     const client=await MongoClient.connect('mongodb+srv://aryanthapak8:367IVGvvJCun7WDu@cluster0.8s3by7c.mongodb.net/?retryWrites=true&w=majority')
     const db=client.db();
     const credentials=db.collection('credentials');
     const result=await credentials.insertOne(data);
     res.status(201).json({ message: 'Data inserted successfully' })
     
  }
  
}