import express, { Router } from 'express'
import todoModel from './todoModel.js';
const route = express();

route.get('/',(req,res)=>{
    try {
        res.status(200).send("this is a todo api")
    } catch (error) {
        res.json(500).json(error)
    }
})

route.post('/todolist',async (req,res)=>{
    const newtodo = new todoModel({
        todo : req.body.todo,
        place : req.body.place,
        time : req.body.time
    })

    try {
        const savedTodo = await newtodo.save();
        res.status(200).json(savedTodo)
    } catch (error) {
        res.status(500).json("this is todo is cannot be added")
    }
})


route.get('/gettodo' , async(req,res)=>{
    try {
        const getTodo = await todoModel.find();
        res.status(200).json(getTodo)
    } catch (error) {
        res.status(200).json(error)
    }
})

route.delete('/deletetodo/:id' ,async (req,res)=>{
    try {
        await todoModel.findByIdAndDelete(req.params.id);
        res.status(200).json('todo has been deleted')
    } catch (error) {
        res.status(500).json(error)
    }
})

route.put('/edittodo/:id' ,async(req,res)=>{
    try {
        const updatedData = req.body;
        const updatedTodo = await todoModel.findByIdAndUpdate(req.params.id ,updatedData, {new : true})
        res.status(200).json(updatedTodo)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default route;