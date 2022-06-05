import InputWithIcon from "./input";
import ResponsiveDatePickers from "./date_picker";
import SelectTextFields from "./select";
import ContainedButtons from "./button";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactSession } from "react-client-session";
//import { useNavigate } from "react-router-dom";
import Booking from "../booking/booking";
import StationSelect from "./station-select";
ReactSession.setStoreType("sessionStorage");

const Plan_your_journey = () => {
    const username = ReactSession.get("username");
    const location = useLocation();
    const navigate = useNavigate();

    // if(location.state != null){
    //    const username = location.state.username;
    // //    console.log(username);
    // }
    const [obj, setObj] = useState(() => {
        return {
            from: "",
            to: "",
            date_picker: "",
            select: "",
        };
    });
    const onChangeObj = (e) => {
        setObj({ ...obj, [e.target.name]: e.target.value });
    };

    const onChangeDate = (o) => {
        setObj({ ...obj, [o.name]: o.value });
    };
    const [tclass, setClass] = useState({});
    const handleSubmit = (e) => {
        console.log(obj);
        fetch("http://localhost:5000/planYourJourney/trainSchedule", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(obj),
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myjson) {
                
            const trainClass = myjson.map((i) => {
                if(i.FC_booked < i.FC_total){
                    setClass({... "FC"});
                }
                if(i.AC_booked < i.AC_total){
                    setClass({... "AC"});
                }
                if(i.ST_booked < i.ST_total){
                    setClass({... "ST"});
                }
                if(i.SL_booked < i.SL_total){
                    setClass({... "SL"});
                }
                return tclass;
            });
                if (myjson["length"] === 0) {
                    alert("No trains are available");
                } else {
                    console.log(myjson);
                    navigate("trainschedule", {
                        state: { location: obj, query: myjson, tclass: trainClass},
                    });
                }
            });
    };
    return (
        <div className="home-container">
            <h1 className="header-style">Plan Your Journey</h1>
            <div className="container plan-container">
                <h1> Book Tickets </h1>
                <div>
                    <StationSelect name="from" onchange={onChangeObj}/>
                </div>
                <div>
                    <StationSelect name="to" onchange={onChangeObj}/>
                    {/* <InputWithIcon label="to" id="to" onchange={onChangeObj} /> */}
                </div>
                <div>
                    <ResponsiveDatePickers onchange={onChangeObj} />
                </div>
                <div>
                    <SelectTextFields onchange={onChangeObj} />
                </div>
                <div>
                    <ContainedButtons value="Search" onclick={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default Plan_your_journey;
