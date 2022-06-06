import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import {useLocation,useNavigate} from "react-router-dom";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import TrainDetail from "../train-schedule/train";

const TicketFare = (props) => {
    const count = props.count + 1;
    const fare = props.fare;
    return (
        <div className="container ticket">
            <h4>Fare table: </h4>
            <p>Total Passenger: {count}</p>
            <p>Fare: {fare * count} </p>
        </div>
    );
};

const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const trainDetail = location.state.trainDetail;
    const userFetch = location.state.userFetch;
    const [fare, setFare] = useState(0);
    useEffect(() => {
        fetch("http://localhost:5000/booking/fareCalculation", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({"select": userFetch.select, "train_no": trainDetail.train_no, "from": trainDetail.from_station, "to": trainDetail.to_station}),
        }).then(function (response) {
                return response.json();
            })
            .then(function (myjson) {
                setFare(myjson[0].fare);
            });
    }, [])
    const profile = 
        {
            name: "",
            age: 0,
            gender: "",
            preference: "",
        };
    const [count, setCount] = useState(0);
    const [passenger, setPassengerDetails] = useState([profile]);

    const handleChange = (inp) => {
        setPassengerDetails((s) => {
            const newArr = s.slice();
            if (inp.target.name === "name") {
                newArr[inp.target.className].name = inp.target.value;
            }
            if (inp.target.name === "age") {
                newArr[inp.target.className].age = inp.target.value;
            }
            if (inp.target.name === "gender") {
                newArr[inp.target.className].gender = inp.target.value;
            }
            if (inp.target.name === "preference") {
                newArr[inp.target.className].preference = inp.target.value;
            }
            return newArr;
        });
        console.log(passenger);
    };

    const addPassenger = () => {
        setCount(count + 1);
        setPassengerDetails((s) => [...s, profile]);
    };

    const removePassenger = () => {
        if (count > 0) {
            setCount(count - 1);
            setPassengerDetails((s) => {
                const newArr = s.slice(0, count);
                return newArr;
            });
        }
    };

    const submitChange = (e) => {
        e.preventDefault();
        console.log("Passengers Count: " + count);
        passenger.forEach((item) => {
            console.log(item.name + item.gender + item.age + item.preference);
        });
        navigate("/ticket", {state: {passenger: passenger, count: count, userFetch: userFetch, trainDetail: trainDetail}})
    };

    return (
        <div className="booking-section">
                {/* <div className="container train-container">
                    <TrainDetail />
                </div> */}
                <div className="container passenger-container">
                    <p>Passenger details</p>
                    <form onSubmit={submitChange} id="passForm">
                        {
                            // console.log(typeof(passenger));
                            passenger.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <p>Passenger {i + 1}</p>
                                        <input
                                            className={i}
                                            name="name"
                                            type="text"
                                            placeholder="name"
                                            onChange={handleChange}
                                        />
                                        <input
                                            className={i}
                                            name="age"
                                            placeholder="age"
                                            type="number"
                                            onChange={handleChange}
                                        />
                                        <select
                                            className={i}
                                            name="gender"
                                            placeholder="Gender"
                                            onChange={handleChange}
                                        >
                                            <option
                                                value="null"
                                                disabled
                                                selected
                                                hidden
                                            >
                                                Gender
                                            </option>
                                            <option value="Male">Male</option>
                                            <option value="Female">
                                                Female
                                            </option>
                                            <option value="Others">
                                                Others
                                            </option>
                                        </select>
                                        <select
                                            className={i}
                                            name="preference"
                                            onChange={handleChange}
                                        >
                                            <option
                                                value="Null"
                                                selected
                                                disabled
                                                hidden
                                            >
                                                select Preference
                                            </option>
                                            <option value="No Preference">
                                                No Preference
                                            </option>
                                            <option value="Window">
                                                Window
                                            </option>
                                        </select>
                                    </div>
                                );
                            })
                        }
                        <span className="linker" onClick={addPassenger}>
                            <FontAwesomeIcon icon={faPlus} size="1x" /> Add a
                            passenger
                        </span>
                        <span className="linker" onClick={removePassenger}>
                            <FontAwesomeIcon icon={faMultiply} size="1x" />{" "}
                            Remove a Passenger
                        </span>
                        <input
                            type="submit"
                            value="Continue"
                            onChange={submitChange}
                        />
                    </form>
                </div>
                <TicketFare count={count} fare={fare}/>
            </div>  
    );
};
export default Booking;
