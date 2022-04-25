const express=require('express');
// const { cwd } = require('process');
const PORT=process.env.PORT||3001;
const app=express();
const db=require('./config/connection');




app.use(express.urlencoded({extended:true}));
app.use(express.json());
db.once('open',()=>{
    app.listen(PORT,()=>{
        console.log(`🌎🌎🌎🌎🌎🌎🌎🌎🌎🌎Hey Namees!!API server for ${process.cwd()} running on port ${PORT}!`);

    }

    )
})