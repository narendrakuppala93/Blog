import Express from "express";
import mongoose from "mongoose";

const app= Express()
mongoose.connect("mongodb+srv://narendra:123@cluster0.qdutfy8.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5000,()=>{
        console.log("Listening to PORT 5000")
    })
}).catch((err)=>{
    console.log("connection failed",err)
})

