const express=require('express');
const app=express();
const PORT=8080;
const routes=require('./routes/routes');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(routes);
app.use("*",(req,res)=>{return res.redirect('/user')})
app.listen(PORT,()=>console.log(`Started on PORT :${PORT}`));