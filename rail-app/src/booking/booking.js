import { useState } from "react";
import "./bookPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../navbar/nav-bar";
import TrainDetail from "../train-schedule/train";
//import Card from "./ticket_view/card.js";
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
        <>
            <NavBar />
            <div className="booking-section">
                <TrainDetail />
                <div className="container">
                    <p>Passenger details</p>
                    <form onSubmit={submitChange} id="passForm">
                        {
                            // console.log(typeof(passenger));
                            passenger.map((item, i) => {
                                return (
                                    <div id={i}>
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
                        <div className="linker" onClick={addPassenger}>
                            <FontAwesomeIcon icon={faPlus} size="1x" /> Add a
                            passenger
                        </div>
                        <div className="linker" onClick={removePassenger}>
                            <FontAwesomeIcon icon={faMultiply} size="1x" />{" "}
                            Remove a Passenger
                        </div>
                        <input
                            type="submit"
                            value="Continue"
                            onChange={submitChange}
                        />
                    </form>
                </div>
                <TicketFare count={count} />
            </div>
        </>
    );
};
export default Booking;
