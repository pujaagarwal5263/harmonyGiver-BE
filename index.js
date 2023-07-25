const express = require('express');
const app=express();
require('./db-connection')
const router = require('./routes/router');
app.use(router);

app.listen(8000,()=>{
    console.log("Server running at 8000");
})