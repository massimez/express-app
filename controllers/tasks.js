const Task = require('../models/tasks')

const getAllTasks = async (req, res) => {
    //console.log(`Request GET TASKS IP=${req.headers['x-forwarded-for'] || req.socket.remoteAddress}`)
    try {
        const tasks = await Task.find({})
        res.status(200).send({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).send({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const getTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        res.status(200).json({task})
    } catch (error) {
        //return res.status(404).json({msg:`No task with id : ${taskID}`})
        res.status(500).json({msg:error})
    }
}
const updateTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            new: true,
            runValidators: true,
        })
        res.status(200).json({task})
    } catch (error) {
        //return res.status(404).json({msg:`No task with id : ${taskID}`})
        res.status(500).json({msg:error})
    }
}
const deleteTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        res.status(200).json({task})
    } catch (error) {
        //return res.status(404).json({msg:`No task with id : ${taskID}`})
        res.status(500).json({msg:error})
    }
}
module.exports = {getAllTasks,createTask,getTask,updateTask,deleteTask}