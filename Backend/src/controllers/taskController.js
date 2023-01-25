const taskModel = require('./models/taskModel')

const createTask = function(req,res){
    try{
        const [Title,Description,Status]= req.body

        const createdTask = taskModel.create(req.body)
        return res.status(201).send({status:true,message:"Success", data:createdTask})
    }
    catch(err){return res.status(500).send({status:false, message:err.message})}
}

module.exports.createTask = createTask