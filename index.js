import express from 'express'
import dotenv from 'dotenv'
import mongoose, { mongo } from 'mongoose';
import todolist from './routes.js'
import cors from 'cors'

const app  =  express();
const PORT = process.env.PORT || 3001;
app.use(express.json())
app.use(cors())
dotenv.config();

app.use('/todos' , todolist)

const connect = async()=>{
    try {
        mongoose.connect(process.env.MONGO);
        console.log('connected to the mongodb');        
    } catch (error) {
        throw error
    }
}

mongoose.connection.on('disconnected' , () => {
    console.log('mongodb disconnected');
})

mongoose.connection.on('connected',()=>{
    console.log('mongodb connected');
})

app.listen((PORT), ()=>{
    connect();
    console.log('listening');
})

