const express=require('express');
const mongoose=require('mongoose');
const router=require("./routes/bookRoutes");
const cors=require("cors");
const app=express();

//Middlewares
/*app.use('/',(req,res,next)=>{
    res.send("This is our starting app");
})*/
app.use(express.json());
app.use(cors());
app.use("/books",router)
mongoose.connect("mongodb+srv://admin:TlQgsJs94h50zEHd@book.qpjak.mongodb.net/BOOKSHELF?retryWrites=true&w=majority")
.then(()=>console.log("Connected to Database"))
.then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err));
//TlQgsJs94h50zEHd