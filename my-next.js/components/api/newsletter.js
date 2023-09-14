import {MongoClient}  from 'mongodb'

async function handler(req, res){
    if(req.method ==='POST'){

   const userEmail  = req.body.email;
   if(!userEmail || !userEmail.includes('@')){
res.status(422).json({message:'Invalid email address.'});
    return;


}

const client = await MongoClient.connect('mongodb+srv://obakeng891:Nasdaq0218@cluster0.4a8jilg.mongodb.net/newsletter?retryWrites=true&w=majority&appName=AtlasApp',  

)
const db = client.db();
await db.collection('newsletter').insertOne({email: userEmail});


res.status(201).json({message: 'Signed up'});

client.close();
    }
}
export default handler;