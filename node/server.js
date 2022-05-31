const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express(); 
const con = require('./db_connect');


app.use(cors());

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// use rail;
// select * from t_schedule A inner join t_schedule B on A.train_no = B.train_no and A.platform_no < B.platform_no where A.station_name = "Delhi - DLI" and B.station_name = "Chennai Central - MAS"; 
app.post('/authenticate', (req, res) => {
    con.query("select * from t_schedule", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
        console.log(result);
      });
    console.log(req.body)
})

app.post('/usercheck', (req, res) => {
    con.query("select count(*) from ")
})
app.listen(5000, () => {
    console.log("connected")
});