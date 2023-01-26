const taskModel = require('./models/taskModel')

const createTask = async function(req,res){
    try{
        const [Title,Description,Status]= req.body

        const createdTask = await taskModel.create(req.body)
        return res.status(201).send({status:true,message:"Success", data:createdTask})
    }
    catch(err){return res.status(500).send({status:false, message:err.message})}
}


const updateTask = async function(req,res){
    try{
        const [Title,Description,Status]= req.body

        const updatedTask = await taskModel.findOneAndUpdate(req.body)
        return res.status(200).send({status:true,message:"Success", data:updatedTask})
    }
    catch(err){return res.status(500).send({status:false, message:err.message})}
}


const getTaskList = async function(req,res){
    try{
        const taskList = await taskModel.find()
         return res.status(200).send({status:true, message:"success", data:getTaskList})
    }
    catch(err){ return res.status(500).send({status:false, message:err.message}) }
}


module.exports = [createTask, updateTask, getTaskList]