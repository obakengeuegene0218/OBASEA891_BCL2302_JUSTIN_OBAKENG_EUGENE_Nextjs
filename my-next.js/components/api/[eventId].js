import{ MongoClient } from 'mongodb'


async function handler(req, res){
    const eventId = req.query.eventId;

   const client = await  MongoClient.connect('mongodb+srv://obakeng891:Nasdaq0218@cluster0.4a8jilg.mongodb.net/events?retryWrites=true&w=majority&appName=AtlasApp',  

)


    if(req.method === 'post'){
const {email, name, text}= req.body;

if(!email.include('@') || !name ||name.trim ==='' || !text || text.trim ===''){
    res.status(422).json({message:'Invalid INPUT'});
    return;
}
console.log(email,name,text);
const newComment ={ 
    email,
    name,
    text,
    eventId
};
const db = client.db()
const result = await db.collection('comments').insertOne(newComment);
console.log(result)

newComment.id = result.insertedId;
res.status(201).json({message:'Added comment.', comment: newComment});
    }
    if(req.method === 'GET'){
const db = client.db();
const documents = await db.collection('comments')
.find()
.sort({_id: -1})
.toArray(); 

res.status(200).json({ comments: documents});
    }
    client.close();
}
export default handler