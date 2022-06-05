import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import TrainDetail from "../train-schedule/train";

const TicketFare = (props) => {
    const count = props.count + 1;
    let fare = 195 * count;
    return (
        <div className="container ticket">
            <h4>Fare table: </h4>
            <p>Total Passenger: {count}</p>
            <p>Fare: {fare} </p>
        </div>
    );
};

const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const trainDetail = location.state.trainDetail;
    const userFetch = location.state.userFetch;
    const obj = {"train_no": trainDetail.train_no, "from": trainDetail.from_station, "to": trainDetail.to_station};
    console.log(trainDetail, userFetch);
    useEffect(() => {
        fetch("http://localhost:5000/booking/fareCalculation", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(obj),
        }).then(function (response) {
                return response.json();
            })
            .then(function (myjson) {
                if (myjson["length"] === 0) {
                    alert("No trains are available");
                } else {
                    console.log(myjson);
                    navigate("trainschedule", {
                        state: { location: obj, query: myjson},
                    });
                }
            });
    }, [])
    const profile = [
        {
            name: "",
            age: 0,
            gender: "",
            preference: "",
        },
    ];
    const [count, setCount] = useState(0);
    const [passenger, setPassengerDetails] = useState(profile);

    const handleChange = (inp) => {
        setPassengerDetails((s) => {
            const newArr = s.slice();
            if (inp.target.name === "name") {
                newArr[count].name = inp.target.value;
            }
            if (inp.target.name === "age") {
                newArr[count].age = inp.target.value;
            }
            if (inp.target.name === "gender") {
                newArr[count].gender = inp.target.value;
            }
            if (inp.target.name === "preference") {
                newArr[count].preference = inp.target.value;
            }
            return newArr;
        });
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
                                            name="name"
                                            type="text"
                                            placeholder="name"
                                            onChange={handleChange}
                                        />
                                        <input
                                            name="age"
                                            placeholder="age"
                                            type="number"
                                            onChange={handleChange}
                                        />
                                        <select
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
                <TicketFare count={count} />
            </div>  
    );
};
export default Booking;
