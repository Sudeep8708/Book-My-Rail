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
    const [result, setResult] = useState({});
            fetch("http://localhost:5000/planYourJourney/stationName", {
                    headers: {
                        Accept: "application/json",
                        "Content-type": "application/json",
                    },
                    method: "POST",
                }).then(function(response) {
                    return response.json();
                }).then(function(myjson){
                    setResult(myjson);
                })
    console.log(result)
    const onChangeObj = (e) => {
        setObj({ ...obj, [e.target.name]: e.target.value });
    };

    const onChangeDate = (o) => {
        setObj({ ...obj, [o.name]: o.value });
    };

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
                if (myjson["length"] === 0) {
                    alert("No trains are available");
                } else {
                    console.log(myjson);
                    navigate("trainschedule", {
                        state: { location: obj, query: myjson },
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
                    <StationSelect name="from" />
                </div>
                <div>
                    <StationSelect name="to"/>
                    {/* <InputWithIcon label="to" id="to" onchange={onChangeObj} /> */}
                </div>
                <div>
                    <ResponsiveDatePickers onchange={onChangeDate} />
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
