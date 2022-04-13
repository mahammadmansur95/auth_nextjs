import {MongoClient} from 'mongodb';


export async function connectToDatabase(){
    const client = await MongoClient.connect('mongodb+srv://mansur:Azgiri95@cluster0.5tqav.mongodb.net/auth-demo?retryWrites=true&w=majority');

    return client;
}