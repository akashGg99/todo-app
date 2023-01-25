const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.use(express.json())


mongoose.connect("mongodb+srv://akashgMDB:1q2w3e4r5T@cluster0.hwdbknn.mongodb.net/ToDo_App",
{useNewUrlParser:true})
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.log(err))




app.listen(3001, ()=>console.log("Running on port 3001"))