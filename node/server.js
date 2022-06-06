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

app.post('/booking/fareCalculation', (req, res) => {
    const q = 'select B.'+ String(req.body.select) + '_fare - A.'+ String(req.body.select)+ '_fare as fare from fare A inner join fare B on A.train_no = B.train_no where A.train_no = "'+ String(req.body.train_no) +'" and A.station_id = "'+ String(req.body.from) +'" and B.station_id = "'+ String(req.body.to) +'"';
    con.query(q, function(err, result) {
        if(err) throw err;
        res.send(result);
    })
})

app.post('/dashboard/acc_detail', (req, res) => {
    const q = "select * from passenger where username='"+ String(req.body.username) + "'";
    con.query(q, function(err, result) {
        if(err) throw err;
        res.send(result);
    })
})

app.post('/dashboard/travel-history', (req, res) => {
    const q = "select count(*) as count, sum(fare) as price,ticket_no, from_station, to_station from tickets where username='" + String(req.body.username) + "' group by ticket_no";
    console.log(req.body.username)
    con.query(q, function(err, result) {
        if(err) throw err;
        res.send(result);
        console.log(result);
    })
})

app.post('/booking/submission', (req, res) => {
    console.log(req.body)
    const passenger = req.body.passenger;
    console.log(passenger);
    let total = req.body[String(req.body.select)+"_total"];
    let booked = req.body[String(req.body.select)+"_booked"];
    if(total > booked) {
        req.body.passenger.map((item) => {
            let seat_no = String(req.body.select) + "_" + String(booked+1);
            let ticket_no = String(req.body.train_no) + "_" + String(req.body.date_picker) + "_" + String(seat_no);
            const q1 = "insert into tickets values('" + ticket_no + "', '" + String(req.body.username) + "', '" + String(item.name) + "', " + item.age + ", '" + String(item.gender)[0] + "', STR_TO_DATE('" + String(req.body.date_picker) + "', '%d/%m/%Y'), '" + String(req.body.train_no) + "', '" + String(req.body.select) + "', '" + String(seat_no) + "', '" + String(req.body.from_station) + "', '" + String(req.body.to_station)+ "', " + String(req.body.fare) + ")";
            con.query(q1, function(err) {
                if (err) throw err;
            })
            const q2 = "update train_details set " + String(req.body.select) + "_booked = " + String(req.body.select) + "_booked + 1 where train_no = '" + String(req.body.train_no) + "'";
            con.query(q2, function(err) {
                if (err) throw err;
            })
            booked += 1;
        })
        res.send({"flag": 1});
    }else {
        res.send({"flag": 0});
    }

    
})
app.listen(5000, () => {
    console.log("connected")
});
