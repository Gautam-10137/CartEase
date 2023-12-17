const express= require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser')
const cors=require('cors');
require('dotenv').config();
const port=process.env.PORT;
const password=process.env.PASSWORD;
const apiRoutes=require('./routes/appRoutes')

const app=express();

mongoose.connect(`mongodb+srv://pahwagautam47:${password}@cluster0.x29vzug.mongodb.net/?retryWrites=true&w=majority`);
const db=mongoose.connection;
db.on('error',(err)=>{
    console.log(`MongoDB Connection Error : ${err}`);
})
db.once('open',()=>{
    console.log('Connected to MongoDB');
})
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors({
    origin:'http://localhost:3000',
    method:['GET','POST']
}));

app.use('/api',apiRoutes);


app.listen(port,()=>{
    console.log(`Server is running on Port: ${port}`);
});