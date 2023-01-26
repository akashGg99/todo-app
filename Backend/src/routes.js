const express = require('express')
const { createTask,updateTask, getTaskList } = require('./controllers/taskController')
const router = express.Router()



router.post('/createtask',createTask);
router.put('/updatetask',updateTask);
router.get('/tasks', getTaskList);

router.all('/*',()=>"server says Wrong path... ")

