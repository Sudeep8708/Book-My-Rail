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
    con.query("select count(*) as c from passenger where username = '"+ String(req.body.username) +"'", function (err, result, fields) {
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

app.post('/signup', (req, res) => {
    console.log(req.body)
    const q = "insert into passenger values('"+ String(req.body.username) +"', "+ req.body.proof +", '"+ String(req.body.name) + "', " + req.body.age + ", '"+ String(req.body.gender) +"', '"+ String(req.body.address) +"', "+ req.body.contact +", '"+ String(req.body.password) +"', '"+ String(req.body.email) + "')"
    con.query(q, function (err, result, fields) {
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

app.listen(5000, () => {
    console.log("connected")
});
