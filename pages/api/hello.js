import { MongoClient } from "mongodb";


export default async function handler(req,res){
  if(req.method==='POST')
  {
     const data=req.body;
     const client=await MongoClient.connect("put your mongo client here")
     const db=client.db();
     const credentials=db.collection('credentials');
     const result=await credentials.insertOne(data);
     res.status(201).json({ message: 'Data inserted successfully' })
     
  }
  
}
