const express = require('express');
const dotenv = require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('hello wrold');
})



app.listen(port, (err) => {
    if(err) throw err
    else console.log(`server started and runing on port: ${port}`);
})