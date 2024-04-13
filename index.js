const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const userRoute = require("./routes/user");

app = express();
PORT = 8001;

mongoose.connect("mongodb://localhost:27017/blogApp")
.then((e)=> console.log("MongoDB Connected"));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/",(req,res)=>{
    res.render("home");
})

app.use("/user",userRoute);

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT} sucessfully`);
})