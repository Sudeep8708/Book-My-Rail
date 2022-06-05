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
app.post('/login', (req, res) => {
    con.query("select password from passenger where username = '" + String(req.body.username) + "'", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
      });
})

app.post('/signup/usercheck', (req, res) => {
    con.query("select count(*) as c from passenger where username = '"+ String(req.body.username) +"'", function (err, result, fields) {
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

app.post('/signup/submit', (req, res) => {
    const q = "insert into passenger values('"+ String(req.body.username) +"', "+ req.body.aadhaar +", '"+ String(req.body.name) + "', " + req.body.age + ", '"+ String(req.body.gender) +"', '"+ String(req.body.address) +"', "+ req.body.mobile +", '"+ String(req.body.password) +"', '"+ String(req.body.email) + "')"
    con.query(q, function (err, result, fields) {
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

app.post('/planYourJourney/trainSchedule', (req, res) => {
    const q = "select * from ((t_schedule A inner join t_schedule B on A.train_no = B.train_no and A.arrival < B.arrival) inner join train_details C on C.train_no = A.train_no) where A.station_name = '"+ String(req.body.from) +"' and B.station_name = '"+ String(req.body.to) +"'"; 
    con.query(q, function (err, result, fields) {
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})  

app.post('/planYourJourney/stationName', (req, res) => {
    const q = 'select distinct(station_name) from t_schedule'
    con.query(q, function(err, result) {
        if(err) throw err;
        res.send(result);
    })
})
app.listen(5000, () => {
    console.log("connected")
});
