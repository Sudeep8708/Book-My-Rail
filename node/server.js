const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express(); 

app.use(cors());

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.post('/authenticate', (req, res) => {
    console.log(req.body)
})
app.listen(5000, () => {
    console.log("connected")
});